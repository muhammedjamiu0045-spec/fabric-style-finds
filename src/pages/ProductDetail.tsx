import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductByHandle } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowLeft, Heart } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { useWishlistStore } from "@/stores/wishlistStore";
import { toast } from "sonner";
import { Header } from "@/components/Header";

export default function ProductDetail() {
  const { handle } = useParams<{ handle: string }>();
  const product = getProductByHandle(handle || "");
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const addItem = useCartStore((state) => state.addItem);
  const toggleItem = useWishlistStore((state) => state.toggleItem);
  const isWishlisted = useWishlistStore((state) => state.isWishlisted)(product?.id || "");

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

  const variant = product.variants[selectedVariantIdx];

  const handleAddToCart = () => {
    if (!variant) return;
    addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
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
              {product.images[selectedImage] ? (
                <img src={product.images[selectedImage]} alt={product.title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-secondary text-muted-foreground">No image</div>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-16 h-16 rounded overflow-hidden border-2 ${i === selectedImage ? "border-primary" : "border-transparent"}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
          <div>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">{product.title}</h1>
            <p className="text-2xl font-semibold text-primary mb-4">${variant?.price.toFixed(2)}</p>
            <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>

            {product.variants.length > 1 && (
              <div className="mb-6">
                <label className="text-sm font-medium mb-2 block">Variant</label>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((v, i) => (
                    <Button
                      key={v.id}
                      variant={i === selectedVariantIdx ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedVariantIdx(i)}
                      disabled={!v.available}
                    >
                      {v.title}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-3">
              <Button size="lg" onClick={handleAddToCart} disabled={!variant?.available} className="flex-1 md:flex-none">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  toggleItem(product.id);
                  toast.success(isWishlisted ? "Removed from wishlist" : "Added to wishlist", { position: "top-center" });
                }}
              >
                <Heart className={`h-4 w-4 ${isWishlisted ? "fill-destructive text-destructive" : ""}`} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
