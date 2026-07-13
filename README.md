# giunei.dev

Site oficial da marca **Giunei** — portfólio com foco em produto e engenharia.

**Live:** [giunei.dev](https://giunei.dev)  
**Produto destaque:** [My Museum](https://mymuseum.giunei.dev)

## Sobre

Página da marca com estética alinhada ao My Museum: dark slate, acentos pink/violet e narrativa de produto. O MyMuseum aparece como case principal; demais projetos ficam no GitHub.

## Stack

- Angular 19 (standalone)
- SCSS + design tokens
- Deploy na Vercel

## Desenvolvimento

```bash
npm install
npm start
```

App local: `http://localhost:4200`

```bash
npm run build
```

Saída: `dist/giunei-dev/browser`

## Estrutura

```
src/app/
  core/constants/   # dados (projetos, stack, social, about)
  layout/           # header, footer
  features/         # home, projetos, sobre, contato
src/styles/         # tokens de marca
public/assets/      # imagens estáticas
```

## Domínios

| Projeto   | URL                         |
|-----------|-----------------------------|
| Portfólio | [giunei.dev](https://giunei.dev) |
| My Museum | [mymuseum.giunei.dev](https://mymuseum.giunei.dev) |

URL do My Museum: `src/environments/environment*.ts` (`museumUrl`).

## Autor

**Giunei Júnior** — Full Stack Developer

- [GitHub](https://github.com/Giunei/)
- [LinkedIn](https://www.linkedin.com/in/giunei/)
