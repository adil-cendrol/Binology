import { Coffee, Instagram, Facebook, Twitter } from "lucide-react"

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Story", href: "#story" },
      { name: "Careers", href: "#careers" },
      { name: "Press", href: "#press" }
    ],
    support: [
      { name: "Contact", href: "#contact" },
      { name: "FAQ", href: "#faq" },
      { name: "Shipping", href: "#shipping" },
      { name: "Returns", href: "#returns" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" }
    ]
  }

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" }
  ]

  return (
    <footer className="bg-coffee-dark text-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-golden rounded-full flex items-center justify-center">
                <Coffee className="w-5 h-5 text-coffee-dark" />
              </div>
              <span className="text-xl font-bold">BEANOLOGY</span>
            </div>
            <p className="text-cream/70 mb-6 leading-relaxed">
              Elevate Your Coffee Experience with premium beans and expert brewing knowledge.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-cream/10 hover:bg-golden hover:text-coffee-dark rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-6 text-golden">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-cream/70 hover:text-golden transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-golden">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-cream/70 hover:text-golden transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-golden">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-cream/70 hover:text-golden transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cream/60 text-sm">
            © 2024 Beanology. All rights reserved.
          </p>
          <p className="text-cream/60 text-sm mt-4 md:mt-0">
            Made with ❤️ for coffee lovers everywhere
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer