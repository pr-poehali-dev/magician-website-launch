import { 
  UserRound, 
  Users, 
  Building, 
  Sparkles, 
  PartyPopper, 
  GraduationCap 
} from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
  <div className="bg-white p-6 border-2 border-black hover:bg-secondary/50 transition-all duration-300 group">
    <div className="w-12 h-12 border-2 border-black flex items-center justify-center mb-4 text-black">
      {icon}
    </div>
    <h3 className="text-xl font-abril font-bold mb-3 border-b-2 border-black pb-2">{title}</h3>
    <p className="font-oldstandard text-black/80">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: <UserRound className="w-6 h-6" />,
      title: "Частные выступления",
      description: "Персональные магические представления для небольших компаний и особых моментов."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Семейные праздники",
      description: "Идеально для дней рождения, юбилеев и семейных торжеств с фокусами для всех возрастов."
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Корпоративные мероприятия",
      description: "Профессиональные шоу для корпоративов, конференций и бизнес-встреч."
    },
    {
      icon: <PartyPopper className="w-6 h-6" />,
      title: "Свадебные торжества",
      description: "Добавьте волшебства в ваш особенный день с элегантными иллюзиями и интерактивными фокусами."
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Мастер-классы",
      description: "Обучающие сессии для детей и взрослых, где вы сможете научиться базовым трюкам."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Детские праздники",
      description: "Увлекательные и интерактивные выступления, которые подарят детям незабываемые впечатления."
    }
  ];

  return (
    <section id="services" className="py-20 bg-[url('/paper-texture.png')] bg-repeat">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block border-x-2 border-black px-4 py-1 mb-4">
            <p className="text-sm uppercase tracking-widest font-bold">Рубрика</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-abril font-bold mb-4 uppercase">
            Наши Эксклюзивные Услуги
          </h2>
          <div className="flex justify-center mb-6">
            <div className="h-0.5 w-32 bg-black"></div>
          </div>
          <p className="text-black/70 text-lg font-oldstandard italic">
            Выберите идеальное магическое шоу для вашего мероприятия
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t-2 border-l-2 border-black">
          {services.map((service, index) => (
            <div key={index} className="border-r-2 border-b-2 border-black">
              <ServiceCard 
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
