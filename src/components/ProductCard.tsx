import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { useWishlistStore } from "@/stores/wishlistStore";
import { toast } from "sonner";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCartStore((state) => state.addItem);
  const toggleItem = useWishlistStore((state) => state.toggleItem);
  const isWishlisted = useWishlistStore((state) => state.isWishlisted)(product.id);

  const variant = product.variants[0];

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
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

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleItem(product.id);
    toast.success(isWishlisted ? "Removed from wishlist" : "Added to wishlist", {
      description: product.title,
      position: "top-center",
    });
  };

  return (
    <Link to={`/product/${product.handle}`} className="group block">
      <div className="overflow-hidden rounded-md bg-card aspect-[3/4] mb-3 relative">
        {product.images[0] ? (
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-secondary">
            <span className="text-muted-foreground text-sm">No image</span>
          </div>
        )}
        <button
          onClick={handleWishlist}
          className="absolute top-2 right-2 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
        >
          <Heart
            className={`h-4 w-4 transition-colors ${isWishlisted ? "fill-destructive text-destructive" : "text-muted-foreground"}`}
          />
        </button>
      </div>
      <h3 className="font-display text-lg font-semibold truncate">{product.title}</h3>
      <p className="text-muted-foreground text-sm line-clamp-1 mb-2">{product.description}</p>
      <div className="flex items-center justify-between">
        <span className="font-semibold text-primary">
          ${product.price.toFixed(2)}
        </span>
        <Button size="sm" onClick={handleAddToCart} disabled={!variant?.available}>
          <ShoppingCart className="h-4 w-4 mr-1" />Add
        </Button>
      </div>
    </Link>
  );
};
