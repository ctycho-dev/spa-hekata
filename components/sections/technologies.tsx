import { Card, CardContent } from "@/components/ui/card"

const techCategories = [
  {
    title: "Языки программирования",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C#", "Go", "PHP"],
  },
  {
    title: "Frontend фреймворки",
    items: ["React", "Next.js", "Vue.js", "Angular", "Svelte"],
  },
  {
    title: "Backend фреймворки",
    items: ["Node.js", "Express", "NestJS", "Spring Boot", "Django", "FastAPI", ".NET"],
  },
  {
    title: "Базы данных",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "ClickHouse", "Elasticsearch"],
  },
  {
    title: "Облачные платформы",
    items: ["Yandex Cloud", "VK Cloud", "AWS", "Docker", "Kubernetes"],
  },
  {
    title: "Инструменты разработки",
    items: ["Git", "CI/CD", "Jira", "Figma", "Swagger", "Postman"],
  },
]

export function TechnologiesSection() {
  return (
    <section id="technologies" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Технологии
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Мы используем современный технологический стек для создания надёжных и масштабируемых решений
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {techCategories.map((category) => (
            <Card key={category.title} className="bg-background border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-sm rounded-md bg-secondary/50 text-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                    >
                      {item}
                    </span>
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
