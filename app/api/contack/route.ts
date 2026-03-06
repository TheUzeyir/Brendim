import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { firstName, lastName, email, message } = data;

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: 'Bütün sahələr doldurulmalıdır' }, { status: 400 });
    }

    // Nodemailer transport (SMTP serverinizi doldurun)
    const transporter = nodemailer.createTransport({
      host: 'smtp.example.com', // SMTP server
      port: 587,
      auth: {
        user: 'your-email@example.com',
        pass: 'your-email-password',
      },
    });

    await transporter.sendMail({
      from: email,
      to: 'info@brendim.com', // Qəbul edəcək email
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