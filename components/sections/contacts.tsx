"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ooogekata@yandex.ru",
    href: "mailto:ooogekata@yandex.ru",
  },
  {
    icon: Phone,
    label: "Телефон",
    value: "8 (843) 200-09-00",
    href: "tel:+74950000000",
  },
  {
    icon: MapPin,
    label: "Адрес",
    value: "Республика Татарстан, 420111, г. Казань, ул. Островского, д. 22",
    href: null,
  },
]

export function ContactsSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <section id="contacts" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Контакты
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Свяжитесь с нами для обсуждения вашего проекта или получения консультации
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-6">
            <Card className="bg-background border-border">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Связаться с нами
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background border-border">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Режим работы
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Пн — Пт</span>
                    <span className="text-foreground">9:00 — 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Сб — Вс</span>
                    <span className="text-foreground">Выходной</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact form */}
          <Card className="bg-background border-border">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Оставить заявку
              </h3>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                    <Send className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Заявка отправлена!
                  </h4>
                  <p className="text-muted-foreground">
                    Мы свяжемся с вами в ближайшее время
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Отправить ещё
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <FieldGroup>
                    <Field>
                      <FieldLabel htmlFor="name">Имя</FieldLabel>
                      <Input
                        id="name"
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="email">Email</FieldLabel>
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="phone">Телефон</FieldLabel>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="message">Сообщение</FieldLabel>
                      <Textarea
                        id="message"
                        placeholder="Опишите ваш проект или задайте вопрос"
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                      />
                    </Field>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Отправка..." : "Отправить заявку"}
                    </Button>
                  </FieldGroup>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
