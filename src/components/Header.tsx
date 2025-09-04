import { Coffee, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "HOME", href: "#home" },
    { name: "BEANS CATALOG", href: "#catalog" },
    { name: "ABOUT", href: "#about" },
    { name: "BLOG", href: "#blog" },
    { name: "CONTACT", href: "#contact" },
  ]

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 py-6">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-12 flex items-center justify-center">
              <Coffee className="w-8 h-8 text-cream" strokeWidth={1.5} />
            </div>
            <span className="text-2xl font-light text-cream tracking-wider">BEANOLOGY</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            {navItems.map((item, index) => (
              <div key={item.name} className="flex items-center">
                <a
                  href={item.href}
                  className="text-sm font-medium text-cream hover:text-golden transition-colors duration-200 px-1"
                >
                  {item.name}
                </a>
                {index < navItems.length - 1 && (
                  <span className="text-cream/60 mx-4">|</span>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-cream hover:text-golden hover:bg-cream/10"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-coffee-dark/90 backdrop-blur-sm rounded-lg mt-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-sm font-medium text-cream hover:text-golden transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header