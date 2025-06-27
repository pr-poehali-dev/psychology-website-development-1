import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная" },
    { path: "/services", label: "Услуги" },
    { path: "/about", label: "Обо мне" },
    { path: "/prices", label: "Цены" },
    { path: "/faq", label: "Вопросы" },
    { path: "/contact", label: "Контакты" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-xl font-semibold text-purple-600 font-montserrat"
          >
            Психолог Елена
          </Link>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors duration-200 px-3 py-2 rounded-md ${
                  location.pathname === item.path
                    ? "text-purple-600 bg-purple-50"
                    : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button className="text-gray-600 hover:text-purple-600">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
