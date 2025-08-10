import React from "react";
import { ShoppingCart } from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Define the shape of the product object
interface Product {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
}

// Props for the ProductCard component
interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg">
      <CardHeader className="p-0">
        <picture>
          <source media="(min-width:1024px)" srcSet={product.image.desktop} />
          <source media="(min-width:768px)" srcSet={product.image.tablet} />
          <source media="(min-width:320px)" srcSet={product.image.mobile} />
          <img
            src={product.image.thumbnail}
            alt={product.name}
            className="w-full h-[180px] object-cover block"
            loading="lazy"
          />
        </picture>
      </CardHeader>

      <CardContent className="py-4 px-4">
        <h3 className="text-lg font-semibold truncate font-redhat">{product.name}</h3>
        <p className="text-sm text-muted-foreground mt-1">{product.category}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-xl font-bold">${product.price.toFixed(2)}</div>
          <div className="text-sm text-gray-500">per item</div>
        </div>
      </CardContent>

      <CardFooter className="px-4 py-3">
        <Button
          onClick={() => onAddToCart?.(product)}
          className="w-full flex items-center justify-center gap-2 rounded-xl p-2"
        >
          <ShoppingCart size={16} />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
