import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="px-6 py-20 md:px-16 md:py-24">
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
              I&apos;m a machine learning engineer focused on building
              practical AI systems — particularly LLM applications, RAG,
              agentic AI, and production-oriented machine learning systems.
            </p>
          </div>

          <div className="space-y-8 text-lg leading-8 text-slate-600">
            <p>
              My work spans LLM and GenAI systems, including retrieval,
              evaluation, fine-tuning, and AI agents, with an emphasis on
              building systems that are reliable beyond the initial prototype.
            </p>

            <p>
              I also work across machine learning, computer vision, backend
              engineering, and MLOps, focusing on the engineering problems
              involved in turning models into usable software systems.
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