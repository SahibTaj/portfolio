import Reveal from "./Reveal";

const experiences = [
  {
    period: "June 2026 — Present",
    role: "AI Engineer Intern",
    company: "Weaddo",
    category: "AI / ML",
    points: [
      "Owned the forecasting workflow end-to-end — EDA, rolling-window and lag feature engineering, and preprocessing — including an automated EDA dashboard.",
      "Trained and compared XGBoost, SARIMAX, ARIMA, SARIMA, and Linear Regression models on platform- and campaign-level ad performance data across Google, Meta, and TikTok.",
      "Ran a systematic 12-segment evaluation using MAE, RMSE, MAPE, and R², with XGBoost outperforming SARIMAX in 8 of 12 segments, with the largest gains on high-volatility Shopping and Video campaigns.",
      "Extended the pipeline with exogenous SARIMAX and Bayesian (PyMC) forecasting, feeding predictions into a marketing budget allocation model for platform- and campaign-level spend decisions.",
      "Helped reduce latency in a marketing RAG system by moving numerical aggregation out of the LLM into Python/SQL, so the model receives computed results rather than raw data; now extending this into hybrid retrieval.",
    ],
  },
  {
    period: "May 2025 — Aug 2025",
    role: "ML Engineering Intern",
    company: "HackTech",
    category: "ML Engineering",
    points: [
      "Built a fraud-detection mobile app using Flutter that takes transaction details as input and returns a fraud/not-fraud prediction using a trained XGBoost model, reaching 0.97 ROC-AUC on the underlying classifier.",
      "Automated the evaluation and deployment workflow with MLflow-inspired experiment tracking and model registry with regression gating, enabling reproducible, config-driven pipeline runs and reducing manual validation effort.",
    ],
  },
  {
    period: "Feb 2025 — Aug 2026",
    role: "Instructor & Community Leadership",
    company: "TECHNIKI · GeeksforGeeks · HackTech",
    category: "Leadership",
    points: [
      "Directed planning, design, and delivery of hands-on ML/DL/AI workshops and coding quizzes as a Core Member of TECHNIKI and Tech Core Member of GeeksforGeeks; mentored 100+ students.",
      "Represented HackTech as Student Ambassador, driving hackathon and technical-event participation campus-wide.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-20 md:px-16 md:py-24">
      <Reveal>
        <div className="mb-16 md:mb-20">
          <p className="mb-6 text-sm tracking-[0.35em] text-slate-500">
            EXPERIENCE
          </p>

          <h2 className="max-w-5xl text-6xl font-bold tracking-tight md:text-8xl">
            Where I&apos;ve
            <br />
            Worked.
          </h2>
        </div>
      </Reveal>

      <Reveal delay={150}>
        <div className="border-t border-slate-200">
          {experiences.map((experience, index) => (
            <article
              key={experience.company}
              className="grid gap-8 border-b border-slate-200 py-12 md:grid-cols-[180px_1fr_180px] md:gap-12 md:py-14"
            >
              <div>
                <p className="text-sm text-slate-500">
                  {experience.period}
                </p>
              </div>

              <div>
                <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-4">
                  <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                    {experience.role}
                  </h3>

                  {index === 0 && (
                    <span className="text-xs tracking-[0.2em] text-slate-400">
                      CURRENT
                    </span>
                  )}
                </div>

                <p className="mb-7 text-lg text-slate-500">
                  {experience.company}
                </p>

                <ul className="max-w-3xl space-y-4">
                  {experience.points.map((point) => (
                    <li
                      key={point}
                      className="relative pl-5 text-base leading-7 text-slate-600 md:text-lg md:leading-8"
                    >
                      <span className="absolute left-0 top-[0.7em] h-1 w-1 rounded-full bg-slate-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-sm tracking-[0.18em] text-slate-400 md:text-right">
                {experience.category}
              </p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}