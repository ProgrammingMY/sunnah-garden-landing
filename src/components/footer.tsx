import { Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-green-900 text-green-50 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* App Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Sunnah Garden</h2>
            <p className="text-green-200 mb-2">
              Grow Your Digital Garden Through Sunnah
            </p>
          </div>

          {/* Contact Info */}
          <div className="md:text-right">
            <h3 className="font-semibold mb-2">Developed by</h3>
            <p className="text-green-200 mb-1">Loqman Hakim</p>
            <p className="text-green-200 mb-2">Hakim Technologies Services</p>
            <div className="flex items-center gap-2 md:justify-end">
              <Mail size={16} className="text-green-200" />
              <a 
                href="mailto:admin@hakimtech.my" 
                className="text-green-200 hover:text-white transition-colors"
              >
                admin@hakimtech.my
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-green-800 pt-4 text-center text-sm text-green-300">
          <p>
            © {currentYear} Sunnah Garden. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}