import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { NewsletterForm } from "@/components/site/NewsletterForm";
import { images, org, stats, programs, stories, partners } from "@/data/site";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const featuredStory = stories[0];

  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[92svh] items-end overflow-hidden">
        <HeroCarousel
          slides={[
            { src: images.heroTraining, alt: "Women in a skills training session" },
            { src: images.heroTailoring, alt: "Tailoring cohort at work" },
            { src: images.heroChildren, alt: "Children supported by the foundation" },
          ]}
        />
        <div className="container-page relative z-10 pt-40 pb-20 text-ink-foreground">
          <Reveal>
            <p className="eyebrow text-ink-foreground/80">{org.name}</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
              {org.tagline}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-base text-ink-foreground/85 sm:text-lg">
              Skills, capital and community for widows and less-privileged women and children in{" "}
              {org.city}.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/donate">
                  <Heart className="size-4" aria-hidden="true" />
                  Donate now
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-ink-foreground/30 bg-transparent text-ink-foreground hover:bg-ink-foreground/10 hover:text-ink-foreground"
              >
                <Link to="/about">
                  Our story
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Impact intro */}
      <section className="container-page py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src={images.communityPhoto}
              alt="Community outreach in Kogi State"
              className="aspect-4/3 w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Our impact</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              Over 500 women and young people, and counting.
            </h2>
            <p className="mt-5 text-muted-foreground">
              We believe every individual deserves dignity, access to opportunity, and the chance
              to create a better future. Our initiatives focus on economic empowerment, education,
              healthcare and welfare for those often overlooked or forgotten — with direct impact
              across {org.city} and beyond.
            </p>
            <Button asChild variant="link" className="mt-2 px-0">
              <Link to="/about">
                Read our story
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ink py-20 text-ink-foreground">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow text-gold">Numbers that speak</p>
            <h2 className="mt-3 max-w-lg font-display text-3xl sm:text-4xl">
              We break our own records every year — here's where things stand.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100} className="text-center sm:text-left">
                <p className="font-display text-4xl text-gold sm:text-5xl">
                  <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-ink-foreground/70">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="container-page py-20 sm:py-28">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">
            Committed to uplifting widows and the less privileged.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Empowerment, compassion and sustainable community support — through six core
            programmes.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, i) => (
            <Reveal key={program.slug} delay={i * 90}>
              <Link
                to="/what-we-do"
                hash={program.slug}
                className="hover-lift group block h-full overflow-hidden rounded-2xl border bg-card"
              >
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    src={program.image}
                    alt=""
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg">{program.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                    {program.summary}
                  </p>
                  <span className="link-underline mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Learn more
                    <ArrowRight className="size-3.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured story */}
      {featuredStory ? (
        <section className="bg-secondary/60 py-20 sm:py-28">
          <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <img
                src={featuredStory.image}
                alt=""
                loading="lazy"
                className="aspect-4/3 w-full rounded-3xl object-cover shadow-[var(--shadow-soft)]"
              />
            </Reveal>
            <Reveal delay={120}>
              <Quote className="size-8 text-primary" aria-hidden="true" />
              <h2 className="mt-4 font-display text-2xl sm:text-3xl">{featuredStory.title}</h2>
              <p className="mt-4 text-muted-foreground">{featuredStory.excerpt}</p>
              <Button asChild className="mt-6">
                <Link to="/stories/$slug" params={{ slug: featuredStory.slug }}>
                  Read the full story
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </section>
      ) : null}

      {/* Photo speak */}
      <section className="container-page py-20 sm:py-28">
        <Reveal className="max-w-xl">
          <p className="eyebrow">Photo speak</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">Moments from the field</h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[images.founderPhoto, images.heroTailoring, images.businessPhoto, images.childrenPhoto].map(
            (src, i) => (
              <Reveal key={src} delay={i * 80} className={i === 0 ? "col-span-2 row-span-2" : ""}>
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="hover-lift aspect-square size-full rounded-2xl object-cover"
                />
              </Reveal>
            ),
          )}
        </div>
      </section>

      {/* Partners */}
      <section className="border-y bg-muted/40 py-14">
        <div className="container-page">
          <p className="eyebrow text-center">Our partners</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {partners.map((p) => (
              <span key={p} className="font-display text-sm text-muted-foreground sm:text-base">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="relative overflow-hidden py-24 text-center text-ink-foreground">
        <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-warm)" }} />
        <div className="container-page relative z-10">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl">
              Change the life of a widow and her children today
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-ink-foreground/90">
              Every donation funds training places, starter kits and emergency relief for families
              who need it most.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="mt-8 bg-ink-foreground text-ink hover:bg-ink-foreground/90"
            >
              <Link to="/donate">
                <Heart className="size-4" aria-hidden="true" />
                Give now
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container-page py-20">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="eyebrow">Stay up to date</p>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl">
            Field notes, straight from Lokoja
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Outreach dates, graduate stories and honest updates. No fundraising noise.
          </p>
          <div className="mx-auto mt-6 max-w-md">
            <NewsletterForm />
          </div>
        </Reveal>
      </section>
    </div>
  );
}
