import { useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1612198790700-0ff08cb726e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      alt: "Карточные фокусы"
    },
    {
      url: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      alt: "Магия с монетами"
    },
    {
      url: "https://images.unsplash.com/photo-1568745663067-9248ee880a2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      alt: "Выступление на сцене"
    },
    {
      url: "https://images.unsplash.com/photo-1571173729436-68819eb4724e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      alt: "Фокус с кольцами"
    },
    {
      url: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      alt: "Детский праздник с фокусником"
    },
    {
      url: "https://images.unsplash.com/photo-1559132137-f8a4842843ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      alt: "Корпоративное выступление"
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
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Магическая <span className="text-magic-purple">галерея</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Моменты волшебства, запечатленные на фотографиях
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer hover:shadow-xl transition-shadow duration-300"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-lg font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button 
            className="absolute top-4 right-4 text-white bg-black/20 hover:bg-black/40 p-2 rounded-full transition-colors"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </button>
          
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/20 hover:bg-black/40 p-2 rounded-full transition-colors"
            onClick={() => navigateImage("prev")}
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          
          <img 
            src={images[selectedImage].url} 
            alt={images[selectedImage].alt} 
            className="max-w-full max-h-[90vh] object-contain"
          />
          
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/20 hover:bg-black/40 p-2 rounded-full transition-colors"
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
