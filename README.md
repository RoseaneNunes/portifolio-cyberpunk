# Portfólio Cyberpunk

Portfólio pessoal de **Roseane Nunes** — desenvolvedora front end — com estética cyberpunk (vermelho neon, efeitos de glitch e marcadores de canto), construído com Next.js, React e Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind%20CSS-4-06b6d4?logo=tailwindcss)

## ✨ Funcionalidades

- **Tela de carregamento cyberpunk** — boot log com barra de progresso e efeito de "hacking", liberando o acesso ao portfólio.
- **Seção inicial / sobre mim** — foto de perfil com efeito glitch, apresentação e botões para LinkedIn e GitHub, sobre fundo com filtro vermelho.
- **Carrossel de projetos** — 6 projetos em carrossel infinito com auto-rotação, cards com logo e navegação (anterior/próximo).
- **Seção de stacks** — 12 tecnologias com ícones, efeito glitch por card e tooltip de descrição ao passar o mouse.
- **Efeitos visuais** — cantos em vermelho neon, glitch de foto e de cards, animações de reveal.
- **Favicon próprio** — `icon.svg`.

## 🚀 Iniciando

Requisitos: Node.js 18+ (ou 20+ recomendado).

```bash
# instalar dependências
npm install

# servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Scripts disponíveis

```bash
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção
npm run start    # serve o build de produção
npm run lint     # executa o eslint
```

## 🗂 Estrutura de pastas

```
src/
├── app/
│   ├── globals.css        # tema, cores e keyframes (glitch, corners)
│   ├── icon.svg           # favicon
│   ├── layout.tsx         # layout raiz e fontes (Quantico, Montserrat)
│   ├── page.tsx           # rota raiz → loading
│   └── home/
│       └── page.tsx       # seção inicial e sobre mim
├── components/
│   ├── CyberpunkLoading.tsx  # tela de boot
│   ├── portfoliosection.tsx  # carrossel de projetos
│   ├── stacks-section.tsx    # tecnologias
│   └── ui/
│       ├── index.ts
│       └── carousel/         # carrossel, nav button e card de projeto
public/
└── assets/
    ├── icons/            # ícones de stacks e redes sociais
    └── logos/            # logos dos projetos
```

## 🎨 Personalização

- **Cores do tema**: definidas em `src/app/globals.css` (variáveis `--color-*`).
- **Foto de perfil**: substitua a URL no `src/app/home/page.tsx` ou informe um arquivo `public/perfil.jpg`.
- **Projetos**: edite o array `PORTFOLIO_PROJECTS` em `src/components/portfoliosection.tsx`.
- **Stacks**: edite o array `STACKS` em `src/components/stacks-section.tsx`.
- **Links sociais**: `LINKEDIN_URL` e `GITHUB_URL` em `src/app/home/page.tsx`.

## 🧑‍💻 Tecnologias

JavaScript, TypeScript, React, Next.js, Vue.js, Vite, Java, Git, HTML5, CSS3, Figma e Sanity — conforme exibido na seção de stacks.

## 📄 Licença

Projeto pessoal.
