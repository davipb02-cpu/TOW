const highlights = [
  {
    id: 1,
    title: "The Kitchen Series",
    description: "Matte black finishes and smart integration.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADpWCwXnmS-LwCRJknGPB0n2Rfp7v7fY53hq5T1grC3odhJ6VghHcNt56QhXc8yoe1j5bx4a_nkQH1s6fkVHmezqTShjJliCyw1bwDANMmhw-IKbKzNgxQltiJdz6rnGVUsMQL-uxeHuhh3JCLdnD3iYyjlNpEuxMqKe1ulp6uv8lSnlKHxI5__h4eSZrmfZbDjJ2p7cSrn3BcOnN3n6TfVf5mLibQHlbWzJEEggNTxjYiglpvBm2_yiDjwvPlvMoWepX4HPpdgacb",
    tag: "Trending",
  },
  {
    id: 2,
    title: "Textured Living",
    description: "Soft fabrics meeting hard edges.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBrCH5vcToBYFTb94-_XVoqW8vQmGHO0_xPrThou22K_R174O_0yi0D2ry0VJij4GZDb9Jx0g_T1GSVZ5PmmfTj7h9n83ticvwB0V4P_d73kq6GHf5I4HI7T0WFJc_HlXC-QOaa_N1Qy2IvwZcqARz_a6lpzy_wHHy375znd0DmMu0HPsF6Gzc5gdFnUbRRzHITwChVP4LMZCwQ1wPDk-xLbRHDaHPLAi-s6Bi1PN3fKDw0yYlKMLPg-xmVe-ozAVD8WpRu_V6SwtnI",
    tag: null,
  },
  {
    id: 3,
    title: "Workspace Zen",
    description: "Productivity through reduction.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCK-QbKOm7Po8xVBvS6Nv7ITm3CPSwpeuAFxsZ54av-jXAZPiNJ74IVTwAA_v5AZ4rhs_Hn1jPR2LC6JdXlDpT0FbO-fk0bMwn2vYYgzL_Uedo_4TttWUN-hVRUcvv5dbUzx2SGX_TfziCXY0J_5qCdld5YdMibA_60iMQuu0pOp7BkDzEEyP46JqkJrvKcIN4fkv9Z0QVUGBt1ebisYrIzo50tT9NU5rkgYS3KlgILcdqCM8EoCTv470BxEIKdiQxAB7wQZ0fDg1vO",
    tag: null,
  },
  {
    id: 4,
    title: "Stone & Iron",
    description: "Raw materials in their purest form.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDbghDOtPySGNkOARzXOj6ao3wV0uA88UdlYwVjR-GWWqEZkz-bjHQuzx9Obga9rd_lakt47Ot3_8vPLFIoIj8fH508yEzHQpD2MiB9i0FcxpEAaewvLsZTnJ5FJ2X8XANslYs7XIRBZBB1gTYjnAKjKuuVkHxsPE38mmQtJIA-b29iwbP7ks3c1N8VdYKfTSBqdDaNZ_SM_9PwOG99_y7CNGWHM0qwa36zV4stA3pujHVnWGm3ibaOSs6cvFxkloX5Z-QmU_-HrRDM",
    tag: null,
  },
];

export default function HighlightsSection() {
  return (
    <section className="py-20 bg-surface-dark border-y border-white/5">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold uppercase tracking-tight">Editor&apos;s Picks</h2>
          <div className="flex gap-4">
            <button className="size-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button className="size-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-8 [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
          {highlights.map((item) => (
            <div
              key={item.id}
              className="snap-center shrink-0 w-[300px] md:w-[400px] flex flex-col gap-4 group cursor-pointer"
            >
              <div
                className="w-full aspect-video bg-cover bg-center rounded-lg overflow-hidden relative"
                style={{ backgroundImage: `url("${item.image}")` }}
              >
                <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors duration-500"></div>
                {item.tag && (
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-primary text-white text-[10px] font-bold uppercase px-2 py-1 rounded">
                      {item.tag}
                    </span>
                  </div>
                )}
              </div>
              <div>
                <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-sm mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
