import { skills } from '../content'

export default function Skills() {
  return (
    <section id="skills" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-serif text-3xl mb-10">{skills.heading}</h2>
        <div className="grid sm:grid-cols-3 gap-10">
          {skills.groups.map((group) => (
            <div key={group.heading}>
              <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-4">{group.heading}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full bg-cream px-3.5 py-1.5 text-sm font-medium text-primary/90">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
