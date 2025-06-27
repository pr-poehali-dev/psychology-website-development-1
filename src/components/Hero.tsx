import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-green-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-montserrat">
              Психологическая поддержка
              <span className="text-purple-600"> для взрослых и детей</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Индивидуальная терапия с интегративным подходом. Работаю со
              страхами, тревожностью, стрессом, эмоциональным выгоранием и
              межличностными отношениями.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/contact"
                className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors text-center font-medium"
              >
                Записаться на консультацию
              </Link>
              <Link
                to="/services"
                className="border border-purple-600 text-purple-600 px-8 py-3 rounded-full hover:bg-purple-50 transition-colors text-center font-medium"
              >
                Узнать больше
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={16} className="text-purple-600" />
                Очно в Перми
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Video" size={16} className="text-purple-600" />
                Онлайн консультации
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Users" size={16} className="text-purple-600" />
                Взрослые и дети 12+
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=500&h=600&fit=crop"
                alt="Психологическая консультация"
                className="w-full rounded-2xl"
              />
            </div>
            <div className="absolute -top-4 -left-4 bg-yellow-100 rounded-2xl p-4 shadow-lg">
              <Icon name="Heart" size={32} className="text-pink-500" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-green-100 rounded-2xl p-4 shadow-lg">
              <Icon name="Sparkles" size={32} className="text-green-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
