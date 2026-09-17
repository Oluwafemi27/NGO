import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { images, org, values, timeline, team } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Veronika Bakoz Charity Foundation" },
      {
        name: "description",
        content:
          "The story, mission and values behind the Veronika Bakoz Charity Foundation in Lokoja, Kogi State.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="border-b bg-secondary/40 pt-36 pb-16">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow">About us</p>
            <h1 className="mt-3 max-w-2xl font-display text-4xl sm:text-5xl">
              Dignity, skills and community for widows and the less privileged.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Founder */}
      <section className="container-page py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src={images.founderPhoto}
              alt="Mrs. Veronica Bako, Founder of the Veronika Bakoz Charity Foundation"
              className="aspect-4/5 w-full max-w-md rounded-3xl object-cover shadow-[var(--shadow-lift)]"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Our founder</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">Mrs. Veronica Bako</h2>
            <p className="mt-5 text-muted-foreground">
              {org.name} was founded on the belief that every widow, mother and child deserves the
              dignity of opportunity — not charity that ends the moment the need is met, but
              skills, capital and community that outlast it.
            </p>
            <p className="mt-4 text-muted-foreground">
              What began as informal support for widows in a Lokoja neighbourhood has grown into a
              foundation running vocational training, small business grants, humanitarian
              outreach and child development programmes across {org.city}.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-ink py-20 text-ink-foreground sm:py-28">
        <div className="container-page">
          <div className="grid gap-10 md:grid-cols-2">
            <Reveal>
              <p className="eyebrow text-gold">Our mission</p>
              <p className="mt-3 font-display text-2xl leading-snug sm:text-3xl">
                To equip widows and less-privileged women and children with the skills, capital
                and support they need to build lasting independence.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p className="eyebrow text-gold">Our vision</p>
              <p className="mt-3 font-display text-2xl leading-snug sm:text-3xl">
                A community where no widow or child is left behind — where dignity, not pity,
                shapes every act of support.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90} className="rounded-2xl border border-white/10 p-6">
                <h3 className="font-display text-lg text-gold">{v.title}</h3>
                <p className="mt-2 text-sm text-ink-foreground/75">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="container-page py-20 sm:py-28">
        <Reveal className="max-w-xl">
          <p className="eyebrow">Our journey</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">How we got here</h2>
        </Reveal>
        <ol className="mt-12 space-y-8 border-l pl-8">
          {timeline.map((item, i) => (
            <Reveal key={item.year} as="li" delay={i * 80} className="relative">
              <span className="absolute top-1.5 -left-[2.35rem] size-3 rounded-full bg-primary" />
              <p className="font-display text-xl text-primary">{item.year}</p>
              <p className="mt-1 text-muted-foreground">{item.text}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Team */}
      <section className="bg-secondary/40 py-20 sm:py-28">
        <div className="container-page">
          <Reveal className="max-w-xl">
            <p className="eyebrow">Our team</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">The people behind the work</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 90} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="mx-auto aspect-square w-32 rounded-full object-cover shadow-[var(--shadow-soft)]"
                />
                <p className="mt-4 font-display text-base">{member.name}</p>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </Reveal>
            ))}
            <Reveal
              delay={team.length * 90}
              className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed p-6 text-center"
            >
              <div className="flex size-32 items-center justify-center rounded-full bg-muted text-muted-foreground">
                <span className="text-3xl font-light">+</span>
              </div>
              <p className="mt-4 font-display text-base">Join the team</p>
              <p className="text-sm text-muted-foreground">
                We're always glad to hear from volunteers and partners.
              </p>
              <Button asChild variant="link" size="sm" className="mt-1">
                <Link to="/get-involved">
                  Get involved
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </Link>
              </Button>
            </Reveal>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">{org.cac}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 text-center text-ink-foreground">
        <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-warm)" }} />
        <div className="container-page relative z-10">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl">Be part of the next chapter</h2>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-ink-foreground text-ink hover:bg-ink-foreground/90"
              >
                <Link to="/donate">
                  <Heart className="size-4" aria-hidden="true" />
                  Donate
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-ink-foreground/30 bg-transparent text-ink-foreground hover:bg-ink-foreground/10 hover:text-ink-foreground"
              >
                <Link to="/get-involved">Volunteer with us</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
