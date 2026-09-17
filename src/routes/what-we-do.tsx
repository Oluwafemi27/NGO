import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { programs } from "@/data/site";

export const Route = createFileRoute("/what-we-do")({
  head: () => ({
    meta: [
      { title: "What We Do — Veronika Bakoz Charity Foundation" },
      {
        name: "description",
        content:
          "Vocational training, small business support, humanitarian outreach and child development programmes.",
      },
    ],
  }),
  component: WhatWeDo,
});

const steps = [
  {
    title: "Identify",
    text: "Community leaders and past graduates help us find widows and families who need support most, quietly and respectfully.",
  },
  {
    title: "Enrol",
    text: "Applicants meet our team, choose a track — training, a grant, or outreach support — and are onboarded into a cohort.",
  },
  {
    title: "Support",
    text: "Twelve weeks of hands-on training, mentoring, or direct relief, backed by check-ins throughout.",
  },
  {
    title: "Follow up",
    text: "We stay in touch for at least a year after graduation — the difference between a one-off gift and lasting change.",
  },
];

function WhatWeDo() {
  return (
    <div>
      <section className="border-b bg-secondary/40 pt-36 pb-16">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow">What we do</p>
            <h1 className="mt-3 max-w-2xl font-display text-4xl sm:text-5xl">
              Six programmes, one goal: lasting independence.
            </h1>
          </Reveal>
        </div>
      </section>

      {programs.map((program, i) => (
        <section
          key={program.slug}
          id={program.slug}
          className={`scroll-mt-24 py-20 sm:py-24 ${i % 2 === 1 ? "bg-secondary/30" : ""}`}
        >
          <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
              <img
                src={program.image}
                alt={program.title}
                loading="lazy"
                className="aspect-4/3 w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
              />
            </Reveal>
            <Reveal delay={100} className={i % 2 === 1 ? "lg:order-1" : ""}>
              <p className="eyebrow">Programme {String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl">{program.title}</h2>
              <p className="mt-4 text-muted-foreground">{program.summary}</p>
              {program.body.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-sm text-muted-foreground">
                  {paragraph}
                </p>
              ))}
              <div className="mt-6 grid grid-cols-3 gap-4 border-t pt-6">
                {program.metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="font-display text-xl text-primary sm:text-2xl">{metric.value}</p>
                    <p className="text-xs text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      {/* How it works */}
      <section className="bg-ink py-20 text-ink-foreground sm:py-28">
        <div className="container-page">
          <Reveal className="max-w-xl">
            <p className="eyebrow text-gold">How it works</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              From first contact to lasting change
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 100} className="rounded-2xl border border-white/10 p-6">
                <span className="font-display text-3xl text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg">{step.title}</h3>
                <p className="mt-2 text-sm text-ink-foreground/75">{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 text-center">
        <Reveal className="mx-auto max-w-xl">
          <CheckCircle2 className="mx-auto size-8 text-primary" aria-hidden="true" />
          <h2 className="mt-4 font-display text-2xl sm:text-3xl">
            Want to fund a programme or take part in one?
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link to="/donate">
                <Heart className="size-4" aria-hidden="true" />
                Donate
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/get-involved">
                Get involved
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
