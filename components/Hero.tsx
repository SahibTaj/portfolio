"use client";

import { useState } from "react";

type NodeKey =
  | "sources"
  | "ingestion"
  | "index"
  | "query"
  | "cache"
  | "retrieval"
  | "rerank"
  | "context"
  | "llm"
  | "answer"
  | "evaluation"
  | "guardrails";

type NodeData = {
  label: string;
  meta: string;
  description: string;
};

const nodes: Record<NodeKey, NodeData> = {
  sources: {
    label: "SOURCES",
    meta: "DOCUMENTS",
    description:
      "Documents and knowledge sources enter the system before being transformed into searchable representations.",
  },
  ingestion: {
    label: "INGESTION",
    meta: "CHUNK · EMBED",
    description:
      "Content is cleaned, split into chunks, enriched with metadata, and converted into embeddings.",
  },
  index: {
    label: "INDEX",
    meta: "VECTOR · LEXICAL",
    description:
      "Searchable indexes store representations used by semantic and keyword-based retrieval.",
  },
  query: {
    label: "QUERY",
    meta: "01 · INPUT",
    description:
      "The user's question enters the system and becomes the starting point for the retrieval pipeline.",
  },
  cache: {
    label: "CACHE",
    meta: "02 · FAST PATH",
    description:
      "Reusable results can be served from cache, avoiding unnecessary retrieval and generation work.",
  },
  retrieval: {
    label: "RETRIEVAL",
    meta: "03 · RECALL",
    description:
      "Relevant candidates are retrieved from indexed knowledge using semantic and lexical signals.",
  },
  rerank: {
    label: "RERANK",
    meta: "04 · PRECISION",
    description:
      "Retrieved candidates are scored again to prioritize the information most useful for answering the query.",
  },
  context: {
    label: "CONTEXT",
    meta: "05 · TOP K",
    description:
      "The strongest retrieved results are assembled into a focused context for the language model.",
  },
  llm: {
    label: "LLM",
    meta: "06 · GENERATION",
    description:
      "The language model generates an answer using the retrieved context.",
  },
  answer: {
    label: "ANSWER",
    meta: "07 · RESPONSE",
    description:
      "The generated response is returned to the user.",
  },
  evaluation: {
    label: "EVALUATION",
    meta: "QUALITY · REGRESSION",
    description:
      "Evaluation measures retrieval and generation quality and helps identify regressions when the system changes.",
  },
  guardrails: {
    label: "GUARDRAILS",
    meta: "SAFETY · CONSTRAINTS",
    description:
      "Guardrails constrain system behavior and help prevent unsupported, unsafe, or undesirable outputs.",
  },
};

function Node({
  id,
  active,
  onHover,
}: {
  id: NodeKey;
  active: boolean;
  onHover: (id: NodeKey | null) => void;
}) {
  const node = nodes[id];

  return (
    <button
      type="button"
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(id)}
      onBlur={() => onHover(null)}
      className={`group relative min-w-0 w-full border px-3 py-4 text-left transition-all duration-300 sm:px-4 ${
        active
          ? "border-black bg-black text-white"
          : "border-black/15 bg-[#f7f7f5] text-black hover:border-black"
      }`}
    >
      <span
        className={`block truncate text-[9px] tracking-[0.18em] transition-colors duration-300 sm:tracking-[0.22em] ${
          active ? "text-white/50" : "text-slate-400"
        }`}
      >
        {node.meta}
      </span>

      <span className="mt-1 block truncate text-sm font-medium tracking-wide">
        {node.label}
      </span>

      <span
        className={`absolute right-3 top-3 h-1.5 w-1.5 rounded-full transition-all duration-300 ${
          active ? "bg-white" : "bg-black/20 group-hover:bg-black"
        }`}
      />
    </button>
  );
}

function ArrowRight() {
  return (
    <div className="relative flex w-5 shrink-0 items-center sm:w-7">
      <span className="h-px w-full bg-black/20" />

      <span
        className="absolute right-0 h-0 w-0
          border-b-[4px] border-b-transparent
          border-l-[6px] border-l-black/40
          border-t-[4px] border-t-transparent"
      />
    </div>
  );
}

function ArrowLeft() {
  return (
    <div className="relative flex w-5 shrink-0 items-center sm:w-7">
      <span className="h-px w-full bg-black/20" />

      <span
        className="absolute left-0 h-0 w-0
          border-b-[4px] border-b-transparent
          border-r-[6px] border-r-black/40
          border-t-[4px] border-t-transparent"
      />
    </div>
  );
}

function VerticalArrow() {
  return (
    <div className="relative h-12 w-px">
      <span className="absolute left-0 top-0 h-full w-px bg-black/20" />

      <span
        className="absolute bottom-0 left-1/2 h-0 w-0 -translate-x-1/2
          border-l-[4px] border-l-transparent
          border-r-[4px] border-r-transparent
          border-t-[6px] border-t-black/40"
      />
    </div>
  );
}

export default function Hero() {
  const [activeNode, setActiveNode] = useState<NodeKey | null>(null);

  const activeData = activeNode ? nodes[activeNode] : null;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="home"
      className="flex min-h-[calc(100svh-80px)] items-center overflow-hidden px-6 py-20 md:px-16"
    >
      <div className="mx-auto grid w-full max-w-7xl min-w-0 items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        {/* LEFT — HERO CONTENT */}

        <div className="min-w-0">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-gray-500 sm:text-sm">
            AI / ML Engineer
          </p>

          <h1 className="max-w-full text-[clamp(3.5rem,7.2vw,6.5rem)] font-bold leading-[0.9] tracking-[-0.055em]">
            Building
            <br />
            Production-
            <br />
            Grade
            <br />
            AI Systems.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            I build intelligent systems across{" "}
            <strong className="text-black">LLMs</strong>,{" "}
            <strong className="text-black">RAG</strong>,{" "}
            <strong className="text-black">Agentic AI</strong>,{" "}
            <strong className="text-black">machine learning</strong> and{" "}
            <strong className="text-black">computer vision</strong> — from
            experimentation to reliable deployment.
          </p>

          <p className="mt-6 text-xs tracking-[0.16em] text-slate-500 sm:text-sm sm:tracking-[0.18em]">
            LLM SYSTEMS · RAG · AGENTIC AI · ML · COMPUTER VISION
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className="group inline-flex items-center rounded-full bg-black px-7 py-4 text-sm font-medium text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-slate-800 hover:shadow-[0_12px_30px_rgba(0,0,0,0.15)]"
            >
              View Projects

              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

            <a
              href="https://github.com/SahibTaj"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center rounded-full border border-black/20 px-7 py-4 text-sm font-medium transition-all duration-300 ease-out hover:-translate-y-1 hover:border-black hover:bg-black hover:text-white hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
            >
              GitHub

              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        {/* RIGHT — PRODUCTION RAG ARCHITECTURE */}

        <div className="min-w-0 hidden lg:block">
          <div className="ml-auto w-full min-w-0 max-w-[620px]">
            {/* HEADER */}

            <div className="mb-6 flex items-end justify-between border-b border-black/10 pb-5">
              <div>
                <p className="mb-2 text-[10px] tracking-[0.3em] text-slate-400">
                  SYSTEM / 01
                </p>

                <p className="text-xs font-medium tracking-[0.22em]">
                  PRODUCTION RAG / ARCHITECTURE
                </p>
              </div>

              <span className="text-[9px] tracking-[0.22em] text-slate-400">
                INTERACTIVE
              </span>
            </div>

            {/* KNOWLEDGE PIPELINE */}

            <div>
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[9px] tracking-[0.28em] text-slate-400">
                  KNOWLEDGE PIPELINE
                </span>

                <span className="text-[9px] tracking-[0.2em] text-slate-300">
                  OFFLINE
                </span>
              </div>

              <div className="flex min-w-0 items-center">
                <div className="min-w-0 flex-1">
                  <Node
                    id="sources"
                    active={activeNode === "sources"}
                    onHover={setActiveNode}
                  />
                </div>

                <ArrowRight />

                <div className="min-w-0 flex-1">
                  <Node
                    id="ingestion"
                    active={activeNode === "ingestion"}
                    onHover={setActiveNode}
                  />
                </div>

                <ArrowRight />

                <div className="min-w-0 flex-1">
                  <Node
                    id="index"
                    active={activeNode === "index"}
                    onHover={setActiveNode}
                  />
                </div>
              </div>
            </div>

            {/* REQUEST FLOW */}

            <div className="my-8">
              <div className="mb-4 flex items-center gap-4">
                <span className="h-px flex-1 bg-black/10" />

                <span className="shrink-0 text-[9px] tracking-[0.28em] text-slate-400">
                  REQUEST FLOW
                </span>

                <span className="h-px flex-1 bg-black/10" />
              </div>

              {/* ROW 1 */}

              <div className="flex min-w-0 items-center">
                <div className="min-w-0 flex-1">
                  <Node
                    id="query"
                    active={activeNode === "query"}
                    onHover={setActiveNode}
                  />
                </div>

                <ArrowRight />

                <div className="min-w-0 flex-1">
                  <Node
                    id="cache"
                    active={activeNode === "cache"}
                    onHover={setActiveNode}
                  />
                </div>

                <ArrowRight />

                <div className="min-w-0 flex-1">
                  <Node
                    id="retrieval"
                    active={activeNode === "retrieval"}
                    onHover={setActiveNode}
                  />
                </div>
              </div>

              {/* RETRIEVAL ↓ RERANK */}

              <div className="relative h-12">
                <div className="absolute left-[83.33%] top-0 -translate-x-1/2">
                  <VerticalArrow />
                </div>
              </div>

              {/* ROW 2 */}

              <div className="flex min-w-0 items-center">
                <div className="min-w-0 flex-1">
                  <Node
                    id="answer"
                    active={activeNode === "answer"}
                    onHover={setActiveNode}
                  />
                </div>

                <ArrowLeft />

                <div className="min-w-0 flex-1">
                  <Node
                    id="llm"
                    active={activeNode === "llm"}
                    onHover={setActiveNode}
                  />
                </div>

                <ArrowLeft />

                <div className="min-w-0 flex-1">
                  <Node
                    id="context"
                    active={activeNode === "context"}
                    onHover={setActiveNode}
                  />
                </div>

                <ArrowLeft />

                <div className="min-w-0 flex-1">
                  <Node
                    id="rerank"
                    active={activeNode === "rerank"}
                    onHover={setActiveNode}
                  />
                </div>
              </div>

              <div className="mt-3 flex justify-end">
                <span className="text-[9px] tracking-[0.22em] text-slate-300">
                  RETRIEVE → RANK → GENERATE
                </span>
              </div>
            </div>

            {/* QUALITY & SAFETY */}

            <div className="border-t border-black/10 pt-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[9px] tracking-[0.28em] text-slate-400">
                  QUALITY & SAFETY
                </span>

                <span className="text-[9px] tracking-[0.2em] text-slate-300">
                  CONTINUOUS
                </span>
              </div>

              <div className="flex min-w-0 items-center gap-4">
                <div className="min-w-0 flex-1">
                  <Node
                    id="evaluation"
                    active={activeNode === "evaluation"}
                    onHover={setActiveNode}
                  />
                </div>

                <span className="shrink-0 text-[10px] text-slate-300">
                  +
                </span>

                <div className="min-w-0 flex-1">
                  <Node
                    id="guardrails"
                    active={activeNode === "guardrails"}
                    onHover={setActiveNode}
                  />
                </div>
              </div>
            </div>

            {/* HOVER DETAIL */}

            <div className="mt-5 min-h-[92px] border-y border-black/10 py-4">
              {activeData ? (
                <div className="flex gap-4">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-black" />

                  <div className="min-w-0">
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <p className="text-xs font-medium tracking-[0.18em]">
                        {activeData.label}
                      </p>

                      <span className="text-[9px] tracking-[0.2em] text-slate-400">
                        {activeData.meta}
                      </span>
                    </div>

                    <p className="max-w-xl text-sm leading-6 text-slate-500">
                      {activeData.description}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex min-h-[58px] items-center">
                  <p className="text-xs text-slate-400">
                    Hover a component to inspect the system.
                  </p>
                </div>
              )}
            </div>

            {/* FOOTER */}

            <div className="mt-5 flex items-center justify-between">
              <p className="text-[9px] tracking-[0.22em] text-slate-400">
                RETRIEVAL · GENERATION · EVALUATION
              </p>

              <p className="text-[9px] tracking-[0.22em] text-slate-300">
                RAG SYSTEM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}