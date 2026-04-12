import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { Reservation } from '@/lib/models';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const { name, email, checkIn, checkOut, roomId } = body;

    const reservation = await Reservation.create({
      customerName: name,
      customerEmail: email,
      checkIn,
      checkOut,
      roomId,
    });

    // Send Telegram Notification
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (botToken && chatId) {
      const message = `
🏨 *New Reservation!*
👤 Name: ${name}
📧 Email: ${email}
📅 Check-in: ${new Date(checkIn).toLocaleDateString()}
📅 Check-out: ${new Date(checkOut).toLocaleDateString()}
      `;

      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'Markdown',
        }),
      });
    }

    return NextResponse.json({ success: true, data: reservation });
  } catch (error) {
    console.error('Reservation Error:', error);
    return NextResponse.json({ success: false, error: 'Failed to create reservation' }, { status: 500 });
  }
}
