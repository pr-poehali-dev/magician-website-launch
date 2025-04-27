import { Sparkles, Star, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-magic-dark to-background overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars absolute w-2 h-2 rounded-full bg-white top-1/4 left-1/4 animate-pulse"></div>
        <div className="stars absolute w-1 h-1 rounded-full bg-white top-1/2 left-1/3 animate-pulse"></div>
        <div className="stars absolute w-1.5 h-1.5 rounded-full bg-white top-1/3 left-1/2 animate-pulse"></div>
        <div className="stars absolute w-2 h-2 rounded-full bg-white top-2/3 left-2/3 animate-pulse"></div>
        <div className="stars absolute w-1 h-1 rounded-full bg-white top-3/4 left-1/4 animate-pulse"></div>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-magic-purple/30 bg-magic-purple/10 text-magic-purple mb-6">
              <Star className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Магия высшего уровня</span>
            </div>
            
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Невероятные фокусы <span className="text-magic-purple inline-flex items-center">
                и иллюзии <Sparkles className="w-8 h-8 ml-2 animate-float" />
              </span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-muted-foreground">
              Превратите ваше мероприятие в незабываемое магическое шоу, которое оставит ваших гостей в восторге и изумлении.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-magic-purple hover:bg-magic-purple/90 text-white">
                <Wand2 className="w-5 h-5 mr-2" />
                Заказать выступление
              </Button>
              <Button size="lg" variant="outline" className="border-magic-purple text-magic-purple hover:bg-magic-purple/10">
                Узнать больше
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative mt-10 lg:mt-0">
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-magic-purple/20 to-magic-purple/40 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1566694271453-390536dd1f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Фокусник в действии" 
                className="relative z-10 w-full h-full object-cover rounded-2xl shadow-xl transform -rotate-3 transition-transform hover:rotate-0 duration-500"
              />
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-magic-purple rounded-full flex items-center justify-center text-white font-bold z-20 shadow-lg animate-float">
                <span className="text-center">10+ лет опыта</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
