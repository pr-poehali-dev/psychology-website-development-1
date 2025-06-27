import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-1">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1594824475280-ff9d0f6e3234?w=400&h=500&fit=crop"
                    alt="Елена - психолог"
                    className="w-full rounded-2xl"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-purple-100 rounded-xl p-3">
                    <Icon name="Heart" size={24} className="text-purple-600" />
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <h1 className="text-4xl font-bold text-gray-800 mb-6 font-montserrat">
                  Обо мне
                </h1>

                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Привет! Меня зовут Елена, и я практикующий психолог с опытом
                    работы более 8 лет. Моя специализация — индивидуальная
                    терапия для взрослых и подростков.
                  </p>

                  <p className="text-gray-600 leading-relaxed">
                    В своей работе я использую интегративный подход, сочетая
                    методы когнитивно-поведенческой терапии, гештальт-терапии и
                    системной семейной терапии. Это позволяет мне подбирать
                    наиболее эффективные техники для каждого клиента.
                  </p>

                  <div className="bg-purple-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Мой подход
                    </h3>
                    <p className="text-gray-600">
                      Я верю, что каждый человек обладает внутренними ресурсами
                      для решения своих проблем. Моя задача — создать безопасное
                      пространство и помочь вам найти эти ресурсы, развить
                      навыки и обрести уверенность в себе.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name="GraduationCap"
                    size={24}
                    className="text-green-600"
                  />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Образование
                </h3>
                <p className="text-gray-600 text-sm">
                  Магистр психологии
                  <br />
                  Пермский государственный университет
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={24} className="text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Сертификация
                </h3>
                <p className="text-gray-600 text-sm">
                  Сертифицированный специалист
                  <br />
                  КПТ и гештальт-терапия
                </p>
              </div>

              <div className="text-center">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={24} className="text-pink-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Опыт</h3>
                <p className="text-gray-600 text-sm">
                  Более 8 лет практики
                  <br />
                  500+ успешных случаев
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
