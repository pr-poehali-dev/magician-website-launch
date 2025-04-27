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
  <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-magic-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-magic-purple/5 group">
    <div className="w-12 h-12 rounded-lg bg-magic-purple/10 flex items-center justify-center mb-4 text-magic-purple group-hover:bg-magic-purple group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-playfair font-bold mb-3">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
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
    <section id="services" className="py-20 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Магические <span className="text-magic-purple">услуги</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Выберите идеальное магическое шоу для вашего мероприятия
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
