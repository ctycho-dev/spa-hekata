// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server"
import nodemailer, { TransportOptions } from "nodemailer"

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  // port: Number(process.env.SMTP_PORT),
  // secure: false,
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  connectionTimeout: 5000,
  greetingTimeout: 5000,
  socketTimeout: 10000,
} as TransportOptions)


export async function POST(req: NextRequest) {
  const { name, email, phone, message } = await req.json()

  console.log("[api/contact] env check", {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    user: process.env.SMTP_USER,
    passSet: !!process.env.SMTP_PASS,
  })

  // Basic server-side validation
  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  try {
    await transporter.sendMail({
      from: `"Сайт Геката" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `Новая заявка от ${name}`,
      html: `
        <h2>Новая заявка с сайта</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Телефон:</strong> ${phone || "не указан"}</p>
        <p><strong>Сообщение:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Mail error:", err)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}