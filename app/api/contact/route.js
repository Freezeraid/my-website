import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'killiandoubrepro@gmail.com',
      subject: `Nouvelle demande de contact - ${name}`,
      html: `
        <h2>Nouveau message de contact: ${name}</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      success: true, 
      message: 'Email envoyé avec succès' 
    });
  } catch (error) {
    console.error('Erreur envoi email:', error);
    return NextResponse.json(
      { success: false, message: 'Erreur lors de l\'envoi de l\'email' },
      { status: 500 }
    );
  }
}