import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      title: "Индивидуальная терапия для взрослых",
      description:
        "Глубокая работа с личными вопросами, эмоциональными трудностями и жизненными кризисами",
      features: [
        "Работа со страхами и фобиями",
        "Преодоление тревожности",
        "Решение межличностных конфликтов",
        "Поддержка в кризисных ситуациях",
      ],
      duration: "50 минут",
      format: "Очно/Онлайн",
    },
    {
      title: "Терапия для подростков (12+)",
      description:
        "Специальный подход к работе с подростками, учитывающий особенности возраста",
      features: [
        "Проблемы адаптации",
        "Школьные трудности",
        "Семейные конфликты",
        "Эмоциональная регуляция",
      ],
      duration: "45 минут",
      format: "Очно/Онлайн",
    },
    {
      title: "Работа с эмоциональным выгоранием",
      description: "Восстановление после профессионального и личного истощения",
      features: [
        "Диагностика выгорания",
        "Техники восстановления энергии",
        "Профилактика рецидивов",
        "Баланс работы и жизни",
      ],
      duration: "50 минут",
      format: "Очно/Онлайн",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-montserrat">
              Психологические услуги
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Использую интегративный подход, сочетая методы
              когнитивно-поведенческой, гештальт-терапии и системной семейной
              терапии
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 mb-6">{service.description}</p>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Icon
                            name="Check"
                            size={16}
                            className="text-green-500"
                          />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-purple-50 rounded-2xl p-6">
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Icon
                            name="Clock"
                            size={16}
                            className="text-purple-600"
                          />
                          <span className="font-medium text-gray-800">
                            Длительность
                          </span>
                        </div>
                        <p className="text-gray-600">{service.duration}</p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Icon
                            name="MapPin"
                            size={16}
                            className="text-purple-600"
                          />
                          <span className="font-medium text-gray-800">
                            Формат
                          </span>
                        </div>
                        <p className="text-gray-600">{service.format}</p>
                      </div>

                      <button className="w-full bg-purple-600 text-white py-3 rounded-full hover:bg-purple-700 transition-colors font-medium">
                        Записаться
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
