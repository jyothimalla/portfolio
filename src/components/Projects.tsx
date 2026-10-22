import { projects } from '../content'

export default function Projects() {
  return (
    <section id="projects" className="bg-primary text-cream">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-serif text-3xl mb-8">{projects.heading}</h2>
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {projects.items.map((p) => (
            <article key={p.title} className="bg-primaryLight rounded-xl p-8">
              <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">{p.kind}</p>
              <h3 className="font-serif text-2xl mb-3">{p.title}</h3>
              <p className="text-cream/75 leading-relaxed mb-5">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              {p.link && (
                <a
                  href={p.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent text-sm font-semibold mt-5 inline-block hover:underline"
                >
                  {p.link.label} →
                </a>
              )}
            </article>
          ))}
        </div>

        <h2 id="publications" className="font-serif text-3xl mb-8 scroll-mt-20">
          {projects.publicationsHeading}
        </h2>
        <div className="space-y-4">
          {projects.publications.map((pub, i) => (
            <div key={i} className="bg-primaryLight rounded-xl p-8">
              <p className="text-cream/90">
                <span className="font-semibold">{pub.citation}</span>{' '}
                <span className="italic text-cream/70">{pub.journal}</span>
              </p>
              {pub.link && (
                <a href={pub.link.href} className="text-accent text-sm mt-2 inline-block hover:underline">
                  {pub.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
