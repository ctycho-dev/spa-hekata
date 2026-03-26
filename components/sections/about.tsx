import { Building2, Mail, Phone, MapPin, FileText, Hash } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const companyDetails = [
  {
    icon: Building2,
    label: "Полное наименование",
    value: "Общество с ограниченной ответственностью «Геката»",
  },
  {
    icon: MapPin,
    label: "Адрес",
    value: "Республика Татарстан, 420111, г. Казань, ул. Островского, д. 22",
  },
  {
    icon: Hash,
    label: "ИНН",
    value: "1655512202",
  },
  {
    icon: Hash,
    label: "ОГРН",
    value: "1261600003895",
  },
  {
    icon: FileText,
    label: "Основной ОКВЭД",
    value: "62.01 — Разработка компьютерного программного обеспечения",
  },
  {
    icon: Mail,
    label: "Email",
    value: "ooogekata@yandex.ru",
  },
  {
    icon: Phone,
    label: "Телефон",
    value: "8 (843) 200-09-00",
  },
]

const itCodes = [
  "62.01 — Разработка компьютерного ПО",
  "62.02 — Консультационные услуги в области ИТ",
  "62.03 — Управление компьютерным оборудованием",
  "62.09 — Прочая деятельность в области ИТ",
  "63.11 — Обработка данных, хостинг",
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            О компании
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            ООО «Геката» — команда профессионалов в сфере информационных технологий.
            Мы специализируемся на разработке программного обеспечения, системной интеграции
            и комплексном сопровождении ИТ-инфраструктуры наших клиентов.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Company info */}
          <Card className="bg-background border-border">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Реквизиты компании</h3>
              <div className="space-y-5">
                {companyDetails.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="text-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* IT Codes */}
          <Card className="bg-background border-border">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Коды ИТ-деятельности (Приказ №449)
              </h3>
              <ul className="space-y-3">
                {itCodes.map((code, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground text-sm">{code}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Компания осуществляет деятельность в соответствии с требованиями
                  законодательства РФ и имеет все необходимые документы для работы
                  в сфере информационных технологий.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Extended description */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="bg-background border-border">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">О нашей деятельности</h3>
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  ООО «Геката» работает на рынке информационных технологий, предоставляя
                  полный спектр услуг по разработке, внедрению и сопровождению программных
                  решений. Наша команда состоит из опытных специалистов в области разработки ПО,
                  системного администрирования и проектного управления.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Мы работаем с компаниями различных отраслей, помогая им автоматизировать
                  бизнес-процессы, интегрировать информационные системы и обеспечивать
                  стабильную работу ИТ-инфраструктуры. Каждый проект для нас — это
                  возможность создать качественное решение, которое принесёт реальную
                  пользу бизнесу клиента.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
