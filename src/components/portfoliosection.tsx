"use client";

import { useCallback, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
  CarouselNavButton,
  PortfolioProjectCard,
  PortfolioProjectCardData,
} from "@/components/ui";
import {
  portfolioIrisComunicaLogo,
  portfolioElevenJr,
  portfolioLíderi,
  logoEA,
  logoPringles,
  logoCommercialHub,
} from "@/public/assets";

const PORTFOLIO_PROJECTS: PortfolioProjectCardData[] = [
   {
    id: "elevenjr",
    title: "Eleven Jr",
    subtitle: "Web - LP",
    logo: portfolioElevenJr,
    href: "https://eleven-lp.vercel.app/",
    glitchDuration: 9,
  },
  {
    id: "iris-comunica",
    title: "Íris",
    subtitle: "Web - LP",
    logo: portfolioIrisComunicaLogo,
    href: "https://www.iriscomunicacao.tech/",
    glitchDuration: 7,
  },
  {
    id: "Catalogo EA",
    title: "Catálogo EA",
    subtitle: "Web - LP",
    logo: logoEA,
    href: "https://roseanenunes.github.io/Alura-imers-o-dev/",
    glitchDuration: 12,
  },
  {
    id: "Lp - Pringles",
    title: "LP - Pringles",
    subtitle: "Web - LP",
    logo: logoPringles,
    href: "https://pringles-lmz2fpf82-roseane-nunes-projects.vercel.app/",
    glitchDuration: 6,
  },
  {
    id: "Líderi consultoria",
    title: "Líderi",
    subtitle: "Web - LP",
    logo: portfolioLíderi,
    href: "https://www.lidericonsultoria.com/",
    glitchDuration: 10,
  },
  {
    id: "CommercialHub",
    title: "CommercialHub",
    subtitle: "Sistema de Gerenciamento de Aluguéis",
    logo: logoCommercialHub,
    href: "https://projeto-es-commercial-hub.vercel.app/",
    glitchDuration: 5,
  },
];

const AUTO_ROTATE_MS = 5200;
const INFINITE_PORTFOLIO_PROJECTS = PORTFOLIO_PROJECTS.concat(PORTFOLIO_PROJECTS);

export const PortfolioSection = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = useCallback(() => {
    carouselApi?.scrollNext();
  }, [carouselApi]);

  const goToPrevious = useCallback(() => {
    carouselApi?.scrollPrev();
  }, [carouselApi]);

  useEffect(() => {
    if (!carouselApi || isPaused) return;

    const intervalId = window.setInterval(() => {
      goToNext();
    }, AUTO_ROTATE_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [carouselApi, goToNext, isPaused]);

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden w-full  px-6 pb-24 sm:px-10 sm:pb-28 lg:px-[40px] lg:pb-36 xl:px-[5%] "
      aria-labelledby="portfolio-heading"
    >
      <span className="pointer-events-none absolute top-0 left-0 h-6 w-6 border-t-2 border-l-2 border-[#ff0033] corner-glitch" />
      <span className="pointer-events-none absolute top-0 right-0 h-6 w-6 border-t-2 border-r-2 border-[#ff0033] corner-glitch" />
      <span className="pointer-events-none absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-[#ff0033] corner-glitch" />
      <span className="pointer-events-none absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-[#ff0033] corner-glitch" />
      <div className="mx-auto flex w-full max-w-[1700px] flex-col">
        <header className="animate-[portfolioReveal_820ms_cubic-bezier(0.22,1,0.36,1)_both]">
          <h2
            id="portfolio-heading"
            className="whitespace-nowrap text-center font-[Orbitron] text-[clamp(26px,7.5vw,32px)] font-bold leading-tight text-W6 sm:text-left sm:text-[40px] lg:text-[48px] xl:pl-32"
          >
             <span className="text-[#ff0033]">Projetos</span> dos quais fiz parte
          </h2>
        </header>

        <div
          className="animate-[portfolioReveal_980ms_cubic-bezier(0.22,1,0.36,1)_both] mx-auto mt-10 w-[1664px] max-w-full sm:mt-14 lg:mt-[84px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
        >
          <div className="flex items-start sm:h-[282px] sm:items-center">
            <CarouselNavButton
              direction="previous"
              ariaLabel="Mostrar projeto anterior"
              onClick={goToPrevious}
              className="mt-[76px] !size-[40px] sm:mt-0 sm:!size-[60px]"
            />

            <div className="w-full overflow-hidden sm:mx-6 sm:h-full lg:mx-[52px] lg:max-w-[calc(100%-224px)]">
              <Carousel
                setApi={setCarouselApi}
                opts={{ align: "start", loop: true }}
                className="h-full w-full"
              >
                <CarouselContent className="-ml-4 h-full sm:-ml-6">
                  {INFINITE_PORTFOLIO_PROJECTS.map((project, index) => (
                    <CarouselItem
                      key={`${project.id}-${index}`}
                      className="h-full basis-full pl-4 lg:basis-1/2 sm:pl-6 lg:basis-auto"
                    >
                      <PortfolioProjectCard project={project} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

            <CarouselNavButton
              direction="next"
              ariaLabel="Mostrar próximo projeto"
              onClick={goToNext}
              className="mt-[76px]  !size-[40px] sm:mt-0 sm:!size-[60px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
