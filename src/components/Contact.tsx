import { contact } from '../content'

export default function Contact() {
  return (
    <section id="contact" className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="bg-white rounded-3xl px-8 py-16 text-center max-w-3xl mx-auto shadow-sm">
          <h2 className="font-serif text-4xl mb-4">{contact.heading}</h2>
          <p className="text-primary/70 mb-8 max-w-lg mx-auto">{contact.paragraph}</p>
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center rounded-full bg-primary px-8 py-4 text-white font-semibold hover:opacity-90 transition-opacity"
          >
            {contact.email}
          </a>
          <div className="flex justify-center gap-8 mt-8">
            {contact.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold tracking-widest uppercase text-primary/70 hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
