import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <nav className={`sticky top-0 z-40 w-full transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur border-b-2 border-black" : "bg-transparent"}`}>
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center font-abril">
            <span className="text-2xl md:text-3xl font-black uppercase">
              Таинственные вести
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavLink href="#services">Услуги</NavLink>
            <NavLink href="#gallery">Галерея</NavLink>
            <NavLink href="#about">О нас</NavLink>
            <NavLink href="#contact">Контакты</NavLink>
            <Button className="ml-4 bg-black hover:bg-black/80 text-white border-2 border-black">
              Заказать
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Date Bar under main navigation */}
        <div className={`hidden lg:flex justify-between items-center py-1 border-t-2 border-b-2 border-black text-sm ${isScrolled ? "" : "bg-white/95"}`}>
          <div className="uppercase font-bold tracking-widest">
            {new Date().toLocaleDateString('ru-RU', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
          </div>
          <div className="flex space-x-4">
            <span>Выпуск №42</span>
            <span>|</span>
            <span>С 1923 года</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white pt-16 lg:hidden overflow-y-auto">
          <div className="container p-4">
            <div className="border-t-2 border-black pt-8 flex flex-col gap-6">
              <MobileNavLink href="#services" onClick={closeMobileMenu}>Услуги</MobileNavLink>
              <MobileNavLink href="#gallery" onClick={closeMobileMenu}>Галерея</MobileNavLink>
              <MobileNavLink href="#about" onClick={closeMobileMenu}>О нас</MobileNavLink>
              <MobileNavLink href="#contact" onClick={closeMobileMenu}>Контакты</MobileNavLink>
              
              <Button className="w-full bg-black hover:bg-black/80 text-white border-2 border-black py-6 mt-4">
                Заказать
              </Button>
            </div>
            
            <div className="mt-8 pt-6 border-t-2 border-black">
              <div className="text-center font-oldstandard">
                <p className="uppercase tracking-widest font-bold mb-2">Издание</p>
                <p className="text-2xl font-abril mb-4">ТАИНСТВЕННЫЕ ВЕСТИ</p>
                <p>г. Москва, ул. Волшебная, д. 42</p>
                <p>+7 (123) 456-78-90</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a
      href={href}
      className="px-4 py-2 text-sm uppercase tracking-wider font-bold hover:text-black/70 transition-colors"
    >
      {children}
    </a>
  );
};

const MobileNavLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-3xl font-abril border-b-2 border-black pb-2 hover:text-black/70 transition-colors"
    >
      {children}
    </a>
  );
};

export default Navbar;
