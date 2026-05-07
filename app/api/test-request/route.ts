import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, whatsapp, device, app, message } = body;

    if (!name || !whatsapp || !device) {
      return NextResponse.json({ error: 'Champs requis manquants.' }, { status: 400 });
    }

    const lead = await db.lead.create({
      data: {
        type: 'TEST_GRATUIT',
        name,
        whatsapp,
        device,
        app: app || null,
        message: message || '',
        subject: 'Test gratuit 24h',
      },
    });

    return NextResponse.json({ id: lead.id }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 });
  }
}
