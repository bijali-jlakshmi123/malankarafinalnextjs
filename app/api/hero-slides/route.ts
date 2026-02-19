import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const slides = await prisma.heroSlide.findMany({
      orderBy: { order: 'asc' },
    });

    return NextResponse.json(
      slides.map((s) => ({
        id: s.id,
        title: s.title,
        description: s.description,
        image: { url: s.imageUrl },
        order: s.order,
        link: s.link ?? undefined,
      })),
      { status: 200 }
    );
  } catch (error) {
    console.error('[API] hero-slides GET error:', error);
    return NextResponse.json({ error: 'Failed to load hero slides' }, { status: 500 });
  }
}

