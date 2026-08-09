import { footer } from '../content'

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-black/10">
      <div className="mx-auto max-w-6xl px-6 py-8 text-center text-xs tracking-widest text-primary/60">
        {footer.text}
      </div>
    </footer>
  )
}
