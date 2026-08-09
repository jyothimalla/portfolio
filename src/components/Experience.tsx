import { experience } from '../content'

export default function Experience() {
  return (
    <section id="experience" className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-serif text-3xl mb-8">{experience.heading}</h2>
        <div className="space-y-6">
          {experience.items.map((job) => (
            <article key={job.title + job.period} className="bg-white rounded-xl p-8 shadow-sm">
              <p className="text-primary/50 text-xs font-semibold tracking-widest uppercase mb-2">{job.period}</p>
              <h3 className="font-serif text-2xl mb-1">{job.title}</h3>
              <p className="text-primary/70 mb-4">{job.org}</p>
              <ul className="list-disc list-outside pl-5 space-y-1.5 text-primary/80 mb-5">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-primary/80">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
