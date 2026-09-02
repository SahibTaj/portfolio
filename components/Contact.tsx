export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 sm:py-32 md:px-16">
      <div className="border-t border-slate-200 pt-16 sm:pt-20">
        <p className="mb-6 text-xs tracking-[0.35em] text-slate-500 sm:text-sm">
          CONTACT
        </p>

        <h2 className="max-w-6xl text-[clamp(3.5rem,9vw,8rem)] font-bold leading-[0.9] tracking-[-0.055em]">
          Let&apos;s build
          <br />
          something useful.
        </h2>

        <div className="mt-12 flex flex-wrap gap-4 sm:mt-16">
          <a
            href="mailto:sahibtajsingh1@gmail.com"
            className="group inline-flex items-center rounded-full bg-black px-7 py-4 text-sm font-medium text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-slate-800 hover:shadow-[0_12px_30px_rgba(0,0,0,0.15)]"
          >
            Email Me
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>

          <a
            href="https://github.com/SahibTaj"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center rounded-full border border-black/20 px-7 py-4 text-sm font-medium transition-all duration-300 ease-out hover:-translate-y-1 hover:border-black hover:bg-black hover:text-white hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
          >
            GitHub
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/sahib-taj-singh-123b37216/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center rounded-full border border-black/20 px-7 py-4 text-sm font-medium transition-all duration-300 ease-out hover:-translate-y-1 hover:border-black hover:bg-black hover:text-white hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
          >
            LinkedIn
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>

        <p className="mt-8 text-sm text-slate-500">
          sahibtajsingh1@gmail.com
        </p>
      </div>

      <div className="mt-24 flex flex-col gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 sm:mt-32 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Sahib Taj Singh</p>
        <p>AI / ML Engineer</p>
      </div>
    </section>
  );
}