import { useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1612198790700-0ff08cb726e5?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Карточные фокусы",
      caption: "Невероятная ловкость рук: наш корреспондент не смог уследить за картами"
    },
    {
      url: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Магия с монетами",
      caption: "Исчезающие монеты - тайна, которую не могут разгадать банкиры"
    },
    {
      url: "https://images.unsplash.com/photo-1568745663067-9248ee880a2b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Выступление на сцене",
      caption: "Аншлаг в городском театре: зрители ахнули от изумления"
    },
    {
      url: "https://images.unsplash.com/photo-1571173729436-68819eb4724e?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Фокус с кольцами",
      caption: "Загадочное соединение - металл подчиняется воле иллюзиониста"
    },
    {
      url: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Детский праздник с фокусником",
      caption: "Юные зрители очарованы магией: тайна воспитания раскрыта"
    },
    {
      url: "https://images.unsplash.com/photo-1559132137-f8a4842843ee?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Корпоративное выступление",
      caption: "Бизнесмены забыли о делах: магия важнее финансовых отчетов"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    
    if (direction === "prev") {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-secondary/30 border-y-2 border-black">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <p className="text-xl uppercase tracking-wider font-abril border-y-2 border-black py-2 px-8">Фотохроника</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-abril font-bold mb-8 uppercase">
            Исторические Моменты Волшебства
          </h2>
          <p className="text-black/70 text-lg font-oldstandard italic">
            Наши репортеры запечатлели редкие моменты настоящего волшебства
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 border-2 border-black">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="group relative aspect-square overflow-hidden cursor-pointer border border-black"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-lg font-abril">{image.alt}</p>
                <p className="text-white/80 text-sm font-oldstandard italic">{image.caption}</p>
              </div>
              <div className="absolute top-0 left-0 bg-black text-white text-xs py-1 px-2">
                {new Date().getFullYear() - Math.floor(Math.random() * 3)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button 
            className="absolute top-4 right-4 text-white bg-black p-2 border border-white"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </button>
          
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black p-2 border border-white"
            onClick={() => navigateImage("prev")}
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          
          <div className="max-w-4xl relative">
            <img 
              src={selectedImage !== null ? images[selectedImage].url : ''} 
              alt={selectedImage !== null ? images[selectedImage].alt : ''} 
              className="max-w-full max-h-[80vh] object-contain border-2 border-white"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black p-4 border-x-2 border-b-2 border-white">
              <p className="text-white font-abril">{selectedImage !== null ? images[selectedImage].alt : ''}</p>
              <p className="text-white/80 text-sm font-oldstandard italic">
                {selectedImage !== null ? images[selectedImage].caption : ''}
              </p>
            </div>
          </div>
          
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black p-2 border border-white"
            onClick={() => navigateImage("next")}
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
