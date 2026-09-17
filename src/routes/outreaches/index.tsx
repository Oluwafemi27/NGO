import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { outreaches, outreachCategories, formatDate } from "@/data/site";

export const Route = createFileRoute("/outreaches/")({
  head: () => ({
    meta: [
      { title: "Our Outreaches — Veronika Bakoz Charity Foundation" },
      {
        name: "description",
        content: "Training cohorts, food drives, medical missions and festive support across Kogi State.",
      },
    ],
  }),
  component: Outreaches,
});

function Outreaches() {
  const [category, setCategory] = useState<(typeof outreachCategories)[number]>("All");

  const filtered =
    category === "All" ? outreaches : outreaches.filter((o) => o.category === category);

  return (
    <div>
      <section className="border-b bg-secondary/40 pt-36 pb-16">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow">Our outreaches</p>
            <h1 className="mt-3 max-w-2xl font-display text-4xl sm:text-5xl">
              Moments where the work meets people.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <Reveal className="flex flex-wrap gap-2">
          {outreachCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                category === cat
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-transparent text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((outreach, i) => (
            <Reveal key={outreach.slug} delay={i * 80}>
              <Link
                to="/outreaches/$slug"
                params={{ slug: outreach.slug }}
                className="hover-lift group block h-full overflow-hidden rounded-2xl border bg-card"
              >
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    src={outreach.image}
                    alt=""
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <Badge variant="secondary">{outreach.category}</Badge>
                  <h3 className="mt-3 font-display text-lg leading-snug">{outreach.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    {outreach.excerpt}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="size-3.5" aria-hidden="true" />
                      {formatDate(outreach.date)}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="size-3.5" aria-hidden="true" />
                      {outreach.location}
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="mt-10 text-center text-muted-foreground">
            No outreaches in this category yet.
          </p>
        ) : null}
      </section>

      <section className="bg-secondary/40 py-16 text-center">
        <Reveal>
          <h2 className="font-display text-2xl sm:text-3xl">Want the next one to happen sooner?</h2>
          <Button asChild size="lg" className="mt-6">
            <Link to="/donate">
              Fund an outreach
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>
      </section>
    </div>
  );
}
