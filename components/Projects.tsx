import Reveal from "./Reveal";

const projects = [
  {
    number: "01",
    title: "Edge AI Inference Engine",
    status: "COMPLETED",
    description:
      "A CPU-only real-time computer vision inference engine designed for low-latency edge deployment, reaching ~27 FPS using ONNX Runtime, INT8 quantization, batching, and a multi-threaded pipeline.",
    category: "COMPUTER VISION",
    stack:
      "Python · YOLOv5/v8 · OpenCV · ONNX Runtime · INT8 · Multithreading",
    href: "https://github.com/SahibTaj/Edge-AI-Real-Time-Inference-Engine-Latency-Aware-Runtime-",
  },
  {
    number: "02",
    title: "Regression-Safe RAG",
    status: "COMPLETED",
    description:
      "An evaluation and deployment-gating platform for RAG systems that measures faithfulness and answer coverage using a dual-model evaluation pipeline, reducing evaluation cost by 10–20× while blocking quality regressions.",
    category: "LLM / RAG",
    stack:
      "RAG · LLM Evaluation · ChromaDB · Groq API · Streamlit · Guardrails",
    href: "https://github.com/SahibTaj/Regression-Safe-RAG-Guardrails-Evaluation-Platform",
  },
  {
    number: "03",
    title: "KnowledgeHub AI",
    status: "IN PROGRESS",
    description:
      "An enterprise knowledge copilot focused on retrieving and working with information across internal knowledge sources using retrieval, vector search, and LLM-based generation.",
    category: "LLM / GENAI",
    stack:
      "Python · RAG · Vector Search · LLMs · Retrieval · Knowledge Systems",
    href: "https://github.com/SahibTaj/KnowledgeHub-AI",
  },
  {
    number: "04",
    title: "Domain-Specific LLM Fine-Tuning",
    status: "IN PROGRESS",
    description:
      "A fine-tuning project focused on adapting pretrained transformer models to specialized NLP tasks and domain-specific requirements.",
    category: "LLM / GENAI",
    stack:
      "Python · PyTorch · Transformers · Hugging Face · Fine-Tuning",
    href: "https://github.com/SahibTaj/sentiment-fine-tuning-",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 md:px-16 md:py-24">
      <Reveal delay={0}>
        <div className="mb-16 md:mb-20">
          <p className="mb-6 text-sm tracking-[0.35em] text-slate-500">
            SELECTED WORK
          </p>

          <h2 className="max-w-5xl text-6xl font-bold tracking-tight md:text-8xl">
            Projects
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
            Projects where machine learning models become complete
            engineering systems.
          </p>
        </div>
      </Reveal>

      <Reveal delay={150}>
        <div className="border-t border-slate-200">
          {projects.map((project) => (
            <a
              key={project.number}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-b border-slate-200 py-12 transition-all duration-300 ease-out hover:bg-black/[0.025] md:py-14"
            >
              <article className="grid gap-8 md:grid-cols-[100px_1fr_220px_40px] md:items-start">
                <p className="text-sm text-slate-400 transition-colors duration-300 group-hover:text-slate-600">
                  {project.number}
                </p>

                <div>
                  <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                    <h3 className="text-2xl font-semibold tracking-tight transition-transform duration-300 ease-out group-hover:translate-x-1 md:text-3xl">
                      {project.title}
                    </h3>

                    <span className="text-xs tracking-[0.2em] text-slate-400 transition-colors duration-300 group-hover:text-slate-600">
                      {project.status}
                    </span>
                  </div>

                  <p className="max-w-3xl text-lg leading-8 text-slate-600">
                    {project.description}
                  </p>

                  <p className="mt-6 text-sm leading-6 text-slate-400 transition-colors duration-300 group-hover:text-slate-600">
                    {project.stack}
                  </p>
                </div>

                <p className="text-sm tracking-[0.18em] text-slate-400 transition-colors duration-300 group-hover:text-black md:text-right">
                  {project.category}
                </p>

                <span className="text-xl text-slate-500 transition-all duration-300 ease-out group-hover:translate-x-2 group-hover:text-black">
                  →
                </span>
              </article>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}