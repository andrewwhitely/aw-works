export type CategoryKey = string

export interface Project {
  slug: string
  title: string
  category: CategoryKey | CategoryKey[]
  year: number
  description: string
  featured?: boolean
  tags?: string[]
  links?: { label: string; href: string }[]
  about?: string[]
  features?: string[]
  planned?: string[]
  notes?: { label: string; value: string; href?: string }[]
  services?: string[]
  privacy?: { label?: string; href: string }[]
}

export function projectMatchesCategory(project: Project, key: CategoryKey): boolean {
  if (key === 'all') return true
  return Array.isArray(project.category) ? project.category.includes(key) : project.category === key
}
