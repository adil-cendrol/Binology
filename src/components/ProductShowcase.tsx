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
    // { id: 1, name: "Classic Roast", image: blend1 },
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
        <div className="flex items-center justify-center max-w-6xl mx-auto">
          {/* prev arrow */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevProduct}
            className="text-white hover:text-white/80 hover:bg-transparent p-2 mr-4"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          {/* product cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-12 mx-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="text-center group transition-transform duration-300"
              >
                {/* circular background with image overflow */}
                <div className="relative w-[200px] h-[200px] flex items-center justify-center rounded-full bg-[#FFEFCD] mb-6 mx-auto">
                    <img
                      src={product.image}
                      alt={product.name}
                      className={"w-[400px] h-[465px] object-contain ml-[21px]"}
                      style={{ clipPath: 'circle(189px at 48% 31%)' }}
                      // style={{  clipPath: 'circle(50% at 50% 50%)'}}
                    />
                </div>

                {/* product name */}
                <h3 className="text-lg font-semibold text-white mb-4">
                  {product.name}
                </h3>

                {/* add to cart button */}
                <Button className="bg-[#484A35] hover:bg-[#3A3C2A] text-white px-6 py-2 rounded-lg font-semibold shadow-lg transition-colors">
                  Add to cart
                </Button>
              </div>
            ))}
          </div>

          {/* next arrow */}
          <Button
            variant="ghost"
            size="icon"
            onClick={nextProduct}
            className="text-white hover:text-white/80 hover:bg-transparent p-2 ml-4"
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
