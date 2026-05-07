import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, whatsapp, device, message, plan, planDuration, planPrice } = body;

    if (!name || !whatsapp || !device || !plan) {
      return NextResponse.json({ error: 'Champs requis manquants.' }, { status: 400 });
    }

    const order = await db.order.create({
      data: {
        plan,
        planDuration: planDuration ?? '',
        planPrice: Number(planPrice) || 0,
        customerName: name,
        customerWhatsapp: whatsapp,
        device,
        message: message || null,
      },
    });

    return NextResponse.json({ id: order.id }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 });
  }
}
