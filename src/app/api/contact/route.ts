import { NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  sessionType: string;
  date?: string;
  message: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: Partial<ContactPayload>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, sessionType, message } = body;

  if (!name || !email || !sessionType || !message) {
    return NextResponse.json(
      { error: "Name, email, session type, and message are required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please provide a valid email." }, { status: 400 });
  }

  return NextResponse.json({ success: true });
}
