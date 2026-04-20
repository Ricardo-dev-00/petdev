"use client";
import { useCallback, useEffect, useState } from "react";
import {
  Scissors,
  Syringe,
  CarTaxiFront,
  Hotel,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const services = [
  {
    title: "Banho e Tosa",
    description:
      "Deixe seu pet limpo e estiloso com nossos serviços de banho e tosa.",
    icon: <Scissors className="text-white" />,
    duration: "30-60 min",

    linkText: "Agende agora",
  },
  {
    title: "Consulta Veterinária",
    description:
      "Garanta a saúde do seu pet com nossas consultas veterinárias especializadas.",
    icon: <Syringe className="text-white" />,
    duration: "30-60 min",

    linkText: "Agende agora",
  },
  {
    title: "Táxi Pet",
    description:
      "Transporte seguro e confortável para o seu pet com nosso serviço de táxi pet.",
    icon: <CarTaxiFront className="text-white" />,
    duration: "2h - 4h",

    linkText: "Agende agora",
  },
  {
    title: "Hotel para Pets",
    description:
      "Oferecemos hospedagem confortável e segura para o seu pet enquanto você estiver ausente.",
    icon: <Hotel className="text-white" />,
    duration: "24h - 72h",

    linkText: "Agende agora",
  },
];

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      // Em telas maiores, avança e exibe os cards em grupos de 3.
      "(min-width: 768px)": { slidesToScroll: 3 },
    },
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    // Controla estado dos botões para desabilitar no início/fim do carrossel.
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div>
          <h2 className="text-4xl font-bold uppercase mb-12">Serviços</h2>
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              {/* Track com margem negativa + padding no slide evita corte do último card. */}
              <div className="flex -ml-6">
                {services.map((service) => (
                  <div
                    key={service.title}
                    className="flex-[0_0_100%] min-w-0 pl-6 md:flex-[0_0_33.3333%] flex"
                  >
                    <div className="p-6 bg-red-500 rounded-lg h-full flex flex-col">
                      <div className="flex items-start gap-3 flex-1">
                        <div className="mb-4">{service.icon}</div>
                        <div className="flex-1">
                          {/* Evita seleção de texto durante o swipe horizontal dos cards. */}
                          <h3 className="text-xl font-bold mb-2 text-white select-none">
                            {service.title}
                          </h3>
                          <p className="mb-4 text-[#fdfdfd] select-none">
                            {service.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-between border-t py-4 mt-auto">
                        <p className="mb-2 text-white select-none">
                          Duração: {service.duration}
                        </p>

                        <span className="text-white font-bold select-none">
                          {service.linkText}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                type="button"
                aria-label="Voltar serviços"
                onClick={() => emblaApi?.scrollPrev()}
                disabled={!canScrollPrev}
                className="absolute left-2 md:left-4 top-1/2 md:-translate-x-1/2 -translate-y-1/2 h-10 w-10 inline-flex items-center justify-center rounded-full border border-red-500 bg-white text-red-500 shadow-sm transition disabled:opacity-40 disabled:cursor-not-allowed hover:bg-red-50"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                aria-label="Avançar serviços"
                onClick={() => emblaApi?.scrollNext()}
                disabled={!canScrollNext}
                className="absolute right-2 md:right-4 top-1/2 md:translate-x-1/2 -translate-y-1/2 h-10 w-10 inline-flex items-center justify-center rounded-full border border-red-500 bg-white text-red-500 shadow-sm transition disabled:opacity-40 disabled:cursor-not-allowed hover:bg-red-50"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
