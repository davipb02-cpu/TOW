import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "camisa-preta-essencial",
    name: "Camisa Preta Essencial",
    description: "Simplicidade que transcende",
    fullDescription:
      "A base de qualquer guarda-roupa com propósito. Algodão premium com toque macio e caimento impecável. Uma peça que fala por si, sem excessos.",
    price: 289,
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80",
    detailImage:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=1200&q=80",
    specs: [
      { label: "Composição", value: "100% Algodão Pima" },
      { label: "Tamanhos", value: "P, M, G, GG" },
      { label: "Cuidados", value: "Lavar a 30°C" },
      { label: "Origem", value: "Fabricação Nacional" },
    ],
    tag: "Essencial",
  },
  {
    id: "camisa-branca-classica",
    name: "Camisa Branca Clássica",
    description: "Pureza em cada detalhe",
    fullDescription:
      "O branco que ilumina sem ofuscar. Corte contemporâneo com acabamento artesanal. Para quem entende que a luz verdadeira vem de dentro.",
    price: 289,
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80",
    detailImage:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=1200&q=80",
    specs: [
      { label: "Composição", value: "100% Algodão Egípcio" },
      { label: "Tamanhos", value: "P, M, G, GG" },
      { label: "Cuidados", value: "Lavar a 30°C" },
      { label: "Origem", value: "Fabricação Nacional" },
    ],
    tag: "Bestseller",
  },
  {
    id: "camisa-cinza-grafite",
    name: "Camisa Cinza Grafite",
    description: "Equilíbrio entre mundos",
    fullDescription:
      "O cinza que une o claro e o escuro. Versatilidade com personalidade. Uma peça que transita entre momentos sem perder a essência.",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=800&q=80",
    detailImage:
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=1200&q=80",
    specs: [
      { label: "Composição", value: "98% Algodão, 2% Elastano" },
      { label: "Tamanhos", value: "P, M, G, GG" },
      { label: "Cuidados", value: "Lavar a 30°C" },
      { label: "Origem", value: "Fabricação Nacional" },
    ],
  },
  {
    id: "camisa-bege-natural",
    name: "Camisa Bege Natural",
    description: "Tons da terra prometida",
    fullDescription:
      "Inspirada nas cores da natureza, tingida com pigmentos naturais. Conforto que abraça e estilo que permanece. Para os que caminham com os pés no chão.",
    price: 319,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80",
    detailImage:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=1200&q=80",
    specs: [
      { label: "Composição", value: "100% Linho" },
      { label: "Tamanhos", value: "P, M, G, GG" },
      { label: "Cuidados", value: "Lavar a frio" },
      { label: "Origem", value: "Fabricação Nacional" },
    ],
    tag: "Novo",
  },
  {
    id: "camisa-azul-marinho",
    name: "Camisa Azul Profundo",
    description: "A cor da confiança",
    fullDescription:
      "Azul que remete à profundidade e à calma. Uma escolha para quem lidera com serenidade. Acabamento premium e durabilidade excepcional.",
    price: 309,
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&q=80",
    detailImage:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=1200&q=80",
    specs: [
      { label: "Composição", value: "100% Algodão Pima" },
      { label: "Tamanhos", value: "P, M, G, GG" },
      { label: "Cuidados", value: "Lavar a 30°C" },
      { label: "Origem", value: "Fabricação Nacional" },
    ],
  },
  {
    id: "camisa-off-white",
    name: "Camisa Off-White",
    description: "Suavidade atemporal",
    fullDescription:
      "Um branco suavizado que traz aconchego visual. Perfeita para todas as estações e ocasiões. Elegância discreta para quem não precisa provar nada.",
    price: 289,
    image:
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&q=80",
    detailImage:
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=1200&q=80",
    specs: [
      { label: "Composição", value: "100% Algodão Orgânico" },
      { label: "Tamanhos", value: "P, M, G, GG" },
      { label: "Cuidados", value: "Lavar a 30°C" },
      { label: "Origem", value: "Fabricação Nacional" },
    ],
  },
];
