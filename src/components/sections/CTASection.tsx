"use client";

import { useState } from "react";

export default function CTASection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Protótipo - sem lógica de backend
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section id="contact" className="py-32 px-6 bg-surface-dark relative overflow-hidden">
      {/* Abstract Background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent opacity-30 skew-x-12 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-primary/5 to-transparent opacity-20 -skew-x-12 pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="font-display font-black text-5xl md:text-7xl text-white mb-6 uppercase tracking-tighter leading-[0.9]">
          PERMANEÇA NO
          <br />
          <span className="text-gray-400">CAMINHO</span>
        </h2>

        <p className="text-gray-400 text-lg md:text-xl mb-12 font-light max-w-xl mx-auto">
          Cadastre-se para garantir prioridade nas novas coleções e descobrir os bastidores de cada mensagem que criamos.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Coloque aqui seu email"
            className="flex-1 bg-background-dark border border-white/10 text-white px-6 py-4 rounded-lg focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-gray-500"
            required
          />
          <button
            type="submit"
            className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-lg transition-all flex items-center justify-center gap-2 group"
          >
            Inscrever
            <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </button>
        </form>

        <p className="text-gray-600 text-sm mt-6">
          Respeitamos sua privacidade. Desinscreva a qualquer momento.
        </p>
      </div>
    </section>
  );
}
