import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import blend1 from "@/assets/coffee-blend-1.jpg"
import blend2 from "@/assets/coffee-blend-2.jpg"
import blend3 from "@/assets/coffee-blend-3.jpg"

const ProductShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const products = [
    {
      id: 1,
      name: "Classic Roast",
      image: blend1,
      bgColor: "bg-cream"
    },
    {
      id: 2,
      name: "Artisan Blend", 
      image: blend2,
      bgColor: "bg-coffee-dark"
    },
    {
      id: 3,
      name: "Reserve Origin",
      image: blend3,
      bgColor: "bg-golden"
    }
  ]

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length)
  }

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  return (
    <section id="catalog" className="py-20" style={{ backgroundColor: 'hsl(35, 25%, 65%)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center max-w-5xl mx-auto">
          {/* Left Arrow */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevProduct}
            className="text-coffee-dark hover:text-coffee-medium hover:bg-transparent p-2"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          {/* Product Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 mx-8">
            {products.map((product, index) => (
              <div key={product.id} className="text-center">
                {/* Circular Background with Product */}
                <div className="relative mb-6">
                  <div className={`w-48 h-48 mx-auto rounded-full ${product.bgColor} flex items-center justify-center shadow-lg`}>
                    <div className="w-32 h-40 relative">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Product Name */}
                <h3 className="text-xl font-medium text-coffee-dark mb-4">
                  {product.name}
                </h3>

                {/* Add to Cart Button */}
                <Button 
                  className="bg-coffee-dark hover:bg-coffee-medium text-cream px-6 py-2 rounded-full font-medium"
                >
                  Add to cart
                </Button>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <Button
            variant="ghost"
            size="icon"
            onClick={nextProduct}
            className="text-coffee-dark hover:text-coffee-medium hover:bg-transparent p-2"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase