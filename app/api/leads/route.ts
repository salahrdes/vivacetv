import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, whatsapp, device, subject, message } = body;

    if (!name || !message) {
      return NextResponse.json({ error: 'Champs requis manquants.' }, { status: 400 });
    }

    const lead = await db.lead.create({
      data: {
        type: 'CONTACT',
        name,
        email: email || null,
        whatsapp: whatsapp || '',
        device: device || null,
        subject: subject || null,
        message,
      },
    });

    return NextResponse.json({ id: lead.id }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 });
  }
}
