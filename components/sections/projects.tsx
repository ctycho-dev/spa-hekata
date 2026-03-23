import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    title: "Система управления складом",
    client: "Логистическая компания",
    task: "Разработать систему учёта и управления складскими запасами с интеграцией в существующую ERP-систему.",
    solution:
      "Создано веб-приложение с real-time отслеживанием остатков, автоматическим формированием заказов и мобильным приложением для сотрудников склада.",
    result: "Сокращение времени инвентаризации на 60%, снижение потерь на 25%.",
    technologies: ["React", "Node.js", "PostgreSQL", "1С Интеграция"],
  },
  {
    title: "Платформа электронного документооборота",
    client: "Государственное учреждение",
    task: "Создать систему электронного документооборота с поддержкой ЭЦП и интеграцией с СМЭВ.",
    solution:
      "Разработана платформа с полным циклом работы с документами, поддержкой маршрутизации, согласований и архивирования.",
    result: "Обработка документов ускорилась в 3 раза, исключены потери документов.",
    technologies: ["Java", "Spring Boot", "КриптоПро", "PostgreSQL"],
  },
  {
    title: "Мобильное приложение доставки",
    client: "Сеть ресторанов",
    task: "Разработать мобильное приложение для заказа еды с отслеживанием доставки в реальном времени.",
    solution:
      "Созданы iOS и Android приложения с интеграцией платёжных систем, push-уведомлениями и картой отслеживания курьера.",
    result: "Рост онлайн-заказов на 150%, повышение лояльности клиентов.",
    technologies: ["React Native", "Node.js", "MongoDB", "Firebase"],
  },
  {
    title: "Автоматизация производства",
    client: "Производственное предприятие",
    task: "Внедрить систему мониторинга оборудования и автоматизации производственных процессов.",
    solution:
      "Разработана SCADA-система с интеграцией с датчиками IoT, панелями управления и системой оповещений.",
    result: "Снижение простоев на 40%, оптимизация расхода ресурсов на 20%.",
    technologies: ["Python", "InfluxDB", "Grafana", "MQTT"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Реализованные проекты
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Примеры наших работ, демонстрирующие опыт и компетенции команды
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/30 transition-all duration-300"
            >
              <CardContent className="p-6 md:p-8">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary">{project.client}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      Задача
                    </p>
                    <p className="text-sm text-foreground">{project.task}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      Решение
                    </p>
                    <p className="text-sm text-foreground">{project.solution}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      Результат
                    </p>
                    <p className="text-sm text-primary font-medium">{project.result}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-secondary/50 text-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
