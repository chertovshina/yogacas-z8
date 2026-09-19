import articlesData from "@/data/articles.json"
import imagesData from "@/data/source-assets.json"
import sourceData from "@/data/original-text.json"

export type Article = {
  slug: string
  path: string
  category: string
  cardTitle: string
  date: string
  cardDate?: string
  readTime: string
  excerpt: string
  title: string
  intro: string
  image: string
  imageAlt: string
  audio: string | null
  body: string
  headings: { label: string; id: string }[]
}

export const articles = articlesData as Article[]

const images = imagesData as Record<string, { local?: string }>
const source = sourceData as Record<string, string[]>

export const socials = {
  instagram: "https://instagram.com/spine_yoga",
  facebook: "https://facebook.com/groups/602767447026998",
}

export const asset = (key: string): string =>
  Object.entries(images).find(([url, info]) => url.includes(key) && info.local)?.[1].local ?? ""

export const after = (page: string, label: string): string =>
  source[page][source[page].indexOf(label) + 1]

export const paragraphAfter = (page: string, match: string): string =>
  source[page].find((p) => p.startsWith(match)) ?? ""

export const homeIntro = after("home", "Spine-friendly Yoga")
export const homeBio = after("home", "Guiding You on Your Journey")
export const aboutIntro = after("about", "Hi, I am Anandi")
export const philosophy = after("about", "My Philosophy").replaceAll(" - ", "\n— ")
