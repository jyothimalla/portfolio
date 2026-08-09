import { hero } from '../content'

export default function Hero() {
  return (
    <section className="bg-primary text-cream">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="max-w-3xl">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">{hero.eyebrow}</p>
          <h1
            className="font-serif text-5xl sm:text-6xl leading-[1.15] mb-8"
            dangerouslySetInnerHTML={{
              __html: hero.headline.replace(/<em>/g, '<em class="italic">'),
            }}
          />
          <p className="text-cream/80 text-lg leading-relaxed mb-10 max-w-xl">{hero.paragraph}</p>
          <div className="flex flex-wrap gap-4">
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center rounded-full border border-cream/30 px-6 py-3 text-sm font-semibold text-cream hover:bg-white/5 transition-colors"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
