"use client";

import Image from "next/image";
import {
  stackJavaIcon,
  stackJavaScriptIcon,
  stackNextJsIcon,
  stackReactIcon,
  stackTypeScriptIcon,
  stackViteIcon,
  stackVueIcon,
  stackSanityIcon,
  stackGitIcon,
  stackHtmlIcon,
  stackCssIcon,
  stackFigmaIcon,
} from "@/public/assets";

type Stack = Readonly<{
  id: string;
  name: string;
  icon: string;
  description: string;
  glitchDuration: number;
}>;

const STACKS: Stack[] = [
  {
    id: "java",
    name: "Java",
    icon: stackJavaIcon,
    description:
      "Linguagem orientada a objetos, robusta e multiplataforma, amplamente usada em aplicações enterprise e Android.",
    glitchDuration: 5,
  },
  {
    id: "react",
    name: "React",
    icon: stackReactIcon,
    description:
      "Biblioteca para construir interfaces de usuário com componentes reutilizáveis e renderização declarativa.",
    glitchDuration: 28,
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: stackNextJsIcon,
    description:
      "Framework React com renderização no servidor (SSR) e geração estática para aplicações web escaláveis.",
    glitchDuration: 9,
  },
  {
    id: "vue",
    name: "Vue.js",
    icon: stackVueIcon,
    description:
      "Framework progressivo e leve para construir interfaces reativas com uma curva de aprendizado suave.",
    glitchDuration: 12,
  },
  {
    id: "vite",
    name: "Vite",
    icon: stackViteIcon,
    description:
      "Build tool moderna e ultrarrápida, com hot module replacement instantâneo para desenvolvimento.",
    glitchDuration: 7,
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: stackJavaScriptIcon,
    description:
      "Linguagem essencial da web, responsável por interatividade e dinâmica em praticamente todo navegador.",
    glitchDuration: 15,
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: stackTypeScriptIcon,
    description:
      "Superset de JavaScript com tipagem estática, garantindo mais segurança e manutenibilidade no código.",
    glitchDuration: 29,
  },
  {
    id: "sanity",
    name: "Sanity",
    icon: stackSanityIcon,
    description:
      "CMS headless com conteúdo estruturado em tempo real e APIs flexíveis para alimentar qualquer frontend.",
    glitchDuration: 25,
  },
  {
    id: "git",
    name: "Git",
    icon: stackGitIcon,
    description:
      "Sistema de controle de versão distribuído, essencial para versionar código e colaborar em equipe.",
    glitchDuration: 30,
  },
  {
    id: "html",
    name: "HTML5",
    icon: stackHtmlIcon,
    description:
      "Linguagem de marcação que estrutura o conteúdo e a semântica de toda página web.",
    glitchDuration: 35,
  },
  {
    id: "css",
    name: "CSS3",
    icon: stackCssIcon,
    description:
      "Linguagem de estilos responsável pela aparência, layout e responsividade das interfaces.",
    glitchDuration: 39,
  },
  {
    id: "figma",
    name: "Figma",
    icon: stackFigmaIcon,
    description:
      "Ferramenta colaborativa de design de interfaces e prototipagem de alta fidelidade.",
    glitchDuration: 42,
  },
];

export const StacksSection = () => {
  return (
    <section
      id="stacks"
      className="relative w-full  pb-24 sm:px-10 sm:pb-28 lg:px-[40px] lg:pb-36 xl:px-[5%]"
      aria-labelledby="stacks-heading"
    >
      <span className="pointer-events-none absolute top-0 left-0 h-6 w-6 border-t-2 border-l-2 border-[#ff0033] corner-glitch" />
      <span className="pointer-events-none absolute top-0 right-0 h-6 w-6 border-t-2 border-r-2 border-[#ff0033] corner-glitch" />
      <span className="pointer-events-none absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-[#ff0033] corner-glitch" />
      <span className="pointer-events-none absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-[#ff0033] corner-glitch" />

      <div className="mx-auto flex w-full  flex-col">
        <header className="animate-[portfolioReveal_820ms_cubic-bezier(0.22,1,0.36,1)_both]">
          <h2
            id="stacks-heading"
            className="whitespace-nowrap font-[Orbitron] text-center  text-[clamp(26px,7.5vw,32px)] font-bold leading-tight text-W6 sm:text-left sm:text-[40px] lg:text-[48px] xl:pl-32"
          >
            Minhas <span className="text-[#ff0033]">stacks</span>
          </h2>
        </header>

        <ul className="animate-[portfolioReveal_980ms_cubic-bezier(0.22,1,0.36,1)_both] mx-auto mt-12 grid w-full  grid-cols-2 place-items-center gap-6 sm:grid-cols-3 lg:grid-cols-5 sm:gap-10 lg:mt-16">
          {STACKS.map((stack) => (
            <li key={stack.id} className="group relative">
              <div
                className="glitch-stack grid size-24 place-items-center rounded-[8px] border-2 border-[#ff0033] bg-p6 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_0_20px_rgba(0,255,115,0.5)] sm:size-28"
                style={{ animationDuration: `${stack.glitchDuration}s` }}
              >
                <Image
                  src={stack.icon}
                  alt={stack.name}
                  width={56}
                  height={56}
                  className="size-14 object-contain drop-shadow-[0_0_8px_rgba(255,0,51,0.6)] sm:size-16"
                />
              </div>

              <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-3 w-56 -translate-x-1/2 rounded-[8px] border-2 border-[#ff0033] bg-B0 p-4 opacity-0 shadow-[0_0_20px_rgba(0,255,115,0.4)] transition-all duration-300 group-hover:opacity-100">
                <h3 className="font-quantico text-lg font-bold text-[#ff0033]">
                  {stack.name}
                </h3>
                <p className="mt-2 font-montserrat text-sm leading-relaxed text-W5">
                  {stack.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
