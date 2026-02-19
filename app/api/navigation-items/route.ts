import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const items = await prisma.navigationItem.findMany({
      orderBy: { order: 'asc' },
    });

    return NextResponse.json(
      items.map((item) => ({
        id: item.id,
        label: item.label,
        href: item.href,
        order: item.order,
        isActive: item.isActive,
        active: item.isActive,
      })),
      { status: 200 }
    );
  } catch (error) {
    console.error('[API] navigation-items GET error:', error);
    return NextResponse.json({ error: 'Failed to load navigation items' }, { status: 500 });
  }
}

