import { Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-secondary/30 border-b border-black/10">
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 py-16">
        <div className="text-center mb-8">
          <div className="inline-block border-b-2 border-black pb-2 mb-4">
            <p className="text-sm uppercase tracking-widest font-bold">Экстренный выпуск • {new Date().toLocaleDateString('ru-RU')}</p>
          </div>
          <h1 className="font-abril text-6xl md:text-8xl font-black mb-6 tracking-tight leading-none text-black">
            ТАИНСТВЕННЫЕ ВЕСТИ
          </h1>
          <div className="flex justify-center">
            <div className="h-1 w-16 bg-black mx-2"></div>
            <div className="h-1 w-32 bg-black mx-2"></div>
            <div className="h-1 w-16 bg-black mx-2"></div>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-stretch gap-8 mt-10">
          <div className="lg:w-1/2 border-t-2 border-r-2 border-black pt-6 pr-6 text-left">
            <div className="inline-flex items-center px-3 py-1 bg-black text-white mb-6">
              <Star className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium uppercase">Сенсация</span>
            </div>
            
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 leading-tight text-black">
              Александр Невероятный: <span className="font-italic">иллюзионист потрясает публику</span>
            </h2>
            
            <div className="relative">
              <p className="first-letter:text-6xl first-letter:font-bold first-letter:mr-2 first-letter:float-left text-xl mb-6 font-oldstandard text-black/80 leading-relaxed">
                Известный маг и чародей снова удивил всех своим мастерством. Свидетели утверждают, что видели невозможное. Специальное расследование нашей газеты.
              </p>
              <p className="text-xl mb-8 font-oldstandard text-black/80 leading-relaxed">
                Репортёры нашего издания побывали на выступлении и остались в полном изумлении. Искусство иллюзий достигло невиданных высот!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-black hover:bg-black/90 text-white border border-black">
                <Sparkles className="w-5 h-5 mr-2" />
                Заказать выступление
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black/5">
                Читать полную историю
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative mt-10 lg:mt-0">
            <div className="relative w-full aspect-[4/5] overflow-hidden border-2 border-black">
              <img 
                src="https://images.unsplash.com/photo-1566694271453-390536dd1f0d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Фокусник в действии" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute top-0 left-0 bg-black text-white py-1 px-3 text-sm font-bold">
                ФОТО ДНЯ
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 p-3 text-white">
                <p className="text-sm font-bold">Александр Невероятный демонстрирует один из своих легендарных трюков на городской площади</p>
              </div>
            </div>
            
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-black text-white flex items-center justify-center font-bold z-20 border-2 border-black rotate-12">
              <span className="text-center rotate-0 font-abril">10+ лет опыта</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
