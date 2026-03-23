import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Пользовательское соглашение | Геката",
  description: "Пользовательское соглашение ООО «Геката»",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            На главную
          </Link>
        </Button>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Пользовательское соглашение
          </h1>

          <div className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Общие положения</h2>
              <p className="text-muted-foreground leading-relaxed">
                Настоящее Пользовательское соглашение (далее — Соглашение) регулирует отношения 
                между ООО «Геката» (далее — Компания) и пользователем сайта (далее — Пользователь).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Предмет соглашения</h2>
              <p className="text-muted-foreground leading-relaxed">
                Компания предоставляет Пользователю доступ к информации об услугах, 
                размещённой на сайте, а также возможность направления запросов через формы 
                обратной связи.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Права и обязанности сторон</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Пользователь обязуется:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Предоставлять достоверную информацию при заполнении форм</li>
                <li>Не использовать сайт в незаконных целях</li>
                <li>Соблюдать авторские права на материалы сайта</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4 mb-2">
                Компания обязуется:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Обеспечивать доступность сайта в разумных пределах</li>
                <li>Защищать персональные данные Пользователя</li>
                <li>Рассматривать обращения Пользователей в разумные сроки</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Интеллектуальная собственность</h2>
              <p className="text-muted-foreground leading-relaxed">
                Все материалы сайта, включая тексты, изображения, программный код, 
                являются объектами интеллектуальной собственности Компании и защищены 
                законодательством Российской Федерации.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Ограничение ответственности</h2>
              <p className="text-muted-foreground leading-relaxed">
                Компания не несёт ответственности за любые убытки, возникшие в результате 
                использования или невозможности использования материалов сайта.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Изменение соглашения</h2>
              <p className="text-muted-foreground leading-relaxed">
                Компания оставляет за собой право вносить изменения в настоящее Соглашение 
                без предварительного уведомления Пользователя.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Контактная информация</h2>
              <p className="text-muted-foreground leading-relaxed">
                ООО «Геката»<br />
                ИНН: 7700000000<br />
                Адрес: 123456, г. Москва, ул. Примерная, д. 1, офис 100<br />
                Email: info@gekata.ru<br />
                Телефон: +7 (495) 000-00-00
              </p>
            </section>

            <p className="text-sm text-muted-foreground mt-8">
              Дата последнего обновления: {new Date().toLocaleDateString("ru-RU")}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
