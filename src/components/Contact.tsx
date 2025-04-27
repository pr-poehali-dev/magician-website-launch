import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CalendarDays, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="border-2 border-black p-6 lg:p-10 bg-secondary/20">
            <div className="inline-block border-b-2 border-black mb-6">
              <h2 className="text-3xl font-abril font-bold uppercase">Экстренная связь</h2>
            </div>
            <p className="mb-8 font-oldstandard text-black/80">
              Отправьте телеграмму для срочного бронирования сеанса магии или запроса информации о предстоящих выступлениях.
            </p>
            
            <form className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <label htmlFor="name" className="block mb-2 font-bold text-sm uppercase tracking-wider">
                    Ваше имя
                  </label>
                  <Input 
                    id="name" 
                    className="border-2 border-black focus:ring-black w-full bg-white" 
                    placeholder="Иван Иванов" 
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="email" className="block mb-2 font-bold text-sm uppercase tracking-wider">
                    Электронный адрес
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    className="border-2 border-black focus:ring-black w-full bg-white" 
                    placeholder="ivan@example.com" 
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 font-bold text-sm uppercase tracking-wider">
                  Тема сообщения
                </label>
                <Input 
                  id="subject" 
                  className="border-2 border-black focus:ring-black w-full bg-white" 
                  placeholder="Запрос выступления" 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-bold text-sm uppercase tracking-wider">
                  Ваше сообщение
                </label>
                <Textarea 
                  id="message" 
                  className="border-2 border-black focus:ring-black w-full min-h-[150px] bg-white" 
                  placeholder="Опишите ваше мероприятие и пожелания..." 
                />
              </div>
              
              <Button type="submit" className="bg-black hover:bg-black/90 text-white border-2 border-black w-full">
                Отправить сообщение
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col">
            <div className="border-2 border-black p-6 mb-6 bg-secondary/10 flex-1">
              <div className="inline-block border-b-2 border-black mb-6">
                <h2 className="text-3xl font-abril font-bold uppercase">Корреспонденция</h2>
              </div>
              
              <p className="mb-6 font-oldstandard text-black/80">
                Мы с нетерпением ждем возможности добавить волшебство в ваше мероприятие. Свяжитесь с нами любым удобным способом.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 border-2 border-black flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Телефонная линия</h3>
                    <p className="font-oldstandard">+7 (123) 456-78-90</p>
                    <p className="font-oldstandard text-sm text-black/60">Ежедневно с 10:00 до 20:00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 border-2 border-black flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Электронная почта</h3>
                    <p className="font-oldstandard">magic@illusionist.ru</p>
                    <p className="font-oldstandard text-sm text-black/60">Отвечаем в течение 24 часов</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 border-2 border-black flex items-center justify-center mr-4">
                    <CalendarDays className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Часы работы</h3>
                    <p className="font-oldstandard">Пн-Пт: 10:00 - 20:00</p>
                    <p className="font-oldstandard">Сб-Вс: 12:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-2 border-black h-96 bg-secondary/5 relative">
              <div className="absolute top-0 left-0 m-2 bg-black text-white p-2 text-xs">
                Карта
              </div>
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Карта местоположения" 
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 p-3 text-white">
                <p className="text-sm font-bold">Наш офис: г. Москва, ул. Волшебная, д. 42</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
