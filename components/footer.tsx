import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

const companyInfo = {
  name: "ООО «Геката»",
  fullName: "Общество с ограниченной ответственностью «Геката»",
  inn: "1655512202",
  ogrn: "1261600003895",
  address: "Республика Татарстан, 420111, г. Казань, ул. Островского, д. 22",
  email: "ooogekata@yandex.ru",
  phone: "8 (843) 200-09-00",
  okveds: [
    "62.01 — Разработка компьютерного ПО",
    "62.02 — Консультационные услуги в области ИТ",
  ],
}

const navLinks = [
  { href: "#about", label: "О компании" },
  { href: "#services", label: "Услуги" },
  { href: "#projects", label: "Проекты" },
  { href: "#technologies", label: "Технологии" },
  { href: "#software", label: "Права на ПО" },
  { href: "#contacts", label: "Контакты" },
]

const legalLinks = [
  { href: "/privacy", label: "Политика конфиденциальности" },
  { href: "/terms", label: "Пользовательское соглашение" },
]

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Геката"
                width={150}
                height={48}
                className="rounded-md object-contain dark:hidden"
                priority
              />
              <Image
                src="/logo-white.png"
                alt="Геката"
                width={150}
                height={48}
                className="rounded-md object-contain hidden dark:block"
              />
            </Link>

            <p className="text-muted-foreground text-sm mb-4 max-w-md">
              Разработка программного обеспечения, системная интеграция
              и техническая поддержка ИТ-решений для бизнеса.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <a href={`mailto:${companyInfo.email}`} className="text-foreground hover:text-primary">
                  {companyInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <a href={`tel:${companyInfo.phone.replace(/\D/g, "")}`} className="text-foreground hover:text-primary">
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-foreground">{companyInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Документы</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Requisites */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Наименование</p>
              <p className="text-foreground">{companyInfo.fullName}</p>
            </div>
            <div>
              <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">ИНН</p>
              <p className="text-foreground">{companyInfo.inn}</p>
            </div>
            <div className="lg:col-span-2">
              <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Коды ИТ-деятельности</p>
              <p className="text-foreground">{companyInfo.okveds.join("; ")}</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ООО «Геката». Все права защищены.
          </p>
          <p className="text-sm text-muted-foreground">
            Разработка программного обеспечения
          </p>
        </div>
      </div>
    </footer>
  )
}
