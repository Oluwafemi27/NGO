import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Reveal } from "@/components/site/Reveal";
import { NewsletterForm } from "@/components/site/NewsletterForm";
import { stories, storyCategories, formatDate } from "@/data/site";

export const Route = createFileRoute("/stories/")({
  head: () => ({
    meta: [
      { title: "Stories — Veronika Bakoz Charity Foundation" },
      {
        name: "description",
        content: "News, updates and beneficiary stories from the field in Kogi State.",
      },
    ],
  }),
  component: Stories,
});

function Stories() {
  const [category, setCategory] = useState<(typeof storyCategories)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return stories.filter((s) => {
      const matchesCategory = category === "All" || s.category === category;
      const matchesQuery = q.length === 0 || s.title.toLowerCase().includes(q) || s.excerpt.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div>
      <section className="border-b bg-secondary/40 pt-36 pb-16">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow">Stories</p>
            <h1 className="mt-3 max-w-2xl font-display text-4xl sm:text-5xl">
              News, updates and the people behind them.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {storyCategories.map((cat) => (
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
          </div>
          <div className="relative w-full sm:w-64">
            <Search
              className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search stories"
              className="pl-9"
              aria-label="Search stories"
            />
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((story, i) => (
            <Reveal key={story.slug} delay={i * 80}>
              <Link
                to="/stories/$slug"
                params={{ slug: story.slug }}
                className="hover-lift group block h-full overflow-hidden rounded-2xl border bg-card"
              >
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    src={story.image}
                    alt=""
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <Badge variant="secondary">{story.category}</Badge>
                  <h3 className="mt-3 font-display text-lg leading-snug">{story.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{story.excerpt}</p>
                  <p className="mt-4 text-xs text-muted-foreground">{formatDate(story.date)}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="mt-10 text-center text-muted-foreground">
            No stories match your search yet.
          </p>
        ) : null}
      </section>

      <section className="container-page pb-20">
        <Reveal className="mx-auto max-w-xl rounded-3xl border bg-card p-8 text-center">
          <p className="eyebrow">Stay in the loop</p>
          <h2 className="mt-2 font-display text-xl sm:text-2xl">Get new stories by email</h2>
          <div className="mx-auto mt-5 max-w-sm">
            <NewsletterForm compact />
          </div>
        </Reveal>
      </section>
    </div>
  );
}
