import { environment } from '../../../environments/environment';

export interface FeaturedProject {
  id: string;
  name: string;
  tagline: string;
  description: string;
  href: string;
  image?: string;
  technologies: string[];
  highlight: boolean;
}

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: 'my-museum',
    name: 'MyMuseum',
    tagline: 'Seu museu de livros, filmes, séries e jogos.',
    description:
      'Uma plataforma social para quem ama livros, filmes, séries e jogos.',
    href: environment.museumUrl,
    image: 'assets/homeMM.png',
    technologies: [
      'Spring Boot',
      'Angular',
      'Redis',
      'Steam API',
      'TMDB',
      'Google Books',
      'Docker',
      'GitHub Actions',
      'Railway',
      'Vercel'
    ],
    highlight: true
  }
];

export const OTHER_PROJECTS: FeaturedProject[] = [
  {
    id: 'gestao-vagas',
    name: 'Gestão de Vagas',
    tagline: 'API para empresas e candidatos gerenciarem vagas e candidaturas.',
    description:
      'Backend em Java para cadastro de empresas, candidatos e fluxo de vagas.',
    href: 'https://github.com/Giunei/gestao_vagas',
    technologies: ['Java', 'Spring Boot'],
    highlight: false
  },
  {
    id: 'catalog-marketplace',
    name: 'Catalog Marketplace',
    tagline: 'Catálogo e marketplace de produtos com API em Java.',
    description:
      'Serviço de catálogo voltado a listagem e gestão de produtos em um marketplace.',
    href: 'https://github.com/Giunei/catalog-marketplace',
    technologies: ['Java', 'Spring Boot'],
    highlight: false
  },
  {
    id: 'api-rank-teams-lol',
    name: 'API Rank Teams LoL',
    tagline: 'API em Go para ranking e times de League of Legends.',
    description:
      'Serviço em Go focado em ranking de times no ecossistema de League of Legends.',
    href: 'https://github.com/Giunei/API-Rank-Teams-LoL',
    technologies: ['Go'],
    highlight: false
  },
  {
    id: 'certification-nlw',
    name: 'Certification NLW',
    tagline: 'API de certificação desenvolvida no NLW.',
    description:
      'Backend de certificação construído durante o NLW, com foco em APIs Java.',
    href: 'https://github.com/Giunei/certification_nlw',
    technologies: ['Java', 'Spring Boot'],
    highlight: false
  },
  {
    id: 'venda-de-produtos',
    name: 'Venda de Produtos',
    tagline: 'Aplicação para fluxo de venda e gestão de produtos.',
    description:
      'Projeto focado no fluxo de venda de produtos, do cadastro à comercialização.',
    href: 'https://github.com/Giunei/Venda-de-produtos',
    technologies: ['Java'],
    highlight: false
  }
];
