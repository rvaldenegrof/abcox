export const brands = [
  { name: "LG", slug: "lg" },
  { name: "Samsung", slug: "samsung" },
  { name: "Whirlpool", slug: "whirlpool" },
  { name: "Mademsa", slug: "mademsa" },
  { name: "Fensa", slug: "fensa" },
  { name: "Bosch", slug: "bosch" },
  { name: "Electrolux", slug: "electrolux" },
  { name: "Mabe", slug: "mabe" },
  { name: "Sindelen", slug: "sindelen" },
  { name: "Daewoo", slug: "daewoo" },
] as const

export type Brand = (typeof brands)[number]
