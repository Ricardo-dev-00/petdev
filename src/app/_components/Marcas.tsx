import Image from "next/image";

type Brand = {
  name: string;
  src: string;
};

const brands: Brand[] = [
  // Logos exibidos na seção de marcas parceiras.
  { name: "Royal Canin", src: "/royal.png" },
  { name: "Golden", src: "/golden.png" },
  { name: "Primier", src: "/primier.png" },
  { name: "Natural", src: "/natural.png" },
  { name: "Whiskas", src: "/whiskas.png" },
  { name: "Golden", src: "/golden.png" },
];

export function Marcas() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <section className="bg-red-500 py-16" aria-labelledby="marcas-title">
      <h2
        id="marcas-title"
        className="text-4xl font-bold uppercase mb-8  text-white text-center"
      >
        Marcas que trabalhamos
      </h2>
      <ul className="grid grid-cols-2 md:grid-cols-6 gap-8 container mx-auto px-4">
        {/* Renderiza a grade de logos sem duplicar markup manualmente. */}
        {brands.map((brand, index) => (
          <li
            key={`${brand.name}-${index}`}
            className="bg-white flex items-center justify-center rounded-2xl"
          >
            <Image
              src={`${basePath}${brand.src}`}
              alt={`Logo ${brand.name}`}
              width={800}
              height={400}
              className="mx-auto rounded-2xl"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
