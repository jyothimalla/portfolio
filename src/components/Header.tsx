import { site } from '../content'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-primary text-cream border-b border-white/10">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-serif text-lg">
          {site.name}
        </a>
        <nav className="hidden sm:flex items-center gap-8 text-sm">
          {site.nav.map((item) => (
            <a key={item.label} href={item.href} className="text-cream/90 hover:text-accent transition-colors">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
