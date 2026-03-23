import { Check } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const pricingPlans = [
  {
    name: "Базовый",
    price: "от 100 000",
    period: "за проект",
    description: "Для небольших проектов и стартапов",
    features: [
      "Разработка MVP",
      "Базовая документация",
      "1 месяц поддержки",
      "Консультации",
    ],
    popular: false,
  },
  {
    name: "Стандарт",
    price: "от 500 000",
    period: "за проект",
    description: "Для среднего бизнеса",
    features: [
      "Полноценное решение",
      "Полная документация",
      "3 месяца поддержки",
      "Интеграции",
      "Обучение персонала",
    ],
    popular: true,
  },
  {
    name: "Корпоративный",
    price: "Индивидуально",
    period: "",
    description: "Для крупных компаний",
    features: [
      "Масштабные решения",
      "Выделенная команда",
      "SLA-поддержка",
      "Комплексные интеграции",
      "Полное сопровождение",
      "Приоритетная поддержка",
    ],
    popular: false,
  },
]

const hourlyRates = [
  { service: "Разработка ПО", rate: "от 3 000 ₽/час" },
  { service: "Консультации", rate: "от 5 000 ₽/час" },
  { service: "Техническая поддержка", rate: "от 50 000 ₽/мес" },
  { service: "Интеграционные работы", rate: "от 150 000 ₽" },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Стоимость услуг
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Гибкие тарифы для проектов любого масштаба. Точная стоимость определяется после анализа требований.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative bg-background border-border ${
                plan.popular ? "border-primary ring-1 ring-primary" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                  Популярный
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl text-foreground">{plan.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground text-sm ml-1"> ₽ {plan.period}</span>
                  )}
                </div>

                <ul className="space-y-3 mb-6 text-left">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant={plan.popular ? "default" : "outline"}
                  className="w-full"
                >
                  <Link href="#contacts">Обсудить проект</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Hourly rates */}
        <div className="max-w-3xl mx-auto">
          <Card className="bg-background border-border">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                Почасовые и абонентские тарифы
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {hourlyRates.map((item) => (
                  <div
                    key={item.service}
                    className="flex items-center justify-between p-4 rounded-lg bg-secondary/50"
                  >
                    <span className="text-foreground">{item.service}</span>
                    <span className="text-primary font-medium">{item.rate}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground text-center mt-6">
                * Окончательная стоимость рассчитывается индивидуально после анализа требований проекта
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
