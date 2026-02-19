export interface HeroSlide {
  id: number;
  title: string;
  description: string;
  image: {
    url: string;
    alternativeText?: string;
  };
  order?: number;
  link?: string;
}

export interface NavigationItem {
  id: number;
  label: string;
  href: string;
  order?: number;
  isActive?: boolean;
  active?: boolean; // For backward compatibility
}

export interface SiteSettings {
  logo?: {
    url: string;
  };
  phoneNumbers: string[] | string;
  bookNowUrl?: string;
  whatsappNumber?: string;
  siteName?: string;
  siteTagline?: string;
}

export async function getHeroSlides(): Promise<HeroSlide[]> {
  try {
    const response = await fetch('/api/hero-slides');

    if (!response.ok) {
      throw new Error('Failed to fetch hero slides');
    }

    const data: HeroSlide[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching hero slides:', error);
    return [];
  }
}

export async function getNavigationItems(): Promise<NavigationItem[]> {
  try {
    const response = await fetch('/api/navigation-items');

    if (!response.ok) {
      throw new Error('Failed to fetch navigation items');
    }

    const data: NavigationItem[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching navigation items:', error);
    return [];
  }
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    const response = await fetch('/api/site-settings');

    if (!response.ok) {
      throw new Error('Failed to fetch site settings');
    }

    const data: SiteSettings | null = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching site settings:', error);
    return null;
  }
}
