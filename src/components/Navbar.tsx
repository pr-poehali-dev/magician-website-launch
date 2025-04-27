import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-magic-purple animate-sparkle" />
              <span className="font-playfair text-xl font-bold text-gray-900">Мистер Магик</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="px-3 py-2 text-gray-700 hover:text-magic-purple transition">
                Главная
              </Link>
              <Link to="#services" className="px-3 py-2 text-gray-700 hover:text-magic-purple transition">
                Услуги
              </Link>
              <Link to="#gallery" className="px-3 py-2 text-gray-700 hover:text-magic-purple transition">
                Галерея
              </Link>
              <Link to="#testimonials" className="px-3 py-2 text-gray-700 hover:text-magic-purple transition">
                Отзывы
              </Link>
              <Link to="#contact">
                <Button className="bg-magic-purple hover:bg-magic-purple/90">
                  Связаться
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-magic-purple focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-magic-purple"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link
              to="#services"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-magic-purple"
              onClick={() => setIsMenuOpen(false)}
            >
              Услуги
            </Link>
            <Link
              to="#gallery"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-magic-purple"
              onClick={() => setIsMenuOpen(false)}
            >
              Галерея
            </Link>
            <Link
              to="#testimonials"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-magic-purple"
              onClick={() => setIsMenuOpen(false)}
            >
              Отзывы
            </Link>
            <Link
              to="#contact"
              className="block px-3 py-2 rounded-md text-magic-purple"
              onClick={() => setIsMenuOpen(false)}
            >
              Связаться
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
