import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary border-t-2 border-black">
      <div className="container px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-2xl font-abril font-bold mb-4 uppercase border-b-2 border-black pb-2">О нас</h3>
            <p className="mb-6 font-oldstandard text-black/80">
              Ведущее издательство в мире магии и иллюзий с 1923 года. Мы освещаем самые загадочные выступления и раскрываем секреты великих иллюзионистов.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 border-2 border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 border-2 border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border-2 border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 border-2 border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-2xl font-abril font-bold mb-4 uppercase border-b-2 border-black pb-2">Рубрики</h3>
            <ul className="space-y-2 font-oldstandard">
              <li>
                <Link to="/" className="text-black hover:underline inline-block border-b border-transparent hover:border-black">
                  Главная страница
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-black hover:underline inline-block border-b border-transparent hover:border-black">
                  Услуги магии
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-black hover:underline inline-block border-b border-transparent hover:border-black">
                  Фотогалерея
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-black hover:underline inline-block border-b border-transparent hover:border-black">
                  Отзывы свидетелей
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-black hover:underline inline-block border-b border-transparent hover:border-black">
                  Архив статей
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-black hover:underline inline-block border-b border-transparent hover:border-black">
                  Контакты редакции
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-2xl font-abril font-bold mb-4 uppercase border-b-2 border-black pb-2">Контакты</h3>
            <ul className="space-y-4 font-oldstandard">
              <li className="flex">
                <MapPin className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>г. Москва, ул. Волшебная, д. 42</span>
              </li>
              <li className="flex">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>+7 (123) 456-78-90</span>
              </li>
              <li className="flex">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>magic@illusionist.ru</span>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-2xl font-abril font-bold mb-4 uppercase border-b-2 border-black pb-2">Подписка</h3>
            <p className="mb-4 font-oldstandard text-black/80">
              Подпишитесь на нашу газету, чтобы получать эксклюзивные новости о магических событиях.
            </p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Ваш email адрес" 
                className="px-4 py-2 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-black text-white hover:bg-black/80 transition-colors border-2 border-black font-bold"
              >
                Подписаться
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t-2 border-black py-6">
        <div className="container px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="font-abril text-4xl font-black mb-4 md:mb-0">ТАИНСТВЕННЫЕ ВЕСТИ</div>
          <div className="text-black/70 font-oldstandard text-sm">
            &copy; {currentYear} Иллюзионист Александр. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
