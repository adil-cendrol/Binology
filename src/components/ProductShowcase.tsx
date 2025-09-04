import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react"
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
      description: "A timeless blend with rich, full-bodied flavor",
      price: "$24.99",
      image: blend1
    },
    {
      id: 2,
      name: "Artisan Blend",
      description: "Carefully crafted single-origin experience",
      price: "$29.99",
      image: blend2
    },
    {
      id: 3,
      name: "Reserve Origin",
      description: "Premium beans from select coffee regions",
      price: "$34.99",
      image: blend3
    }
  ]

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length)
  }

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  return (
    <section id="catalog" className="py-20 bg-coffee-light/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-dark mb-4">
            FEATURED BLENDS
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of premium coffee blends, 
            each with its own unique character and story.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center justify-center space-x-8">
            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevProduct}
              className="bg-background/80 hover:bg-background border-coffee-light"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            {/* Product Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1 max-w-4xl">
              {products.map((product, index) => {
                const isActive = index === currentIndex
                const isVisible = Math.abs(index - currentIndex) <= 1 || 
                  (currentIndex === 0 && index === products.length - 1) ||
                  (currentIndex === products.length - 1 && index === 0)

                return (
                  <Card 
                    key={product.id}
                    className={`transition-all duration-500 ${
                      isActive 
                        ? 'scale-105 shadow-xl ring-2 ring-golden/50' 
                        : 'scale-95 opacity-70'
                    } ${!isVisible ? 'hidden md:block' : ''}`}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-coffee-light">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-coffee-dark mb-2">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground mb-4 text-sm">
                        {product.description}
                      </p>
                      <p className="text-2xl font-bold text-coffee-dark mb-6">
                        {product.price}
                      </p>
                      <Button 
                        className="w-full bg-coffee-dark hover:bg-coffee-medium text-cream"
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextProduct}
              className="bg-background/80 hover:bg-background border-coffee-light"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-golden' : 'bg-coffee-light'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase