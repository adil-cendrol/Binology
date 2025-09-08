import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

// assets
import blend1 from "@/assets/Group 3.png"
import blend2 from "@/assets/Group 4.png"
import blend3 from "@/assets/Group 5.png"
import bean2 from "@/assets/Frame.png"

const ProductShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const products = [
    { id: 1, name: "Classic Roast", image: blend1 },
    { id: 2, name: "Artisan Blend", image: blend2 },
    { id: 3, name: "Reserve Origin", image: blend3 },
  ]

  const nextProduct = () =>
    setCurrentIndex((prev) => (prev + 1) % products.length)
  const prevProduct = () =>
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)

  return (
    <section
      id="catalog"
      className="relative py-20 overflow-visible"
      style={{ backgroundColor: "hsl(35, 25%, 65%)" }}
    >
      {/* floating bean */}
      <div className="bean-left">
        <img src={bean2} alt="beans left" width={180} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-center max-w-5xl mx-auto">
          {/* prev */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevProduct}
            className="text-coffee-dark hover:text-coffee-medium hover:bg-transparent p-2"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          {/* product cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-16 mx-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="text-center group transition-transform duration-300 overflow-visible"
              >
                {/* circle + image */}
                <div className="mb-16 overflow-visible">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-60 h-60 object-contain"
                  />
                </div>

                {/* name */}
                <h3 className="text-lg font-semibold text-coffee-dark mb-4">
                  {product.name}
                </h3>

                {/* button */}
                <Button className="bg-coffee-dark hover:bg-coffee-medium text-cream px-6 py-2 rounded-full font-medium">
                  Add to cart
                </Button>
              </div>
            ))}
          </div>

          {/* next */}
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

      {/* bean animation */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-150px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .bean-left {
          position: absolute;
          top: -40%;
          left: 0;
          z-index: 50;
          animation: slideInLeft 1.5s ease-out forwards, float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default ProductShowcase
