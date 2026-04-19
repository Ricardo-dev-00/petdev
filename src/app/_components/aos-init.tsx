"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Componente de efeito colateral: inicializa animações AOS no cliente.
export function AosInit() {
  useEffect(() => {
    AOS.init({
      // Tempo padrão das animações em milissegundos.
      duration: 800,
      // Executa a animação apenas na primeira entrada na viewport.
      once: true,
    });
  }, []);

  // Não renderiza UI; apenas configura a lib após o mount.
  return null;
}
