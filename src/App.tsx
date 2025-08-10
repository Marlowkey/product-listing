import { Button } from "@/components/ui/button"
import  products  from "./data"
import  ProductCard  from "@/components/ProductCard"

function App() {

  const handleAddToCart = (product) => {
  console.log("Added to cart:", product);
  };


  return (
    <div className="m-8 flex min-h-svh flex-col border-2 rounded-lg shadow-md">
      <h1 className="font-redhatbold m-6 text-2xl font-bold justify-start"> Desserts </h1>    
       <section className="max-w-7xl mx-auto px-4 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((item, index) => (
        <ProductCard
          key={index}
          product={item}
          onAddToCart={handleAddToCart}
        />
      ))}
            </div>

       </section>

    </div>
  )
  
}

export default App