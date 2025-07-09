import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Уборка дома",
      description: "Комплексная уборка всех помещений дома",
      icon: "Home",
      image: "/img/0bb7f964-6d49-47c4-aa12-d38bb48e711e.jpg",
    },
    {
      title: "Уборка квартиры",
      description: "Профессиональная уборка квартир любого размера",
      icon: "Building",
      image: "/img/0bb7f964-6d49-47c4-aa12-d38bb48e711e.jpg",
    },
    {
      title: "Уборка кухни",
      description: "Глубокая очистка кухонных поверхностей",
      icon: "ChefHat",
      image: "/img/9b718f35-92aa-4afa-99cb-1f56c98cf6b6.jpg",
    },
    {
      title: "Уборка ванной комнаты",
      description: "Дезинфекция и очистка санузлов",
      icon: "Droplets",
      image: "/img/0bb7f964-6d49-47c4-aa12-d38bb48e711e.jpg",
    },
    {
      title: "Уборка офисов",
      description: "Поддержание чистоты в рабочих помещениях",
      icon: "Briefcase",
      image: "/img/12c79561-dc6d-4525-8d6b-df37f65861b3.jpg",
    },
    {
      title: "Химчистка",
      description: "Профессиональная химчистка мебели и ковров",
      icon: "Sparkles",
      image: "/img/0bb7f964-6d49-47c4-aa12-d38bb48e711e.jpg",
    },
    {
      title: "Уборка промышленных помещений",
      description: "Очистка складов и производственных зон",
      icon: "Factory",
      image: "/img/12c79561-dc6d-4525-8d6b-df37f65861b3.jpg",
    },
    {
      title: "Мойка окон и балконов",
      description: "Чистка окон и остекленных поверхностей",
      icon: "Square",
      image: "/img/0bb7f964-6d49-47c4-aa12-d38bb48e711e.jpg",
    },
    {
      title: "Мойка фасадов",
      description: "Очистка внешних поверхностей зданий",
      icon: "Building2",
      image: "/img/12c79561-dc6d-4525-8d6b-df37f65861b3.jpg",
    },
  ];

  const advantages = [
    {
      icon: "Shield",
      title: "Гарантия качества",
      description: "100% гарантия на все виды работ",
    },
    {
      icon: "Clock",
      title: "Быстрая уборка",
      description: "Выполняем работу в кратчайшие сроки",
    },
    {
      icon: "Users",
      title: "Опытная команда",
      description: "Профессиональные клинеры с опытом работы",
    },
    {
      icon: "Eco",
      title: "Экологичность",
      description: "Используем только безопасные средства",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-rabbit-orange rounded-full flex items-center justify-center">
                <span className="text-white font-bold">🐰</span>
              </div>
              <h1 className="text-2xl font-bold text-rabbit-gray">
                Кролик Cleaning
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-rabbit-gray hover:text-rabbit-blue transition-colors"
              >
                Услуги
              </a>
              <a
                href="#about"
                className="text-rabbit-gray hover:text-rabbit-blue transition-colors"
              >
                О нас
              </a>
              <a
                href="#advantages"
                className="text-rabbit-gray hover:text-rabbit-blue transition-colors"
              >
                Преимущества
              </a>
              <a
                href="#contact"
                className="text-rabbit-gray hover:text-rabbit-blue transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-rabbit-orange hover:bg-rabbit-orange/90">
              Заказать уборку
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rabbit-blue to-rabbit-sky text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Профессиональная уборка
            <br />
            <span className="text-rabbit-orange">в один клик</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Мы делаем ваш дом и офис идеально чистыми. Быстро, качественно и с
            гарантией результата.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-rabbit-orange hover:bg-rabbit-orange/90 text-white px-8 py-3"
            >
              <Icon name="Phone" className="mr-2" size={20} />
              Заказать сейчас
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-rabbit-blue px-8 py-3"
            >
              <Icon name="Calculator" className="mr-2" size={20} />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-rabbit-gray mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр клининговых услуг для дома, офиса и промышленных
              помещений
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 group"
              >
                <CardHeader className="pb-4">
                  <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-rabbit-blue/10 rounded-lg">
                      <Icon
                        name={service.icon}
                        className="text-rabbit-blue"
                        size={24}
                      />
                    </div>
                    <CardTitle className="text-rabbit-gray">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                  <Button className="w-full mt-4 bg-rabbit-orange hover:bg-rabbit-orange/90">
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-rabbit-gray mb-6">
                О компании
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                <strong>Кролик Cleaning</strong> — это команда профессионалов,
                которая уже более 5 лет предоставляет качественные клининговые
                услуги в нашем городе.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Мы работаем с жилыми и коммерческими помещениями, используя
                современное оборудование и безопасные чистящие средства.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge
                  variant="secondary"
                  className="bg-rabbit-blue/10 text-rabbit-blue"
                >
                  5+ лет опыта
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-rabbit-blue/10 text-rabbit-blue"
                >
                  1000+ довольных клиентов
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-rabbit-blue/10 text-rabbit-blue"
                >
                  Застрахованы
                </Badge>
              </div>
              <Button className="bg-rabbit-orange hover:bg-rabbit-orange/90">
                Узнать больше
              </Button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-rabbit-blue to-rabbit-sky rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <Icon name="Users" size={80} className="mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">Наша команда</h3>
                  <p className="text-blue-100">Профессиональные клинеры</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-rabbit-gray mb-4">
              Наши преимущества
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Почему клиенты выбирают именно нас для уборки своих помещений
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-rabbit-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={advantage.icon}
                      className="text-rabbit-orange"
                      size={32}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-rabbit-gray mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-rabbit-gray mb-4">
              Связаться с нами
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Свяжитесь с нами для бесплатной консультации и расчета стоимости
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-rabbit-gray mb-6">
                Контактная информация
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-rabbit-blue/10 rounded-lg">
                    <Icon name="Phone" className="text-rabbit-blue" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-rabbit-gray">Телефон</p>
                    <p className="text-gray-600">+7 (999) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-rabbit-blue/10 rounded-lg">
                    <Icon name="Mail" className="text-rabbit-blue" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-rabbit-gray">Email</p>
                    <p className="text-gray-600">info@rabbitcleaning.ru</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-rabbit-blue/10 rounded-lg">
                    <Icon
                      name="MapPin"
                      className="text-rabbit-blue"
                      size={20}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-rabbit-gray">Адрес</p>
                    <p className="text-gray-600">
                      г. Москва, ул. Примерная, 123
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-rabbit-blue/10 rounded-lg">
                    <Icon name="Clock" className="text-rabbit-blue" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-rabbit-gray">
                      Режим работы
                    </p>
                    <p className="text-gray-600">Пн-Вс: 8:00 - 22:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-rabbit-gray mb-6">
                Заказать уборку
              </h3>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <Input placeholder="Телефон" />
                </div>
                <div>
                  <Input placeholder="Email" />
                </div>
                <div>
                  <Textarea
                    placeholder="Опишите ваши потребности в уборке"
                    rows={4}
                  />
                </div>
                <Button className="w-full bg-rabbit-orange hover:bg-rabbit-orange/90">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-rabbit-gray text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-rabbit-orange rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">🐰</span>
                </div>
                <h3 className="text-xl font-bold">Кролик Cleaning</h3>
              </div>
              <p className="text-gray-300">
                Профессиональная уборка для вашего дома и офиса.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Уборка дома</li>
                <li>Уборка офиса</li>
                <li>Химчистка</li>
                <li>Мойка окон</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-300">
                <li>+7 (999) 123-45-67</li>
                <li>info@rabbitcleaning.ru</li>
                <li>г. Москва, ул. Примерная, 123</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-rabbit-orange rounded-full flex items-center justify-center">
                  <Icon name="Instagram" size={20} />
                </div>
                <div className="w-10 h-10 bg-rabbit-orange rounded-full flex items-center justify-center">
                  <Icon name="Facebook" size={20} />
                </div>
                <div className="w-10 h-10 bg-rabbit-orange rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Кролик Cleaning. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
