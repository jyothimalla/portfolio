import { contact } from '../content'

export default function Contact() {
  return (
    <section id="contact" className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-center text-sm font-semibold tracking-widest uppercase text-primary/50 mb-2">Get in Touch</p>
        <h2 className="font-serif text-4xl text-center mb-12">{contact.heading}</h2>
        <div className="grid md:grid-cols-[300px_1fr] gap-8 items-start">

          {/* Left — email card */}
          <div className="border border-black/10 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm bg-white">
            <div className="mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75" />
              </svg>
            </div>
            <p className="font-semibold text-primary mb-1">Email</p>
            <p className="text-sm text-primary/70 mb-3 break-all">{contact.email}</p>
            <a
              href={`mailto:${contact.email}`}
              className="text-sm font-medium text-primary hover:text-accent transition-colors"
            >
              Send a message
            </a>
          </div>

          {/* Right — contact form */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              window.location.href = `mailto:${contact.email}?subject=Message from Portfolio&body=${encodeURIComponent(
                (e.currentTarget.elements.namedItem('message') as HTMLTextAreaElement)?.value ?? ''
              )}`
            }}
            className="flex flex-col gap-4"
          >
            <input
              name="name"
              type="text"
              placeholder="Your full name"
              required
              className="w-full border border-black/15 rounded-xl px-5 py-4 text-sm text-primary placeholder:text-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
            />
            <input
              name="email"
              type="email"
              placeholder="Your email"
              required
              className="w-full border border-black/15 rounded-xl px-5 py-4 text-sm text-primary placeholder:text-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows={7}
              required
              className="w-full border border-black/15 rounded-xl px-5 py-4 text-sm text-primary placeholder:text-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white resize-none"
            />
            <div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 border border-black/15 rounded-xl px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-colors bg-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                </svg>
                Send Message
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  )
}
