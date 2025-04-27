import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                Забронируйте <span className="text-magic-purple">выступление</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Свяжитесь со мной, чтобы обсудить детали вашего мероприятия и узнать о доступных датах. Я создам индивидуальное магическое шоу, которое подходит именно вам.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-magic-purple/10 flex items-center justify-center text-magic-purple">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Телефон</h3>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-magic-purple/10 flex items-center justify-center text-magic-purple">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">info@master-magic.ru</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-magic-purple/10 flex items-center justify-center text-magic-purple">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Город</h3>
                    <p className="text-muted-foreground">Москва (возможны выезды)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/50">
              <h3 className="text-2xl font-playfair font-bold mb-6">Отправьте заявку</h3>
              
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-magic-purple focus:border-transparent"
                      placeholder="Иван Иванов"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-magic-purple focus:border-transparent"
                      placeholder="example@mail.ru"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-magic-purple focus:border-transparent"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                
                <div>
                  <label htmlFor="eventType" className="block mb-2 text-sm font-medium">
                    Тип мероприятия
                  </label>
                  <select
                    id="eventType"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-magic-purple focus:border-transparent"
                    required
                  >
                    <option value="" disabled selected>Выберите тип мероприятия</option>
                    <option value="private">Частное выступление</option>
                    <option value="corporate">Корпоративное мероприятие</option>
                    <option value="wedding">Свадьба</option>
                    <option value="birthday">День рождения</option>
                    <option value="kids">Детский праздник</option>
                    <option value="other">Другое</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-magic-purple focus:border-transparent"
                    placeholder="Расскажите подробнее о вашем мероприятии..."
                    required
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full bg-magic-purple hover:bg-magic-purple/90">
                  <Send className="w-5 h-5 mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
