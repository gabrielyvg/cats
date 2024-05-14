import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {

  const formData = await request.formData()
  const nome = formData.get('nome')
  const telefone = formData.get('telefone')
  const mensagem = formData.get('mensagem')

  const transport = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    const mail = await transport.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      replyTo: process.env.EMAIL,
      subject: `Formulario do site enviado por ${nome}`,
      html: `
        <p>Nome: ${nome} </p>
        <p>Telefone: ${telefone} </p>
        <p>Mensagem: ${mensagem} </p>
        `,
    })

    return NextResponse.json({ message: "Success: email was sent" })

  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: error }, { status: 500 });
  }
}