// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { firstName, lastName, email, message } = data;

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json({ error: 'Bütün sahələr doldurulmalıdır' }, { status: 400 });
  }

  // Nodemailer transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 587,
    auth: { user: 'your-email@example.com', pass: 'your-email-password' },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'info@brendim.com',
      subject: `Yeni müraciət: ${firstName} ${lastName}`,
      text: message,
      html: `<p>${message}</p><p>Göndərən: ${firstName} ${lastName} (${email})</p>`,
    });

    return NextResponse.json({ message: 'Mesaj göndərildi' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Mesaj göndərilə bilmədi' }, { status: 500 });
  }
}