import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="px-6 py-24 md:px-16 md:py-28">
      <Reveal delay={0}>
        <div className="mb-16 md:mb-20">
          <p className="mb-6 text-sm tracking-[0.35em] text-slate-500">
            ABOUT
          </p>

          <h2 className="max-w-5xl text-6xl font-bold tracking-tight md:text-8xl">
            Engineer
            <br />
            Mindset.
          </h2>
        </div>
      </Reveal>

      <Reveal delay={150}>
        <div className="grid gap-16 border-t border-slate-200 pt-12 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="max-w-xl text-2xl leading-relaxed md:text-3xl">
              I&apos;m an AI/ML engineer interested in building intelligent
              systems that are practical, reliable, and useful beyond the
              prototype.
            </p>
          </div>

          <div className="space-y-8 text-lg leading-8 text-slate-600">
            <p>
              My work focuses primarily on LLM and GenAI systems, including
              RAG, evaluation, fine-tuning, and AI applications.
            </p>

            <p>
              I also work across machine learning, computer vision, and
              backend engineering, with an emphasis on turning models into
              usable software systems.
            </p>

            <p>
              I like understanding the problem first, working within its
              constraints, and building the simplest system that solves it
              well.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}