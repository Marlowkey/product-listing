import { Button } from "@/components/ui/button";
import products from "./data";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";

// ...existing code...

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.name === product.name);
      if (existing) {
        return prevCart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        return [...prevCart, product];
      }
    });
    console.log("Added to cart:", product);
  };

  return (
    <div className="justify-center items-center ">
      <div className="m-6 text-4xl font-bold justify-center items-center text-center">
        <h1 className="font-[redhatbold] text-2xl font-bold "> Desserts </h1>
      </div>
      {/* Responsive layout: grid on desktop, stacked on mobile */}
      <div className="flex flex-col lg:flex-row gap-8 p-4">
        <section className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((item, index) => (
              <ProductCard
                key={index}
                product={item}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </section>
        <aside className="lg:w-1/3 lg:max-w-xs w-full mt-8 lg:mt-0 p-4 ">
          <h1 className="font-bold mb-2">Cart</h1>
          {cart.length === 0 ? (
            <div>No items in cart.</div>
          ) : (
            <ul>
              {cart.map((item, idx) => (
                <li key={idx}>
                  {item.name} x {item.quantity}
                </li>
              ))}
            </ul>
          )}
        </aside>
      </div>
    </div>
  );
}
export default App;