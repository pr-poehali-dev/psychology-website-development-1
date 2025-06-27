import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const ServicesOverview = () => {
  const services = [
    {
      icon: "User",
      title: "Индивидуальная терапия",
      description: "Персональные сессии для взрослых и подростков с 12 лет",
      color: "purple",
    },
    {
      icon: "Brain",
      title: "Работа со страхами",
      description: "Преодоление фобий, тревожности и панических атак",
      color: "pink",
    },
    {
      icon: "Zap",
      title: "Стресс и выгорание",
      description: "Восстановление после эмоционального истощения",
      color: "green",
    },
    {
      icon: "Users",
      title: "Отношения",
      description: "Решение конфликтов и улучшение межличностных связей",
      color: "orange",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-montserrat">
            Мои услуги
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Использую интегративный подход, сочетая различные методы терапии для
            достижения наилучших результатов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div
                className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${
                  service.color === "purple"
                    ? "bg-purple-100"
                    : service.color === "pink"
                      ? "bg-pink-100"
                      : service.color === "green"
                        ? "bg-green-100"
                        : "bg-orange-100"
                }`}
              >
                <Icon
                  name={service.icon as any}
                  size={24}
                  className={
                    service.color === "purple"
                      ? "text-purple-600"
                      : service.color === "pink"
                        ? "text-pink-600"
                        : service.color === "green"
                          ? "text-green-600"
                          : "text-orange-600"
                  }
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium"
          >
            Подробнее об услугах
            <Icon name="ArrowRight" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
