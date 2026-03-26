import { FileCheck, Shield, Key, Cloud, Database, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const softwareProducts = [
  {
    name: "Геката.Документы",
    description: "Система электронного документооборота с поддержкой ЭЦП",
    registryNumber: "12345",
    registryLink: "https://reestr.digital.gov.ru/reestr/12345/",
    licenseTypes: ["Лицензия", "SaaS", "Подписка"],
    features: ["Маршрутизация документов", "Поддержка ЭЦП", "Интеграция с 1С"],
  },
  {
    name: "Геката.Склад",
    description: "Система управления складскими запасами и логистикой",
    registryNumber: "12346",
    registryLink: "https://reestr.digital.gov.ru/reestr/12346/",
    licenseTypes: ["Лицензия", "SaaS"],
    features: ["Учёт остатков", "Инвентаризация", "Аналитика"],
  },
  {
    name: "Геката.CRM",
    description: "Система управления взаимоотношениями с клиентами",
    registryNumber: "12347",
    registryLink: "https://reestr.digital.gov.ru/reestr/12347/",
    licenseTypes: ["Подписка", "SaaS"],
    features: ["Воронка продаж", "Автоматизация", "Отчёты"],
  },
]

const accessMethods = [
  {
    icon: Key,
    title: "Лицензия",
    description: "Бессрочная лицензия на использование ПО с установкой на сервер заказчика",
  },
  {
    icon: Cloud,
    title: "SaaS",
    description: "Облачное решение с оплатой по модели «программа как услуга»",
  },
  {
    icon: Database,
    title: "Подписка",
    description: "Ежемесячная или ежегодная подписка с доступом к обновлениям и поддержке",
  },
]

export function SoftwareSection() {
  return (
    <section id="software" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Программные продукты и права на ПО
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Собственные программные продукты компании, зарегистрированные в Реестре российского ПО
          </p>
        </div> */}

        {/* Registry info */}
        {/* <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Реестр российского программного обеспечения (РРПО)
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Все наши программные продукты зарегистрированы в Едином реестре российских 
                  программ для электронных вычислительных машин и баз данных Минцифры России. 
                  Это подтверждает наши исключительные права на ПО и соответствие требованиям 
                  импортозамещения.
                </p>
              </div>
            </CardContent>
          </Card>
        </div> */}

        {/* Software products */}
        {/* <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {softwareProducts.map((product) => (
            <Card key={product.name} className="bg-card border-border">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <FileCheck className="h-5 w-5 text-primary" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    РРПО №{product.registryNumber}
                  </Badge>
                </div>
                <CardTitle className="text-lg mt-3">{product.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{product.description}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    Возможности
                  </p>
                  <ul className="space-y-1">
                    {product.features.map((feature) => (
                      <li key={feature} className="text-sm text-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    Способы предоставления
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {product.licenseTypes.map((type) => (
                      <Badge key={type} variant="secondary" className="text-xs">
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Link
                  href={product.registryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  Реестровая запись
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
          ))} 
        </div> */}

        {/* Access methods */}
        <div className="max-w-4xl mx-auto">
          {/* <h3 className="text-xl font-semibold text-foreground text-center mb-8">
            Способы предоставления прав
          </h3> */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
              Способы предоставления прав
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {accessMethods.map((method) => (
              <Card key={method.title} className="bg-card border-border text-center">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                    <method.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{method.title}</h4>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
