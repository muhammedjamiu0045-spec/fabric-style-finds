import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Loader2 } from "lucide-react";
import { useCartStore, type ShopifyProduct } from "@/stores/cartStore";
import { toast } from "sonner";

interface ProductCardProps {
  product: ShopifyProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCartStore(state => state.addItem);
  const isLoading = useCartStore(state => state.isLoading);
  const { node } = product;
  const image = node.images.edges[0]?.node;
  const variant = node.variants.edges[0]?.node;
  const price = node.priceRange.minVariantPrice;

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!variant) return;
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success("Added to cart", { description: node.title, position: "top-center" });
  };

  return (
    <Link to={`/product/${node.handle}`} className="group block">
      <div className="overflow-hidden rounded-md bg-card aspect-[3/4] mb-3">
        {image ? (
          <img
            src={image.url}
            alt={image.altText || node.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-secondary">
            <span className="text-muted-foreground text-sm">No image</span>
          </div>
        )}
      </div>
      <h3 className="font-display text-lg font-semibold truncate">{node.title}</h3>
      <p className="text-muted-foreground text-sm line-clamp-1 mb-2">{node.description}</p>
      <div className="flex items-center justify-between">
        <span className="font-semibold text-primary">
          {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
        </span>
        <Button size="sm" onClick={handleAddToCart} disabled={isLoading || !variant?.availableForSale}>
          {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <><ShoppingCart className="h-4 w-4 mr-1" />Add</>}
        </Button>
      </div>
    </Link>
  );
};
