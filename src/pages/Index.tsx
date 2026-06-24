import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const nav = [
  { id: 'hero', label: 'Главная' },
  { id: 'guides', label: 'Руководства' },
  { id: 'support', label: 'Поддержка' },
  { id: 'contacts', label: 'Контакты' },
];

const guides = [
  {
    icon: 'Cpu',
    title: 'Запуск системы',
    desc: 'Первичная настройка, подключение модулей и проверка готовности оборудования.',
    tag: 'Базовый',
  },
  {
    icon: 'Network',
    title: 'Сетевая архитектура',
    desc: 'Топология, маршрутизация и интеграция с внешними контроллерами.',
    tag: 'Средний',
  },
  {
    icon: 'ShieldCheck',
    title: 'Безопасность и доступ',
    desc: 'Управление ролями, шифрование каналов и журналирование событий.',
    tag: 'Продвинутый',
  },
  {
    icon: 'Activity',
    title: 'Мониторинг и диагностика',
    desc: 'Метрики в реальном времени, оповещения и анализ инцидентов.',
    tag: 'Средний',
  },
  {
    icon: 'Wrench',
    title: 'Обслуживание',
    desc: 'Регламенты ТО, замена компонентов и плановое обновление прошивок.',
    tag: 'Базовый',
  },
  {
    icon: 'GitBranch',
    title: 'API и интеграции',
    desc: 'Документация эндпоинтов, форматы данных и примеры запросов.',
    tag: 'Продвинутый',
  },
];

const faq = [
  {
    q: 'Как получить доступ к закрытой документации?',
    a: 'Авторизуйтесь под учётной записью инженера, после чего разделы расширенного уровня станут доступны автоматически.',
  },
  {
    q: 'Поддерживается ли интеграция со сторонними SCADA?',
    a: 'Да, система предоставляет открытый API и стандартные протоколы для подключения внешних диспетчерских решений.',
  },
  {
    q: 'Где найти спецификации оборудования?',
    a: 'Полные технические карты доступны в разделе «Руководства» внутри каждого модуля документации.',
  },
];

const Index = () => {
  const [name, setName] = useState('');
  const [question, setQuestion] = useState('');

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="container flex items-center justify-between h-16">
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-2.5 group"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-md bg-primary/15 border border-primary/40">
              <Icon name="Hexagon" className="text-primary" size={20} />
            </span>
            <span className="font-display text-xl font-600 tracking-wide uppercase">
              Спец<span className="text-primary">Системы</span>
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {nav.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary"
              >
                {n.label}
              </button>
            ))}
          </nav>

          <Button
            onClick={() => scrollTo('support')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
          >
            <Icon name="LifeBuoy" size={16} className="mr-2" />
            Поддержка
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section
        id="hero"
        className="relative pt-40 pb-32 overflow-hidden grid-bg"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px] animate-glow pointer-events-none" />
        <div className="container relative">
          <div className="max-w-3xl animate-fade-in">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 mb-7 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-mono uppercase tracking-widest">
              <Icon name="CircuitBoard" size={14} />
              Техническая база знаний
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-700 leading-[1.05] uppercase tracking-tight">
              Документация по
              <br />
              <span className="text-primary text-glow">инженерным системам</span>
            </h1>
            <p className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Руководства, спецификации и поддержка для проектирования,
              запуска и обслуживания специализированных систем.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => scrollTo('guides')}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium h-12 px-7"
              >
                <Icon name="BookOpen" size={18} className="mr-2" />
                Открыть руководства
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo('support')}
                className="border-border bg-secondary/40 hover:bg-secondary h-12 px-7"
              >
                Задать вопрос
              </Button>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { v: '120+', l: 'Статей' },
                { v: '24/7', l: 'Поддержка' },
                { v: '15', l: 'Модулей' },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl font-700 text-primary">
                    {s.v}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GUIDES */}
      <section id="guides" className="py-28 border-t border-border/60">
        <div className="container">
          <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
            <div>
              <span className="font-mono text-sm text-primary uppercase tracking-widest">
                / Руководства
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-700 uppercase mt-3">
                Разделы документации
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Структурированные материалы по каждому этапу работы с системами.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {guides.map((g) => (
              <div
                key={g.title}
                className="group relative p-7 rounded-xl bg-card border border-border hover:border-primary/60 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/15 border border-primary/30 mb-5 group-hover:bg-primary/25 transition-colors">
                  <Icon name={g.icon} className="text-primary" size={24} />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  {g.tag}
                </span>
                <h3 className="font-display text-xl font-600 mt-1 mb-2 uppercase">
                  {g.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {g.desc}
                </p>
                <div className="mt-5 flex items-center gap-1.5 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Читать
                  <Icon name="ArrowRight" size={15} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT — вопросы пользователей */}
      <section id="support" className="py-28 border-t border-border/60">
        <div className="container grid lg:grid-cols-2 gap-16">
          <div>
            <span className="font-mono text-sm text-primary uppercase tracking-widest">
              / Поддержка
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-700 uppercase mt-3 mb-6">
              Вопросы и обсуждение
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Не нашли ответ в документации? Задайте вопрос — наши инженеры и
              сообщество помогут разобраться.
            </p>

            <Accordion type="single" collapsible className="w-full">
              {faq.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-border"
                >
                  <AccordionTrigger className="text-left hover:text-primary font-medium">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="p-8 rounded-2xl bg-card border border-border h-fit">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/15 border border-primary/30">
                <Icon name="MessagesSquare" className="text-primary" size={20} />
              </span>
              <h3 className="font-display text-xl font-600 uppercase">
                Задать вопрос
              </h3>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4"
            >
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">
                  Ваше имя
                </label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Иван Петров"
                  className="bg-secondary/40 border-border focus-visible:ring-primary"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">
                  Вопрос
                </label>
                <Textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Опишите вашу задачу или проблему..."
                  rows={5}
                  className="bg-secondary/40 border-border focus-visible:ring-primary resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium h-11"
              >
                <Icon name="Send" size={16} className="mr-2" />
                Отправить вопрос
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CONTACTS / FOOTER */}
      <footer id="contacts" className="border-t border-border/60 py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="flex items-center justify-center w-9 h-9 rounded-md bg-primary/15 border border-primary/40">
                  <Icon name="Hexagon" className="text-primary" size={20} />
                </span>
                <span className="font-display text-xl font-600 uppercase tracking-wide">
                  Спец<span className="text-primary">Системы</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                Техническая документация и поддержка по инженерным системам.
              </p>
            </div>

            <div>
              <h4 className="font-display uppercase text-sm tracking-widest mb-4 text-muted-foreground">
                Контакты
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2.5">
                  <Icon name="Mail" size={16} className="text-primary" />
                  support@specsystems.ru
                </li>
                <li className="flex items-center gap-2.5">
                  <Icon name="Phone" size={16} className="text-primary" />
                  +7 (800) 000-00-00
                </li>
                <li className="flex items-center gap-2.5">
                  <Icon name="MapPin" size={16} className="text-primary" />
                  Москва, ул. Инженерная, 7
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-display uppercase text-sm tracking-widest mb-4 text-muted-foreground">
                Разделы
              </h4>
              <ul className="space-y-3 text-sm">
                {nav.map((n) => (
                  <li key={n.id}>
                    <button
                      onClick={() => scrollTo(n.id)}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {n.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border/60 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
            <span>© 2026 СпецСистемы. Все права защищены.</span>
            <span className="font-mono">v1.0 / Documentation Portal</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
