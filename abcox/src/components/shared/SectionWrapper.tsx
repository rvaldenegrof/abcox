import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className="container mx-auto px-4 md:px-6">{children}</div>
    </section>
  )
}

interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  className?: string
}

export function SectionHeader({ label, title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 text-center", className)}>
      {label && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
          {label}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-slate-500">{description}</p>
      )}
    </div>
  )
}
