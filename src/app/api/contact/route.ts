import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Send Telegram Notification
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (botToken && chatId) {
      const telegramMessage = `
📩 *New Contact Message!*
👤 Name: ${name}
📧 Email: ${email}
🏷️ Subject: ${subject}
💬 Message: ${message}
      `;

      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
          parse_mode: 'Markdown',
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact Error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send message' }, { status: 500 });
  }
}
