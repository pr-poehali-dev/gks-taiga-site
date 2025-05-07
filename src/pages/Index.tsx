
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Icon from '@/components/ui/icon';
import MobileMenu from "@/components/ui/mobile-menu";

const Index = () => {
  const navLinks = [
    { href: "/", label: "Главная" },
    { href: "/projects", label: "Проекты домов" },
    { href: "/about", label: "О компании" },
    { href: "/blog", label: "Блог" },
    { href: "/contacts", label: "Контакты" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Навигация */}
      <header className="fixed w-full z-50 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-white">ГКС ТАЙГА</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link 
                key={index} 
                to={link.href} 
                className="text-white hover:text-gray-300 transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            <MobileMenu links={navLinks} />
          </div>
        </div>
      </header>

      {/* Главный баннер */}
      <section className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: "url('https://cdn.poehali.dev/files/49abcf54-a76c-4bd5-bcc8-b97c5549187f.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
          <div className="mb-6">
            <h1 className="text-7xl md:text-9xl font-bold text-white hero-text-animated tracking-widest">ТАЙГА</h1>
            <p className="text-xl text-white mt-4">Проверь себя на прочность в лесах Сибири</p>
          </div>
          <Button 
            className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-gray-900 transition-colors duration-300 px-8 py-6 text-lg button-pulse"
          >
            БРОСИТЬ ВЫЗОВ
          </Button>
        </div>
      </section>

      {/* О нас */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">ГКС ТАЙГА — натуральное качество</h2>
            <p className="text-gray-600 mb-6 text-lg">
              Мы строим каркасные дома из экологически чистых материалов, 
              заготовленных в сердце сибирской тайги. Наша задача — создать 
              для вас жилье, которое будет не только комфортным, но и максимально 
              приближенным к природе.
            </p>
            <p className="text-gray-600 mb-10 text-lg">
              Каждый дом, созданный нашими мастерами, отражает красоту и силу 
              русского леса, соединяя в себе вековые традиции деревянного 
              зодчества и современные технологии строительства.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Button variant="outline" className="border-gray-400 text-gray-800">
                Подробнее о компании
              </Button>
              <Button className="bg-green-800 hover:bg-green-900">Наши технологии</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Преимущества каркасных домов</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-50 flex items-center justify-center rounded-full mb-4">
                <Icon name="Timer" className="text-green-800" />
              </div>
              <h3 className="text-xl font-bold mb-2">Быстрое возведение</h3>
              <p className="text-gray-600">Строительство каркасного дома занимает от 2 до 4 месяцев, что в разы быстрее традиционных технологий.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-50 flex items-center justify-center rounded-full mb-4">
                <Icon name="ThermometerSnowflake" className="text-green-800" />
              </div>
              <h3 className="text-xl font-bold mb-2">Энергоэффективность</h3>
              <p className="text-gray-600">Современные утеплители и технологии строительства обеспечивают отличную теплоизоляцию и экономию на отоплении.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-50 flex items-center justify-center rounded-full mb-4">
                <Icon name="Leaf" className="text-green-800" />
              </div>
              <h3 className="text-xl font-bold mb-2">Экологичность</h3>
              <p className="text-gray-600">Мы используем только сертифицированные природные материалы, безопасные для здоровья и окружающей среды.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Каталог проектов */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Каталог проектов</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Выберите готовый проект или закажите индивидуальное проектирование дома вашей мечты
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {name: "Кедр", area: 80, bedrooms: 2, bath: 1, image: "1551260"},
              {name: "Сосна", area: 120, bedrooms: 3, bath: 2, image: "1551292"},
              {name: "Ель", area: 150, bedrooms: 4, bath: 2, image: "1558769"}
            ].map((project, idx) => (
              <div key={idx} className="group overflow-hidden rounded-lg shadow-sm border border-gray-200 bg-white">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-${project.image}4-4d3fea1eaaf8?w=800&auto=format&fit=crop`} 
                    alt={`Проект дома ${project.name}`}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-4 px-4">
                    <h3 className="text-white text-xl font-bold">{`"${project.name}"`}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Icon name="LayoutGrid" size={16} />
                      <span className="text-sm">{`${project.area} м²`}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Bed" size={16} />
                      <span className="text-sm">{`${project.bedrooms} спал.`}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Bath" size={16} />
                      <span className="text-sm">{`${project.bath} ванн.`}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">Современный каркасный дом с просторной планировкой и панорамными окнами.</p>
                  <Button variant="outline" className="w-full border-green-800 text-green-800 hover:bg-green-800 hover:text-white">Подробнее</Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="default" className="px-8 bg-green-800 hover:bg-green-900">Все проекты домов</Button>
          </div>
        </div>
      </section>

      {/* Этапы работы */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Этапы строительства</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {icon: "Pencil", title: "Проектирование", desc: "Разработка проекта с учетом всех пожеланий"},
              {icon: "FileText", title: "Договор", desc: "Заключение договора и составление сметы"},
              {icon: "Shovel", title: "Фундамент", desc: "Заливка фундамента и подготовка площадки"},
              {icon: "Frame", title: "Каркас", desc: "Монтаж каркаса и установка стен"},
              {icon: "Home", title: "Отделка", desc: "Внешняя и внутренняя отделка дома"}
            ].map((step, idx) => (
              <div key={idx} className="relative p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-green-800 flex items-center justify-center text-white">
                  {idx + 1}
                </div>
                <div className="pt-4">
                  <Icon name={step.icon} className="text-green-800 mb-3" />
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Построим дом вашей мечты</h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-200">
            Оставьте заявку на бесплатную консультацию, и наш специалист свяжется с вами в ближайшее время
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="tel" 
              placeholder="Ваш телефон" 
              className="px-4 py-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-green-800 hover:bg-gray-200 whitespace-nowrap">
              Получить консультацию
            </Button>
          </div>
          <p className="text-xs mt-4 text-gray-200">Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности</p>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ГКС ТАЙГА</h3>
              <p className="text-gray-400">Строительство экологичных каркасных домов из материалов сибирской тайги</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (XXX) XXX-XX-XX</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@гкстайга.рф</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>г. Новосибирск, ул. Лесная, 42</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Навигация</h3>
              <ul className="space-y-2 text-gray-400">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.href} className="hover:text-white transition">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Мы в соцсетях</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">
                  <Icon name="VkLogo" fallback="Dribbble" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">
                  <Icon name="YoutubeLogo" fallback="Youtube" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">
                  <Icon name="TelegramLogo" fallback="Send" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} ГКС ТАЙГА. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
