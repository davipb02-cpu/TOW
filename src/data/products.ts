import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "velvet-armchair",
    name: "Velvet Armchair",
    description: "Plush comfort, timeless design",
    fullDescription:
      "A statement piece designed for ultimate comfort. The plush velvet upholstery contrasts beautifully with the stark oak frame, creating a perfect balance between softness and structure.",
    price: 850,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDp4e0y10sXWIDefyMrdIolfP9n8bgaoDXonBLfk8_uKHgMGNAto8g026m_R8Seun41yI3yxyjZcsptoaaIQU8yJRUb_aJo3VMC5GHvRNmQFK9wW4YRrkqyYiA1_LHwUhCROpW36DwfEjosQtJr2ArAnY6iBQCfcZyaBOInFgGxFD_ZDbx3Aigfob12VO1NfGg91f-bBwRorPefiXJ2Q5oigDUYJ0pMGBsJ5DRuOOapKUCMl14cWjYgd4efNqSghrOjZjNgkEueMwfN",
    detailImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDp4e0y10sXWIDefyMrdIolfP9n8bgaoDXonBLfk8_uKHgMGNAto8g026m_R8Seun41yI3yxyjZcsptoaaIQU8yJRUb_aJo3VMC5GHvRNmQFK9wW4YRrkqyYiA1_LHwUhCROpW36DwfEjosQtJr2ArAnY6iBQCfcZyaBOInFgGxFD_ZDbx3Aigfob12VO1NfGg91f-bBwRorPefiXJ2Q5oigDUYJ0pMGBsJ5DRuOOapKUCMl14cWjYgd4efNqSghrOjZjNgkEueMwfN",
    specs: [
      { label: "Material", value: "Velvet & Oak" },
      { label: "Dimensions", value: "75 x 80 x 85 cm" },
      { label: "Weight", value: "18 kg" },
      { label: "Colors", value: "Charcoal, Navy, Forest" },
    ],
    tag: "New",
  },
  {
    id: "industrial-lamp",
    name: "Industrial Lamp",
    description: "Raw aesthetics, warm light",
    fullDescription:
      "Inspired by mid-century industrial design, this lamp combines raw steel with modern LED technology. The adjustable arm allows precise light positioning while the matte finish adds a touch of brutalist elegance.",
    price: 320,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7FfM2RFikc42SeMoSknHG1ZOnVquFr1rp7m1-MpdDeO-fOelhOX5xym4mMvO2-Ilo00DPZzxXcM9XkByu7znNDWeR1s0NQTWBKdIeXpYBSs37rrAdtLaVyl7O_rTuC_vQDWJWPEMdoT3W3Ul77DzrzkWYfntQLN2vaifE7P8qcgfc9T1RjFTUXXAm7Nj4uUsqM1566WDY76GVzq_SHX1OKjxNoS6IoY3E78BbLwexpFzd0o-SWHXLaqxhbgmSnLk1DSvL4J7_55Ie",
    detailImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7FfM2RFikc42SeMoSknHG1ZOnVquFr1rp7m1-MpdDeO-fOelhOX5xym4mMvO2-Ilo00DPZzxXcM9XkByu7znNDWeR1s0NQTWBKdIeXpYBSs37rrAdtLaVyl7O_rTuC_vQDWJWPEMdoT3W3Ul77DzrzkWYfntQLN2vaifE7P8qcgfc9T1RjFTUXXAm7Nj4uUsqM1566WDY76GVzq_SHX1OKjxNoS6IoY3E78BbLwexpFzd0o-SWHXLaqxhbgmSnLk1DSvL4J7_55Ie",
    specs: [
      { label: "Height", value: "45 cm" },
      { label: "Material", value: "Steel" },
      { label: "Bulb", value: "E27 LED" },
      { label: "Cord Length", value: "2 m" },
    ],
    tag: "Bestseller",
  },
  {
    id: "ceramic-set",
    name: "Ceramic Set",
    description: "Hand-thrown artisan pieces",
    fullDescription:
      "Each piece in this collection is hand-thrown by master ceramicists in Portugal. The matte glaze and organic shapes celebrate the beauty of imperfection, making every set truly unique.",
    price: 150,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC_O-C5dw7KCkMcC3IT-6zBWVBd4h2odsPmvSDFNqZfGo4U8743_nsCbX2J25WOE7mRCgpXb1qswRxtnNMa0mf1-cVlZsKAFyWtz4OiU-r2Tq4KD5hHtlqm2jfwKF7cgtbMXykxn51KeNV0PvqEmJe67ei9LrUhbP1rGpBQlRu8kHR8mskEvp6SnFsrdX4tV6mjXtgllUtG31_VpoqLC2885U83cvHSfQ7CkVc1mtNXyJ0Gnh_Gml2wRMD59Ts8nAqrZU1EONXtwdxh",
    detailImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC_O-C5dw7KCkMcC3IT-6zBWVBd4h2odsPmvSDFNqZfGo4U8743_nsCbX2J25WOE7mRCgpXb1qswRxtnNMa0mf1-cVlZsKAFyWtz4OiU-r2Tq4KD5hHtlqm2jfwKF7cgtbMXykxn51KeNV0PvqEmJe67ei9LrUhbP1rGpBQlRu8kHR8mskEvp6SnFsrdX4tV6mjXtgllUtG31_VpoqLC2885U83cvHSfQ7CkVc1mtNXyJ0Gnh_Gml2wRMD59Ts8nAqrZU1EONXtwdxh",
    specs: [
      { label: "Pieces", value: "6 items" },
      { label: "Material", value: "Stoneware" },
      { label: "Finish", value: "Matte glaze" },
      { label: "Care", value: "Dishwasher safe" },
    ],
  },
  {
    id: "modular-shelving",
    name: "Modular Shelving",
    description: "Infinite configurations",
    fullDescription:
      "A fully customizable shelving system built with powder-coated aluminum. Mix and match modules to create the perfect storage solution. Designed to evolve with your needs.",
    price: 1200,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDD2UsSAQfEHyXbsR-v8IpXElSXTLcP3d2o9C3U9rOC9V2o7tE3OmNmUkemjKMZdDJ37fFT4eJuQOHlGxYe7jpupFQaQWCW17_XSDf6uZvIqbiPown2oBeTbCAfLzHyKDP8lW5u-FSQbu4ESxntrB2Lw_LrBQc1FMoTzJux-0y7zkmLg_COatuXVWPCV4HY9Magree6GzERTudc3KPgAgpI7Y5dNq-H_7-ssZEGcWUNVxKciR0YN-h44Xe9ZQcocTi6lYiE9qOLTwVp",
    detailImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDD2UsSAQfEHyXbsR-v8IpXElSXTLcP3d2o9C3U9rOC9V2o7tE3OmNmUkemjKMZdDJ37fFT4eJuQOHlGxYe7jpupFQaQWCW17_XSDf6uZvIqbiPown2oBeTbCAfLzHyKDP8lW5u-FSQbu4ESxntrB2Lw_LrBQc1FMoTzJux-0y7zkmLg_COatuXVWPCV4HY9Magree6GzERTudc3KPgAgpI7Y5dNq-H_7-ssZEGcWUNVxKciR0YN-h44Xe9ZQcocTi6lYiE9qOLTwVp",
    specs: [
      { label: "Material", value: "Aluminum" },
      { label: "Finish", value: "Powder-coated" },
      { label: "Load Capacity", value: "30 kg/shelf" },
      { label: "Colors", value: "Black, White, Grey" },
    ],
  },
  {
    id: "obsidian-lounge",
    name: "Obsidian Lounge",
    description: "Statement luxury seating",
    fullDescription:
      "The flagship piece of our collection. Premium leather wraps around a sculptural frame, creating a throne-like experience. Perfect for spaces that demand attention.",
    price: 2400,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAxEJCmb_-3HhWzTjYFIJa6Z_oJlpiUvAf_FNvYqVz1i_Om7YwXRdAhulf2JmX9QQATucUJB-PflrFKzQ19w4CUypd3unqDIeZJJpgPexAooYVDUJsokjTP8Pn371PI13niL-8jSap0wWF_Eoa8dechLOKO2m8SrIgFarnK64Ay4L1n4RbaBVvqYe4pJJ-cAjEEHCx10NJb-WjoyJuNyYTlEwjq5R_7UX0cfs9vXz9_6CM_iKjkdUFq2E6sEngX3UmVfPA7kd3cLfub",
    detailImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAxEJCmb_-3HhWzTjYFIJa6Z_oJlpiUvAf_FNvYqVz1i_Om7YwXRdAhulf2JmX9QQATucUJB-PflrFKzQ19w4CUypd3unqDIeZJJpgPexAooYVDUJsokjTP8Pn371PI13niL-8jSap0wWF_Eoa8dechLOKO2m8SrIgFarnK64Ay4L1n4RbaBVvqYe4pJJ-cAjEEHCx10NJb-WjoyJuNyYTlEwjq5R_7UX0cfs9vXz9_6CM_iKjkdUFq2E6sEngX3UmVfPA7kd3cLfub",
    specs: [
      { label: "Material", value: "Full-grain leather" },
      { label: "Frame", value: "Solid walnut" },
      { label: "Dimensions", value: "90 x 95 x 80 cm" },
      { label: "Weight", value: "32 kg" },
    ],
    tag: "Featured",
  },
  {
    id: "brass-mirror",
    name: "Brass Mirror",
    description: "Sculptural reflection",
    fullDescription:
      "An oversized mirror framed in unpolished brass that develops a beautiful patina over time. The asymmetrical shape adds visual interest while the scale creates a sense of expansiveness.",
    price: 680,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDbghDOtPySGNkOARzXOj6ao3wV0uA88UdlYwVjR-GWWqEZkz-bjHQuzx9Obga9rd_lakt47Ot3_8vPLFIoIj8fH508yEzHQpD2MiB9i0FcxpEAaewvLsZTnJ5FJ2X8XANslYs7XIRBZBB1gTYjnAKjKuuVkHxsPE38mmQtJIA-b29iwbP7ks3c1N8VdYKfTSBqdDaNZ_SM_9PwOG99_y7CNGWHM0qwa36zV4stA3pujHVnWGm3ibaOSs6cvFxkloX5Z-QmU_-HrRDM",
    detailImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDbghDOtPySGNkOARzXOj6ao3wV0uA88UdlYwVjR-GWWqEZkz-bjHQuzx9Obga9rd_lakt47Ot3_8vPLFIoIj8fH508yEzHQpD2MiB9i0FcxpEAaewvLsZTnJ5FJ2X8XANslYs7XIRBZBB1gTYjnAKjKuuVkHxsPE38mmQtJIA-b29iwbP7ks3c1N8VdYKfTSBqdDaNZ_SM_9PwOG99_y7CNGWHM0qwa36zV4stA3pujHVnWGm3ibaOSs6cvFxkloX5Z-QmU_-HrRDM",
    specs: [
      { label: "Frame", value: "Unpolished brass" },
      { label: "Dimensions", value: "120 x 80 cm" },
      { label: "Weight", value: "12 kg" },
      { label: "Mounting", value: "Wall-mounted" },
    ],
  },
];
