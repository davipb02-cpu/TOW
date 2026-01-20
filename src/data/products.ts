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
    id: "camisas-classicas",
    name: "Camisas Clássicas",
    description: "Elegância em cada corte",
    fullDescription:
      "Peças atemporais com corte contemporâneo e acabamento artesanal. Para quem entende que o clássico nunca sai de moda. Versatilidade para todas as ocasiões.",
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
    id: "camisa-branca-basica",
    name: "Camisa Branca Básica",
    description: "Pureza em cada detalhe",
    fullDescription:
      "O branco que ilumina sem ofuscar. Uma peça fundamental que combina com tudo. Tecido leve com toque macio, perfeita para o dia a dia com propósito.",
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
    id: "camisa-azul-natural",
    name: "Camisa Azul Natural",
    description: "A cor da serenidade",
    fullDescription:
      "Azul que remete à profundidade e à calma. Uma escolha para quem caminha com serenidade. Tingimento natural que valoriza a autenticidade do tecido.",
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
    id: "camisas-social-variedade",
    name: "Camisas Social Variedade",
    description: "Sofisticação para cada momento",
    fullDescription:
      "Linha completa de camisas sociais em diferentes cores e estilos. Acabamento premium e durabilidade excepcional. Para quem lidera com elegância e propósito.",
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
