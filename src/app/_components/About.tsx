import { ChevronDownCircle, MapPin } from "lucide-react";
import Image from "next/image";
import about1Image from "../../../public/about-1.png";
import about2Image from "../../../public/about-2.png";

type AboutInfoItemProps = {
  text: string;
};

function AboutInfoItem({ text }: AboutInfoItemProps) {
  return (
    <li className="flex items-center font-bold gap-2">
      <ChevronDownCircle className="text-red-500" /> {text}
    </li>
  );
}

export function About() {
  // Itens renderizados em lista para manter consistência visual e facilitar manutenção.
  const infoItems = [
    "Aberto desde 2006",
    "Atendemos mais de 1000 clientes por mês",
    "Mais de 5000 pets felizes",
  ];

  // TODO: trocar pelos links oficiais da empresa.
  const whatsappLink = "https://wa.me/5500000000000";
  const mapsLink = "https://maps.google.com/?q=PetDev";

  // Classe base compartilhada entre os links de ação (inclui estilos de foco para acessibilidade).
  const actionLinkBase =
    "inline-flex items-center gap-2 font-bold transition-all duration-200 text-sm md:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2";

  return (
    <section className="bg-yellow-50" aria-labelledby="about-title">
      <div className="container mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
            {/* fill + sizes melhora a responsividade e evita layout shift em telas diferentes. */}
            <Image
              src={about1Image}
              alt="Imagem de um pet feliz"
              className="object-cover hover:scale-110 transition-transform duration-300"
              fill
              quality={100}
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          {/* Imagem de apoio para dar mais profundidade visual ao bloco. */}
          <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg overflow-hidden border-4 border-white shadow-lg">
            <Image
              src={about2Image}
              alt="Close de um pet"
              className="object-cover"
              fill
              quality={100}
              sizes="160px"
            />
          </div>
        </div>

        <div
          className="space-y-6 flex flex-col justify-center"
          data-aos="fade-left"
        >
          <h2 id="about-title" className="text-4xl font-bold uppercase mb-4">
            Sobre
          </h2>
          <p className="text-gray-500 mb-4">
            Na PetDev, unimos carinho, experiência e atenção aos detalhes para
            oferecer o melhor cuidado ao seu pet. Nossa equipe é especializada
            em bem-estar animal e trabalha com atendimento humanizado, ambiente
            seguro e serviços pensados para cada fase da vida do seu
            companheiro.
          </p>
          <ul className="space-y-4">
            {infoItems.map((item) => (
              <AboutInfoItem key={item} text={item} />
            ))}
          </ul>

          <div
            className="flex gap-4 items-center flex-wrap mt-10"
            data-aos="fade-up"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className={`${actionLinkBase} bg-red-500 py-2 px-4 text-white rounded-md w-fit hover:bg-red-700 hover:-translate-y-0.5`}
            >
              Contato via WhatsApp
            </a>
            <a
              href={mapsLink}
              target="_blank"
              rel="noreferrer"
              className={`${actionLinkBase} text-gray-700 hover:text-red-500 hover:underline underline-offset-4`}
            >
              Endereço da loja <MapPin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
