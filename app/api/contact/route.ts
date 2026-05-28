import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { company, name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "必須項目が不足しています" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "ITお助けマン <onboarding@resend.dev>",
    to: "kaiji303@gmail.com",
    replyTo: email,
    subject: `【お問い合わせ】${name}様より`,
    text: `会社名: ${company || "未記入"}
お名前: ${name}
メール: ${email}

相談内容:
${message}`,
  });

  if (error) {
    return NextResponse.json({ error: "送信に失敗しました" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
