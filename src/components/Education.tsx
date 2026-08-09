import { education } from '../content'

export default function Education() {
  return (
    <section id="education" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-serif text-3xl mb-6">{education.heading}</h2>
        <div className="border-t border-black/10">
          {education.items.map((item) => (
            <div key={item.degree} className="flex flex-col sm:flex-row gap-4 sm:items-center py-6 border-b border-black/10 bg-cream/60 px-6 -mx-6 sm:mx-0 sm:px-6 sm:rounded-lg sm:my-2">
              <span className="text-accent font-semibold text-sm w-16 shrink-0">{item.badge}</span>
              <div>
                <h3 className="font-serif text-xl">{item.degree}</h3>
                <p className="text-primary/70">{item.school}</p>
                <p className="text-primary/50 text-sm">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
