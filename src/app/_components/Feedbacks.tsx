"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Feedback = {
  image: string;
  description: string;
  name: string;
  role: string;
};

// Lista base de depoimentos exibidos no carrossel.
const feedbacks: Feedback[] = [
  {
    image: "/tutor1.png",
    description:
      "Excelente serviço! Meu cachorro adorou o banho e tosa, e a equipe foi super atenciosa.",
    name: "Maria Silva",
    role: "Tutora da Mel e do Max",
  },
  {
    image: "/tutor2.webp",
    description:
      "Recomendo muito! O ambiente é limpo e acolhedor, e meu cachorro ficou lindo depois do banho e tosa.",
    name: "Ana Oliveira",
    role: "Tutora do Rocky",
  },
  {
    image: "/tutor3.webp",
    description:
      "O atendimento foi incrível! Meu gato ficou super confortável durante o banho e tosa, e o resultado ficou ótimo.",
    name: "João Santos",
    role: "Tutor do Simba",
  },
];

export function Feedbacks() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  // Configuração do Embla para exibir 1 card por vez com loop infinito.
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    // Sincroniza o estado dos botões com a posição atual do carrossel.
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
    <section
      className="bg-red-500 py-16 relative"
      aria-labelledby="feedbacks-title"
    >
      <h2
        id="feedbacks-title"
        className="text-4xl font-bold uppercase mb-8  text-white text-center"
      >
        Feedbacks
      </h2>
      <div className="container mx-auto px-4">
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {feedbacks.map((feedback) => (
                <div
                  key={feedback.name}
                  // Cada slide ocupa 100% da largura para manter um único card visível.
                  className="embla__slide min-w-0 flex-[0_0_100%] px-4"
                >
                  <div className="bg-black rounded-2xl p-8 flex flex-col items-center h-full">
                    <Image
                      src={`${basePath}${feedback.image}`}
                      alt={feedback.name}
                      width={96}
                      height={96}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <p className="text-gray-300 text-center mb-2">
                      {feedback.description}
                    </p>
                    <p className="text-white text-center font-bold">
                      {feedback.name}
                    </p>
                    <p className="text-gray-300 text-center">{feedback.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              type="button"
              aria-label="Voltar feedback"
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="absolute left-4 top-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 inline-flex items-center justify-center rounded-full border border-red-500 bg-white text-red-500 shadow-sm transition disabled:opacity-40 disabled:cursor-not-allowed hover:bg-red-50 z-10"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              aria-label="Avançar feedback"
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canScrollNext}
              className="absolute right-4 top-1/2 translate-x-1/2 -translate-y-1/2 h-10 w-10 inline-flex items-center justify-center rounded-full border border-red-500 bg-white text-red-500 shadow-sm transition disabled:opacity-40 disabled:cursor-not-allowed hover:bg-red-50 z-10"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
