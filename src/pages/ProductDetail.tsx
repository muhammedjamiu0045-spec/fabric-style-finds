import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { storefrontApiRequest, STOREFRONT_PRODUCT_BY_HANDLE_QUERY } from "@/lib/shopify";
import type { ShopifyProduct } from "@/lib/shopify";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Loader2, ArrowLeft } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { Header } from "@/components/Header";

export default function ProductDetail() {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<ShopifyProduct["node"] | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const addItem = useCartStore(state => state.addItem);
  const isLoading = useCartStore(state => state.isLoading);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await storefrontApiRequest(STOREFRONT_PRODUCT_BY_HANDLE_QUERY, { handle });
        setProduct(data?.data?.productByHandle || null);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [handle]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="flex justify-center py-20"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Header />
        <div className="container py-20 text-center">
          <p className="text-muted-foreground">Product not found</p>
          <Link to="/" className="text-primary underline mt-4 inline-block">Back to shop</Link>
        </div>
      </>
    );
  }

  const variant = product.variants.edges[selectedVariantIdx]?.node;
  const images = product.images.edges;
  const shopifyProduct: ShopifyProduct = { node: product };

  const handleAddToCart = async () => {
    if (!variant) return;
    await addItem({
      product: shopifyProduct,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success("Added to cart", { description: product.title, position: "top-center" });
  };

  return (
    <>
      <Header />
      <div className="container py-8 max-w-5xl">
        <Link to="/" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground mb-6 text-sm">
          <ArrowLeft className="h-4 w-4" /> Back to shop
        </Link>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <div className="aspect-square rounded-md overflow-hidden bg-card mb-3">
              {images[selectedImage] ? (
                <img src={images[selectedImage].node.url} alt={images[selectedImage].node.altText || product.title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-secondary text-muted-foreground">No image</div>
              )}
            </div>
            {images.length > 1 && (
              <div className="flex gap-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-16 h-16 rounded overflow-hidden border-2 ${i === selectedImage ? 'border-primary' : 'border-transparent'}`}
                  >
                    <img src={img.node.url} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
          <div>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">{product.title}</h1>
            <p className="text-2xl font-semibold text-primary mb-4">
              {variant?.price.currencyCode} {parseFloat(variant?.price.amount || "0").toFixed(2)}
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>

            {product.variants.edges.length > 1 && (
              <div className="mb-6">
                <label className="text-sm font-medium mb-2 block">Variant</label>
                <div className="flex flex-wrap gap-2">
                  {product.variants.edges.map((v, i) => (
                    <Button
                      key={v.node.id}
                      variant={i === selectedVariantIdx ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedVariantIdx(i)}
                      disabled={!v.node.availableForSale}
                    >
                      {v.node.title}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            <Button size="lg" onClick={handleAddToCart} disabled={isLoading || !variant?.availableForSale} className="w-full md:w-auto">
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <ShoppingCart className="h-4 w-4 mr-2" />}
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
