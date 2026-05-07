'use server';

import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import type { OrderStatus } from '@/lib/generated/prisma/client';

export type OrderRow = {
  id: string;
  plan: string;
  planDuration: string;
  planPrice: number;
  customerName: string;
  customerWhatsapp: string;
  device: string;
  status: OrderStatus;
  createdAt: Date;
};

export type OrderDetail = OrderRow & {
  message: string | null;
  notes: string | null;
  updatedAt: Date;
};

export async function getOrders(): Promise<OrderRow[]> {
  return db.order.findMany({
    orderBy: { createdAt: 'desc' },
    select: {
      id: true, plan: true, planDuration: true, planPrice: true,
      customerName: true, customerWhatsapp: true, device: true,
      status: true, createdAt: true,
    },
  });
}

export async function getOrder(id: string): Promise<OrderDetail | null> {
  return db.order.findUnique({
    where: { id },
    select: {
      id: true, plan: true, planDuration: true, planPrice: true,
      customerName: true, customerWhatsapp: true, device: true,
      status: true, message: true, notes: true, createdAt: true, updatedAt: true,
    },
  });
}

export async function updateOrderStatus(id: string, status: OrderStatus): Promise<void> {
  await db.order.update({ where: { id }, data: { status } });
  revalidatePath('/admin/commandes');
}

export async function updateOrderNotes(id: string, notes: string): Promise<void> {
  await db.order.update({ where: { id }, data: { notes } });
  revalidatePath('/admin/commandes');
}

export async function deleteOrder(id: string): Promise<void> {
  await db.order.delete({ where: { id } });
  revalidatePath('/admin/commandes');
}
