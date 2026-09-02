import Reveal from "./Reveal";

const skillGroups = [
  {
    number: "01",
    title: "LLM / GenAI",
    skills: [
      "LLM Applications",
      "RAG Systems",
      "Generative AI",
      "Fine-Tuning",
      "Prompt Engineering",
      "AI Agents",
      "Vector Databases",
      "Embeddings",
      "Retrieval Pipelines",
      "Grounded Generation",
      "LLM Evaluation",
      "RAG Guardrails",
    ],
  },
  {
    number: "02",
    title: "Machine Learning",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "PyTorch",
      "TensorFlow",
      "XGBoost",
      "Model Evaluation",
    ],
  },
  {
    number: "03",
    title: "Computer Vision",
    skills: [
      "Object Detection",
      "YOLO",
      "Real-Time Inference",
      "ONNX Runtime",
      "OpenCV",
    ],
  },
  {
    number: "04",
    title: "Backend & Data",
    skills: [
      "Python",
      "FastAPI",
      "Flask",
      "REST APIs",
      "SQL",
      "MySQL",
      "Model Serving",
      "Docker",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 md:px-16 md:py-28">
      <Reveal delay={0}>
        <div className="mb-16 md:mb-20">
          <p className="mb-6 text-sm tracking-[0.35em] text-slate-500">
            TECHNICAL CAPABILITIES
          </p>

          <h2 className="max-w-5xl text-6xl font-bold tracking-tight md:text-8xl">
            What I Build
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
            The technologies and engineering areas I work with across
            intelligent applications, machine learning, and AI systems.
          </p>
        </div>
      </Reveal>

      <Reveal delay={150}>
        <div className="border-t border-slate-200">
          {skillGroups.map((group) => (
            <article
              key={group.number}
              className="grid gap-8 border-b border-slate-200 py-10 md:grid-cols-[100px_280px_1fr] md:items-start"
            >
              <p className="text-sm text-slate-400">{group.number}</p>

              <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-x-8 gap-y-4">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-base text-slate-600 transition-colors duration-200 hover:text-black"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}