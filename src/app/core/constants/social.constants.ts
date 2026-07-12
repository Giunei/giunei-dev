export interface SocialLink {
  label: string;
  href: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/Giunei/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/giunei/' }
];

export const GITHUB_URL = SOCIAL_LINKS[0].href;
export const LINKEDIN_URL = SOCIAL_LINKS[1].href;
