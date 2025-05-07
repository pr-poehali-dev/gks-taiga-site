
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Навигация */}
      <header className="fixed w-full bg-black/20 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-white">ГКС ТАЙГА</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-white hover:text-gray-300 transition">Главная</Link>
            <Link to="/projects" className="text-white hover:text-gray-300 transition">Проекты домов</Link>
            <Link to="/about" className="text-white hover:text-gray-300 transition">О компании</Link>
            <Link to="/blog" className="text-white hover:text-gray-300 transition">Блог</Link>
            <Link to="/contacts" className="text-white hover:text-gray-300 transition">Контакты</Link>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Icon name="Menu" />
            </Button>
          </div>
        </div>
      </header>

      {/* Главный баннер */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://cdn.poehali.dev/files/49abcf54-a76c-4bd5-bcc8-b97c5549187f.jpg')" }}>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-wider">ТАЙГА</h1>
          <p className="text-xl text-white mb-8 max-w-2xl">Проверь себя на прочность в лесах Сибири</p>
          <Button className="bg-white text-black hover:bg-gray-200 transition-colors px-8 py-6 text-lg">
            БРОСИТЬ ВЫЗОВ
          </Button>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Почему выбирают наши каркасные дома</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-gray-800 flex items-center justify-center rounded-full mb-4">
                <Icon name="Timer" className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Быстрое строительство</h3>
              <p className="text-gray-600">Каркасный дом строится в 2-3 раза быстрее, чем кирпичный или бетонный.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-gray-800 flex items-center justify-center rounded-full mb-4">
                <Icon name="Snowflake" className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Тепло и экономично</h3>
              <p className="text-gray-600">Отличная теплоизоляция позволяет экономить на отоплении даже в сибирские морозы.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-gray-800 flex items-center justify-center rounded-full mb-4">
                <Icon name="Banknote" className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Доступная цена</h3>
              <p className="text-gray-600">Стоимость каркасного дома значительно ниже традиционного строительства.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Популярные проекты */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Популярные проекты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group overflow-hidden rounded-lg shadow-md bg-white">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-155179486${item}0-6b5e5052316${item}?w=800&auto=format&fit=crop`} 
                    alt={`Проект дома ${item}`}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-4 px-4">
                    <h3 className="text-white text-xl font-bold">{`Проект "Тайга-${item < 10 ? '0' + item : item}"`}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Icon name="LayoutGrid" size={16} />
                      <span className="text-sm">{`${item * 50 + 50} м²`}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Bed" size={16} />
                      <span className="text-sm">{`${item + 1} спал.`}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Bath" size={16} />
                      <span className="text-sm">{`${item} ванн.`}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">Компактный и уютный каркасный дом для комфортной жизни.</p>
                  <Button variant="outline" className="w-full">Подробнее</Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="default" className="px-8">Смотреть все проекты</Button>
          </div>
        </div>
      </section>

      {/* Процесс работы */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Как мы работаем</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {icon: "PencilRuler", title: "Проектирование", desc: "Разработка индивидуального проекта или адаптация типового"},
              {icon: "Calculator", title: "Смета", desc: "Точный расчет стоимости строительства"},
              {icon: "Hammer", title: "Строительство", desc: "Реализация проекта опытными строителями"},
              {icon: "CheckCircle", title: "Сдача объекта", desc: "Передача готового дома с гарантией"}
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="relative w-16 h-16 flex items-center justify-center mb-4">
                  <div className="absolute w-16 h-16 rounded-full bg-gray-200 opacity-30"></div>
                  <div className="absolute w-12 h-12 rounded-full bg-gray-200 opacity-70"></div>
                  <div className="absolute w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                    <Icon name={step.icon} className="text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* О нас */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">О компании ГКС ТАЙГА</h2>
              <p className="text-gray-600 mb-4">
                Компания ГКС ТАЙГА специализируется на строительстве каркасных домов в сибирском регионе. 
                Мы создаем надежные и теплые дома, которые выдерживают суровые климатические условия.
              </p>
              <p className="text-gray-600 mb-6">
                Наши дома отличаются высоким качеством, энергоэффективностью и современным дизайном, 
                при этом мы сохраняем доступные цены и разумные сроки строительства.
              </p>
              <Button variant="default">Подробнее о компании</Button>
            </div>
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-24 h-24 bg-gray-200 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?w=800&auto=format&fit=crop" 
                alt="Команда ГКС ТАЙГА" 
                className="relative rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы построить дом своей мечты?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-300">
            Закажите бесплатную консультацию, и мы поможем выбрать проект, рассчитаем стоимость и ответим на все вопросы
          </p>
          <Button className="bg-white text-black hover:bg-gray-200 transition-colors px-8 py-6 text-lg">
            ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
          </Button>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ГКС ТАЙГА</h3>
              <p className="text-gray-400">Строительство каркасных домов, которые выдержат испытание сибирской тайгой.</p>
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
                  <span>г. Новосибирск, ул. Примерная, 123</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Навигация</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-white transition">Главная</Link></li>
                <li><Link to="/projects" className="hover:text-white transition">Проекты домов</Link></li>
                <li><Link to="/about" className="hover:text-white transition">О компании</Link></li>
                <li><Link to="/blog" className="hover:text-white transition">Блог</Link></li>
                <li><Link to="/contacts" className="hover:text-white transition">Контакты</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Мы в соцсетях</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition">
                  <Icon name="Youtube" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition">
                  <Icon name="Telegram" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} ГКС ТАЙГА. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
