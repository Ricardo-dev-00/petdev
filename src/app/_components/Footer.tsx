import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  TwitchLogoIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

const whatsappLink =
  "https://wa.me/551112345678?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20servi%C3%A7o%20para%20meu%20pet.";

// Links sociais renderizados dinamicamente para evitar repetição de markup.
const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    Icon: FacebookLogoIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    Icon: InstagramLogoIcon,
  },
  {
    name: "Twitch",
    href: "https://www.twitch.tv/",
    Icon: TwitchLogoIcon,
  },
];

export function Footer() {
  return (
    <footer
      className="bg-red-500 text-white pt-16 pb-4 px-4"
      aria-labelledby="footer-title"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border-t pt-8">
        <div className="space-y-4">
          <h2 id="footer-title" className="font-bold text-2xl">
            Pet Shop
          </h2>
          <p className="text-gray-300">
            Seu amigo de quatro patas merece o melhor!
          </p>
          {/* CTA principal de contato rápido via WhatsApp. */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 font-bold w-fit py-2 px-4 rounded-lg transition hover:bg-green-400 hover:-translate-y-0.5"
            aria-label="Falar com a Pet Shop via WhatsApp"
          >
            <WhatsappLogoIcon className="w-6 h-6 " /> Contato via WhatsApp
          </a>
        </div>
        <div className="space-y-4">
          <h2 className="font-bold text-2xl">Endereço</h2>
          <address className="not-italic space-y-1 text-gray-300">
            <p>Rua dos Animais, 123</p>
            <p>Cidade Pet</p>
            <p>
              Telefone: <a href="tel:+551112345678">(11) 1234-5678</a>
            </p>
            <p>
              Email: <a href="mailto:contato@petdev.com">contato@petdev.com</a>
            </p>
          </address>
        </div>
        <div className="space-y-4">
          <h2 className="font-bold text-2xl">Redes Sociais</h2>
          <ul className="flex items-center gap-4">
            {/* Cada item usa ícone + acessibilidade para navegação por leitor de tela. */}
            {socialLinks.map(({ name, href, Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir ${name}`}
                  className="inline-flex items-center justify-center rounded-full p-2 transition hover:bg-white/15 hover:-translate-y-0.5"
                >
                  <Icon className="w-6 h-6" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-gray-300 text-center mt-6">
        &copy; {new Date().getFullYear()} PetDev. Todos os direitos reservados.
      </p>
    </footer>
  );
}
