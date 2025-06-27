import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-montserrat">
              Контакты
            </h1>
            <p className="text-xl text-gray-600">
              Готова ответить на ваши вопросы и записать на консультацию
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Свяжитесь со мной
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-3 rounded-xl">
                      <Icon
                        name="Phone"
                        size={20}
                        className="text-purple-600"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Телефон
                      </h3>
                      <p className="text-gray-600">+7 (342) 123-45-67</p>
                      <p className="text-sm text-gray-500">
                        Звонки с 9:00 до 20:00
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-xl">
                      <Icon
                        name="MessageCircle"
                        size={20}
                        className="text-green-600"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        WhatsApp
                      </h3>
                      <p className="text-gray-600">+7 (912) 123-45-67</p>
                      <p className="text-sm text-gray-500">
                        Быстрая связь в любое время
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <Icon name="Mail" size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Email
                      </h3>
                      <p className="text-gray-600">elena@psychologist.ru</p>
                      <p className="text-sm text-gray-500">
                        Отвечаю в течение суток
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-xl">
                      <Icon
                        name="MapPin"
                        size={20}
                        className="text-orange-600"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        Адрес кабинета
                      </h3>
                      <p className="text-gray-600">г. Пермь, ул. Ленина, 12</p>
                      <p className="text-sm text-gray-500">
                        Центр города, удобная парковка
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Режим работы
                </h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Понедельник - Пятница</span>
                    <span>9:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Суббота</span>
                    <span>10:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Воскресенье</span>
                    <span>Выходной</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Записаться на консультацию
              </h2>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Имя
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Предпочтительный формат
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none">
                    <option>Очная консультация</option>
                    <option>Онлайн консультация</option>
                    <option>Любой формат</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Расскажите о вашем запросе
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none resize-none"
                    placeholder="Опишите, с чем хотели бы поработать..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-4 rounded-xl hover:bg-purple-700 transition-colors font-medium"
                >
                  Отправить заявку
                </button>

                <p className="text-sm text-gray-500 text-center">
                  Отправляя заявку, вы соглашаетесь с обработкой персональных
                  данных
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
