"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { PortfolioSection } from "@/components/portfoliosection";
import { StacksSection } from "@/components/stacks-section";

const LINKEDIN_URL =
  "https://www.linkedin.com/in/roseane-nunes-dos-anjos-5923142ba";
const GITHUB_URL = "https://github.com/roseanenunes";

const revealBase =
  "opacity-0 scale-90 transition-all duration-700 ease-out will-change-[opacity,transform]";

export default function Home() {
  const [photoError, setPhotoError] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 100);
    return () => clearTimeout(t);
  }, []);

  const shown = revealed ? "opacity-100 scale-100 translate-x-0" : "";

  return (
    <main className="relative overflow-hidden">
      <Image
        src="/assets/logos/fundo.jpeg"
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="pointer-events-none absolute inset-0 z-0 object-cover opacity-40 [filter:grayscale(1)_sepia(1)_hue-rotate(-50deg)_saturate(5)]"
      />
      <section className="relative w-full z-[1] flex min-h-screen gap-2 flex-col items-center justify-center bg-black/80 px-[5%] md:px-[15.5%] py-16">
        <div className="w-full h-fit relative items-center flex-col lg:flex-row flex gap-16 p-6">
          <span className="pointer-events-none absolute top-0 left-0 h-6 w-6 border-t-2 border-l-2 border-[#ff0033] corner-glitch" />
          <span className="pointer-events-none absolute top-0 right-0 h-6 w-6 border-t-2 border-r-2 border-[#ff0033] corner-glitch" />
          <span className="pointer-events-none absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-[#ff0033] corner-glitch" />
          <span className="pointer-events-none absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-[#ff0033] corner-glitch" />
          <div
            className={`relative rounded-2xl h-[200px] w-[200px] flex-shrink-0 overflow-hidden flex  border-[3px] shadow-[0_0_20px_rgba(255,0,51,0.5),inset_0_0_12px_rgba(255,0,51,0.3)] photo-glitch`}
          >
            {photoError ? (
              <div className="flex h-full w-full  flex-col items-center justify-center gap-2 border border-dashed border-[#ff0033] bg-[#1a0008] text-center text-sm text-[#ff0033]">
                <span>📷</span>
                <span>
                  COLOQUE SUA FOTO
                  <br />
                  EM /public/perfil.jpg
                </span>
              </div>
            ) : (
              <Image
                src="https://avatars.githubusercontent.com/u/163148121?v=4"
                alt="Foto de perfil"
                fill
                sizes="200px"
                className="object-cover"
                onError={() => setPhotoError(true)}
              />
            )}
          </div>
          <div className="w-full flex flex-col justify-end ">
            {" "}
            <h1 className="font-[Orbitron] text-4xl font-black tracking-[4px] text-[#ff0033] md:text-5xl">
              ROSEANE NUNES
            </h1>
            <span className="mt-4 inline-block bg-[#ff0033] px-4 py-1.5 font-[Orbitron] text-sm font-bold uppercase tracking-[3px] text-white">
              Desenvolvedora Front End
            </span>
          </div>
        </div>
        <div
          className={`relative flex w-full flex-col items-center text-start p-6 ${revealBase} ${
            revealed ? `translate-y-0 ${shown}` : "translate-y-10"
          }`}
        >
          <span className="pointer-events-none absolute top-0 left-0 h-6 w-6 border-t-2 border-l-2 border-[#ff0033] corner-glitch" />
          <span className="pointer-events-none absolute top-0 right-0 h-6 w-6 border-t-2 border-r-2 border-[#ff0033] corner-glitch" />
          <span className="pointer-events-none absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-[#ff0033] corner-glitch" />
          <span className="pointer-events-none absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-[#ff0033] corner-glitch" />
          <div className="mt-8 w-full">
            <h2 className="mb-3 font-[Orbitron] text-lg tracking-[3px] text-[#ff0033]">
              {"// SOBRE MIM"}
            </h2>
            <p className="font-[Rajdhani] text-base leading-[1.7] tracking-[0.5px] text-white/85">
              Olá! Sou Roseane Nunes, tenho 20 anos e sou estudante do 7º
              período de Ciência da Computação, apaixonada por tecnologia desde
              pequena, quando meu pai se tornou proprietário de uma lan house,
              local onde tive meus primeiros contatos com computadores. Faço
              parte atualmente da empresa júnior Knex, onde venho desenvolvendo
              novas habilidades e obtendo muito conhecimento.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-all duration-200 hover:opacity-70 hover:drop-shadow-[0_0_8px_rgba(255,0,51,0.8)]"
              >
                <Image
                  src="/assets/icons/linkedin.svg"
                  alt="LinkedIn"
                  width={40}
                  height={40}
                />
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition-all duration-200 hover:opacity-70 hover:drop-shadow-[0_0_8px_rgba(255,0,51,0.8)]"
              >
                <Image
                  src="/assets/icons/github.svg"
                  alt="GitHub"
                  width={40}
                  height={40}
                />
              </a>
            </div>
          </div>
        </div>
        <PortfolioSection />
        <StacksSection />
      </section>

      
    </main>
  );
}
