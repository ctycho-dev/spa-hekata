import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Политика конфиденциальности | Геката",
  description: "Политика конфиденциальности ООО «Геката»",
}

export default function PrivacyPage() {
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
            Политика конфиденциальности
          </h1>

          <div className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Общие положения</h2>
              <p className="text-muted-foreground leading-relaxed">
                Настоящая Политика конфиденциальности определяет порядок обработки и защиты
                ООО «Геката» (далее — Компания) персональных данных пользователей сайта.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Сбор информации</h2>
              <p className="text-muted-foreground leading-relaxed">
                Компания собирает информацию, которую пользователь предоставляет добровольно
                при заполнении форм на сайте: имя, адрес электронной почты, номер телефона,
                текст сообщения.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Использование информации</h2>
              <p className="text-muted-foreground leading-relaxed">
                Собранная информация используется для:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                <li>Связи с пользователем по вопросам сотрудничества</li>
                <li>Предоставления информации об услугах компании</li>
                <li>Улучшения качества обслуживания</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Защита информации</h2>
              <p className="text-muted-foreground leading-relaxed">
                Компания принимает все необходимые организационные и технические меры для
                защиты персональных данных пользователей от несанкционированного доступа,
                изменения, раскрытия или уничтожения.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Передача данных третьим лицам</h2>
              <p className="text-muted-foreground leading-relaxed">
                Компания не передаёт персональные данные третьим лицам, за исключением случаев,
                предусмотренных законодательством Российской Федерации.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Контактная информация</h2>
              <p className="text-muted-foreground leading-relaxed">
                По вопросам, связанным с обработкой персональных данных, вы можете обратиться
                по адресу электронной почты: ooogekata@yandex.ru
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
