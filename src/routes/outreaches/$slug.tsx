import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { outreaches, formatDate } from "@/data/site";

export const Route = createFileRoute("/outreaches/$slug")({
  loader: ({ params }) => {
    const outreach = outreaches.find((o) => o.slug === params.slug);
    if (!outreach) throw notFound();
    return outreach;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Veronika Bakoz Charity Foundation` },
          { name: "description", content: loaderData.excerpt },
        ]
      : [],
  }),
  component: OutreachDetail,
});

function OutreachDetail() {
  const outreach = Route.useLoaderData();

  return (
    <div>
      <section className="relative flex min-h-[60svh] items-end overflow-hidden">
        <img
          src={outreach.image}
          alt=""
          className="absolute inset-0 size-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
        <div className="container-page relative z-10 pt-32 pb-14 text-ink-foreground">
          <Reveal>
            <Link
              to="/outreaches"
              className="inline-flex items-center gap-1 text-sm text-ink-foreground/80 hover:text-ink-foreground"
            >
              <ArrowLeft className="size-3.5" aria-hidden="true" />
              All outreaches
            </Link>
            <Badge variant="secondary" className="mt-4">
              {outreach.category}
            </Badge>
            <h1 className="mt-3 max-w-2xl font-display text-3xl sm:text-4xl">{outreach.title}</h1>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm text-ink-foreground/85">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="size-4" aria-hidden="true" />
                {formatDate(outreach.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-4" aria-hidden="true" />
                {outreach.location}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <Reveal className="max-w-2xl">
          <p className="text-lg text-muted-foreground">{outreach.excerpt}</p>
        </Reveal>

        {outreach.gallery.length > 0 ? (
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {outreach.gallery.map((src, i) => (
              <Reveal key={src} delay={i * 80}>
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="hover-lift aspect-4/3 w-full rounded-2xl object-cover"
                />
              </Reveal>
            ))}
          </div>
        ) : null}
      </section>

      <section className="bg-secondary/40 py-16 text-center">
        <Reveal>
          <h2 className="font-display text-2xl sm:text-3xl">Help fund the next outreach</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link to="/donate">
                Donate now
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/get-involved">Volunteer</Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
