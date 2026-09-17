import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { stories, formatDate } from "@/data/site";

export const Route = createFileRoute("/stories/$slug")({
  loader: ({ params }) => {
    const story = stories.find((s) => s.slug === params.slug);
    if (!story) throw notFound();
    const related = stories.filter((s) => s.slug !== story.slug && s.category === story.category).slice(0, 3);
    return { story, related };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.story.title} — Veronika Bakoz Charity Foundation` },
          { name: "description", content: loaderData.story.excerpt },
        ]
      : [],
  }),
  component: StoryDetail,
});

function StoryDetail() {
  const { story, related } = Route.useLoaderData();

  return (
    <div>
      <section className="container-page pt-32 pb-6">
        <Reveal>
          <Link
            to="/stories"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" aria-hidden="true" />
            All stories
          </Link>
        </Reveal>
      </section>

      <article className="container-page pb-16">
        <Reveal className="mx-auto max-w-2xl">
          <Badge variant="secondary">{story.category}</Badge>
          <h1 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">{story.title}</h1>
          <p className="mt-3 text-sm text-muted-foreground">{formatDate(story.date)}</p>
        </Reveal>

        <Reveal delay={100} className="mx-auto mt-8 max-w-3xl">
          <img
            src={story.image}
            alt=""
            loading="eager"
            className="aspect-16/9 w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
          />
        </Reveal>

        <Reveal delay={150} className="prose prose-neutral mx-auto mt-10 max-w-2xl">
          <p className="text-lg text-foreground/90">{story.excerpt}</p>
          {story.body.map((paragraph) => (
            <p key={paragraph} className="mt-5 text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal delay={200} className="mx-auto mt-10 max-w-2xl rounded-2xl border bg-secondary/40 p-6 text-center">
          <p className="font-display text-lg">Support more stories like this one</p>
          <Button asChild className="mt-4">
            <Link to="/donate">
              <Heart className="size-4" aria-hidden="true" />
              Donate
            </Link>
          </Button>
        </Reveal>
      </article>

      {related.length > 0 ? (
        <section className="border-t bg-secondary/30 py-16">
          <div className="container-page">
            <Reveal>
              <p className="eyebrow">More like this</p>
            </Reveal>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {related.map((s, i) => (
                <Reveal key={s.slug} delay={i * 90}>
                  <Link
                    to="/stories/$slug"
                    params={{ slug: s.slug }}
                    className="hover-lift group block h-full overflow-hidden rounded-2xl border bg-card"
                  >
                    <div className="aspect-4/3 overflow-hidden">
                      <img
                        src={s.image}
                        alt=""
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-display text-base leading-snug">{s.title}</h3>
                      <span className="link-underline mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary">
                        Read more
                        <ArrowRight className="size-3" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
