import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const settings = await prisma.siteSetting.findFirst();

    if (!settings) {
      return NextResponse.json(null, { status: 200 });
    }

    return NextResponse.json(
      {
        siteName: settings.siteName,
        siteTagline: settings.siteTagline,
        bookNowUrl: settings.bookNowUrl ?? undefined,
        whatsappNumber: settings.whatsappNumber ?? undefined,
        logo: settings.logoUrl ? { url: settings.logoUrl } : undefined,
        phoneNumbers: settings.phoneNumbers.split(',').map((p) => p.trim()),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[API] site-settings GET error:', error);
    return NextResponse.json({ error: 'Failed to load site settings' }, { status: 500 });
  }
}

