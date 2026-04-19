# PetDev

Landing page moderna para pet shop, desenvolvida com foco em performance, experiência do usuário e boas práticas de front-end com React e Next.js.

## Demonstração

- Deploy no GitHub Pages: https://ricardo-dev-00.github.io/petdev/

## Preview da Aplicação

![Preview do projeto PetDev](https://github.com/Ricardo-dev-00/petdev/blob/master/public/petdev.png?raw=true)

## Sobre o Projeto

O PetDev foi criado para simular uma página institucional de um pet shop com comunicação clara, visual forte e navegação objetiva. A proposta é apresentar serviços, diferenciais, marcas parceiras, feedbacks e canais de contato em uma experiência fluida, responsiva e agradável em desktop e mobile.

Além do resultado visual, o projeto demonstra domínio de estrutura de componentes, organização de código e deploy automatizado com GitHub Actions.

## Tecnologias Aplicadas e Como Foram Utilizadas

- Next.js (App Router)
  - Estrutura principal da aplicação com roteamento moderno e renderização otimizada.
  - Organização por seções/componentes reutilizáveis.

- React + TypeScript
  - Construção dos componentes com tipagem estática para maior confiabilidade e manutenção.
  - Melhor legibilidade e redução de erros em tempo de desenvolvimento.

- Tailwind CSS
  - Estilização rápida e consistente com classes utilitárias.
  - Layout responsivo e ajustes de interface com baixo acoplamento.

- next/image
  - Otimização de imagens e melhor controle de responsividade.
  - Uso adaptado para funcionar corretamente no deploy estático do GitHub Pages.

- Embla Carousel
  - Implementação dos carrosseis de serviços e feedbacks.
  - Controle de navegação com botões e comportamento responsivo.

- AOS (Animate On Scroll)
  - Aplicação de animações de entrada para enriquecer a percepção de qualidade da interface.
  - Inicialização isolada em componente cliente para compatibilidade com Next.js.

- GitHub Actions + GitHub Pages
  - Pipeline de build e deploy automatizado por workflow.
  - Publicação contínua via push para branch principal de deploy.

## Destaques Técnicos para Recrutadores

- Estrutura de componentes desacoplada e fácil de escalar.
- Atenção a acessibilidade com atributos semânticos e labels.
- Boas práticas de manutenção (tipagem, reaproveitamento, comentários úteis).
- Ajustes específicos para ambiente real de produção estática (basePath e assets no GitHub Pages).
- Evolução incremental do código com foco em qualidade e experiência.

## Estrutura de Pastas

```text
petdev/
	public/
	src/
		app/
			_components/
			globals.css
			layout.tsx
			page.tsx
```

## Como Rodar Localmente

### Pré-requisitos

- Node.js 20+
- npm

### Passo a passo

```bash
npm install
npm run dev
```

Aplicação local: http://localhost:3000

## Scripts

```bash
npm run dev    # desenvolvimento
npm run build  # build de produção
npm run start  # execução da build
```

## Deploy

O deploy está configurado com GitHub Actions para publicar no GitHub Pages:

- URL pública: https://ricardo-dev-00.github.io/petdev/

## Autor

Ricardo

- GitHub: https://github.com/Ricardo-dev-00
