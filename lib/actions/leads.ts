'use server';

import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import type { LeadStatus, LeadType } from '@/lib/generated/prisma/client';

export type LeadRow = {
  id: string;
  type: LeadType;
  name: string;
  email: string | null;
  whatsapp: string;
  subject: string | null;
  status: LeadStatus;
  createdAt: Date;
};

export type LeadDetail = LeadRow & {
  device: string | null;
  app: string | null;
  message: string;
  notes: string | null;
  updatedAt: Date;
};

export async function getLeads(): Promise<LeadRow[]> {
  return db.lead.findMany({
    orderBy: { createdAt: 'desc' },
    select: {
      id: true, type: true, name: true, email: true,
      whatsapp: true, subject: true, status: true, createdAt: true,
    },
  });
}

export async function getLead(id: string): Promise<LeadDetail | null> {
  return db.lead.findUnique({
    where: { id },
    select: {
      id: true, type: true, name: true, email: true, whatsapp: true,
      device: true, app: true, subject: true, message: true,
      status: true, notes: true, createdAt: true, updatedAt: true,
    },
  });
}

export async function updateLeadStatus(id: string, status: LeadStatus): Promise<void> {
  await db.lead.update({ where: { id }, data: { status } });
  revalidatePath('/admin/leads');
}

export async function updateLeadNotes(id: string, notes: string): Promise<void> {
  await db.lead.update({ where: { id }, data: { notes } });
  revalidatePath('/admin/leads');
}

export async function deleteLead(id: string): Promise<void> {
  await db.lead.delete({ where: { id } });
  revalidatePath('/admin/leads');
}
