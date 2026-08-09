import { about } from '../content'

export default function About() {
  return (
    <section id="about" className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-[320px_1fr] gap-14 items-start">
        <div className="w-64 h-64 md:w-full md:h-auto md:aspect-square rounded-full overflow-hidden bg-white/60 border border-black/5 mx-auto md:mx-0">
          <img
            src={about.photo}
            alt="Portrait photo"
            className="w-full h-full object-cover"
            onError={(e) => {
              // Falls back to a soft placeholder if no photo has been added yet.
              ;(e.target as HTMLImageElement).style.display = 'none'
            }}
          />
        </div>
        <div>
          <h2 className="font-serif text-3xl mb-6">{about.heading}</h2>
          <div className="space-y-4 text-primary/80 leading-relaxed mb-8">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {about.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-primary border border-black/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
