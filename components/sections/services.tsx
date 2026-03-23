import { Code2, Layers, RefreshCw, Headphones, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Code2,
    title: "Разработка ПО",
    description:
      "Создание программного обеспечения под ключ: от анализа требований до внедрения и поддержки. Веб-приложения, мобильные приложения, корпоративные системы.",
    features: [
      "Веб-приложения и SaaS-решения",
      "Мобильные приложения iOS/Android",
      "Корпоративные информационные системы",
      "API и микросервисы",
    ],
  },
  {
    icon: Layers,
    title: "Внедрение систем",
    description:
      "Комплексное внедрение информационных систем в инфраструктуру заказчика. Настройка, миграция данных, обучение персонала.",
    features: [
      "Анализ существующей инфраструктуры",
      "Планирование и проектирование",
      "Миграция данных",
      "Обучение сотрудников",
    ],
  },
  {
    icon: RefreshCw,
    title: "Интеграции",
    description:
      "Интеграция различных систем и сервисов для обеспечения единого информационного пространства. REST API, SOAP, очереди сообщений.",
    features: [
      "Интеграция с 1С и ERP-системами",
      "Подключение платёжных систем",
      "Интеграция с CRM и маркетплейсами",
      "Обмен данными между системами",
    ],
  },
  {
    icon: Headphones,
    title: "Поддержка и сопровождение",
    description:
      "Техническая поддержка и сопровождение программных продуктов. Мониторинг, обновления, исправление ошибок, консультации.",
    features: [
      "Техническая поддержка 24/7",
      "Мониторинг и оповещения",
      "Регулярные обновления",
      "Консультации по развитию",
    ],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Услуги и продукты
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Полный цикл разработки и сопровождения программных решений для бизнеса любого масштаба
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <Card
              key={service.title}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm">
                      <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
