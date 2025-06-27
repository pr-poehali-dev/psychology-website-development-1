import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Prices = () => {
  const packages = [
    {
      title: "Разовая консультация",
      price: "3 500",
      description: "Одна индивидуальная сессия",
      features: ["50 минут терапии", "Очно или онлайн", "Гибкое расписание"],
      popular: false,
    },
    {
      title: "Пакет из 4 сессий",
      price: "12 000",
      originalPrice: "14 000",
      description: "Краткосрочная терапия",
      features: [
        "4 сессии по 50 минут",
        "Скидка 15%",
        "Действует 2 месяца",
        "Приоритетная запись",
      ],
      popular: true,
    },
    {
      title: "Пакет из 8 сессий",
      price: "22 000",
      originalPrice: "28 000",
      description: "Долгосрочная работа",
      features: [
        "8 сессий по 50 минут",
        "Скидка 20%",
        "Действует 4 месяца",
        "Поддержка между сессиями",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-montserrat">
              Стоимость услуг
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Прозрачные цены без скрытых платежей. Выберите подходящий формат
              работы
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow ${
                  pkg.popular ? "ring-2 ring-purple-600" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Популярный
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>

                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold text-gray-800">
                      {pkg.price}
                    </span>
                    <span className="text-gray-600">₽</span>
                    {pkg.originalPrice && (
                      <span className="text-lg text-gray-400 line-through ml-2">
                        {pkg.originalPrice}₽
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-3 rounded-full font-medium transition-colors ${
                    pkg.popular
                      ? "bg-purple-600 text-white hover:bg-purple-700"
                      : "border border-purple-600 text-purple-600 hover:bg-purple-50"
                  }`}
                >
                  Выбрать пакет
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Способы оплаты
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Принимаю к оплате:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon
                      name="CreditCard"
                      size={20}
                      className="text-purple-600"
                    />
                    <span className="text-gray-700">Банковские карты</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon
                      name="Smartphone"
                      size={20}
                      className="text-purple-600"
                    />
                    <span className="text-gray-700">
                      СБП (по номеру телефона)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon
                      name="Banknote"
                      size={20}
                      className="text-purple-600"
                    />
                    <span className="text-gray-700">
                      Наличные (очные консультации)
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Условия:
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>• Оплата производится до начала сессии</p>
                  <p>• Пакеты действуют указанный срок</p>
                  <p>• Отмена за 24 часа — без списания</p>
                  <p>• Выдается справка об оплате услуг</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Prices;
