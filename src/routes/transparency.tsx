import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileText, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { spending, reports, org } from "@/data/site";

export const Route = createFileRoute("/transparency")({
  head: () => ({
    meta: [
      { title: "Transparency — Veronika Bakoz Charity Foundation" },
      {
        name: "description",
        content: "How donations are spent, plus our impact and financial reports.",
      },
    ],
  }),
  component: Transparency,
});

function Transparency() {
  return (
    <div>
      <section className="border-b bg-secondary/40 pt-36 pb-16">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow">Transparency</p>
            <h1 className="mt-3 max-w-2xl font-display text-4xl sm:text-5xl">
              Every naira, accounted for.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Spending breakdown */}
      <section className="container-page py-16 sm:py-20">
        <Reveal className="max-w-xl">
          <p className="eyebrow">Where donations go</p>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl">Spending breakdown</h2>
        </Reveal>
        <div className="mx-auto mt-10 max-w-2xl space-y-5">
          {spending.map((item, i) => (
            <Reveal key={item.label} delay={i * 90}>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{item.label}</span>
                <span className="text-muted-foreground">{item.value}%</span>
              </div>
              <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-700"
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Reports */}
      <section className="bg-secondary/30 py-16 sm:py-20">
        <div className="container-page">
          <Reveal className="max-w-xl">
            <p className="eyebrow">Reports</p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl">Impact & financial reports</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {reports.map((report, i) => (
              <Reveal key={report.title} delay={i * 90} className="rounded-2xl border bg-card p-6">
                <FileText className="size-6 text-primary" aria-hidden="true" />
                <p className="mt-3 font-display text-base">{report.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{report.detail}</p>
                <Button asChild variant="link" size="sm" className="mt-2 px-0">
                  <Link to="/contact">
                    Request a copy
                    <ArrowRight className="size-3.5" aria-hidden="true" />
                  </Link>
                </Button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Registration */}
      <section className="container-page py-16 sm:py-20">
        <Reveal className="mx-auto flex max-w-xl items-start gap-3 rounded-2xl border bg-card p-6">
          <ShieldCheck className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
          <div>
            <p className="font-display text-base">Registration</p>
            <p className="mt-1 text-sm text-muted-foreground">{org.cac}</p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
