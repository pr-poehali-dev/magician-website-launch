import { Link } from "react-router-dom";
import { Sparkles, Instagram, Facebook, Youtube, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-magic-dark/80 text-white py-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-magic-purple" />
              <span className="font-playfair text-xl font-bold">Мистер Магик</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Профессиональный иллюзионист с более чем 10-летним опытом создания незабываемых магических представлений.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-magic-purple/20 hover:bg-magic-purple flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-magic-purple/20 hover:bg-magic-purple flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-magic-purple/20 hover:bg-magic-purple flex items-center justify-center transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="mailto:info@master-magic.ru" 
                className="w-10 h-10 rounded-full bg-magic-purple/20 hover:bg-magic-purple flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-playfair text-lg font-bold mb-4">Разделы</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-magic-purple transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="#services" className="text-gray-400 hover:text-magic-purple transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link to="#gallery" className="text-gray-400 hover:text-magic-purple transition-colors">
                  Галерея
                </Link>
              </li>
              <li>
                <Link to="#testimonials" className="text-gray-400 hover:text-magic-purple transition-colors">
                  Отзывы
                </Link>
              </li>
              <li>
                <Link to="#contact" className="text-gray-400 hover:text-magic-purple transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-lg font-bold mb-4">Услуги</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#services" className="text-gray-400 hover:text-magic-purple transition-colors">
                  Частные выступления
                </Link>
              </li>
              <li>
                <Link to="#services" className="text-gray-400 hover:text-magic-purple transition-colors">
                  Корпоративные мероприятия
                </Link>
              </li>
              <li>
                <Link to="#services" className="text-gray-400 hover:text-magic-purple transition-colors">
                  Свадебные торжества
                </Link>
              </li>
              <li>
                <Link to="#services" className="text-gray-400 hover:text-magic-purple transition-colors">
                  Детские праздники
                </Link>
              </li>
              <li>
                <Link to="#services" className="text-gray-400 hover:text-magic-purple transition-colors">
                  Мастер-классы
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-magic-purple shrink-0 mt-0.5" />
                <span className="text-gray-400">+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-magic-purple shrink-0 mt-0.5" />
                <span className="text-gray-400">info@master-magic.ru</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-magic-purple shrink-0 mt-0.5" />
                <span className="text-gray-400">г. Москва, выступления по всей России</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-center text-gray-500">
            © {currentYear} Мистер Магик. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
