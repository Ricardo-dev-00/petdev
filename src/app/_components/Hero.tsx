import Image from "next/image";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import HeroDogImage from "../../../public/hero-dog.webp";

export function Hero() {
  return (
    <section className=" bg-red-500  overflow-hidden relative ">
      {/* Fundo visual da hero no mobile para manter contexto da marca sem ocupar layout */}
      <div>
        <Image
          src={HeroDogImage}
          alt="imagem de um cachorro"
          priority
          fill
          sizes="100vw"
          className="object-cover w-full h-96 opacity-60 lg:hidden"
        />
        <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>
      </div>
      <div className="container mx-auto py-16 md:pb-0 px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
        <div className="space-y-6">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl leading-10 font-bold mb-4">
            Seu pet merece cuidado, carinho e atenção especial.
          </h1>
          <p className="text-gray-200 text-lg">
            Oferecemos os melhores serviços para garantir o bem-estar e a
            felicidade do seu pet.
          </p>
          {/* CTA principal: leva o usuario para contato rapido no WhatsApp */}
          <a
            href=""
            className="bg-green-500 py-2 px-5 rounded-md text-white flex items-center gap-2 justify-center w-fit font-bold hover:bg-green-600 transition-colors duration-300"
          >
            <WhatsappLogoIcon className="w-5 h-5" /> Contato via WhatsApp
          </a>
          <p className="text-white text-sm mt-8 flex gap-1 items-center align-middle mb-4">
            <b className="bg-black text-white py-1 px-2 rounded-md">5%</b>de
            desconto na primeira compra.
          </p>
        </div>
        {/* Imagem principal exibida apenas em telas maiores para equilibrar texto e composicao */}
        <div className="hidden md:block h-full relative">
          <Image
            src={HeroDogImage}
            alt="imagem de um cachorro"
            priority
            className="object-contain"
            fill
            sizes="(max-width: 768px) 0vw, 50vw"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
}
