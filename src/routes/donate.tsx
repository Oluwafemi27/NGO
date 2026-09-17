import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { z } from "zod";
import { Heart, Landmark, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Reveal } from "@/components/site/Reveal";
import { campaigns, donationTiers, org } from "@/data/site";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Veronika Bakoz Charity Foundation" },
      {
        name: "description",
        content: "Fund training places, starter kits and emergency relief for widows and children in Kogi State.",
      },
    ],
  }),
  component: Donate,
});

function formatNaira(value: number) {
  return `₦${value.toLocaleString("en-NG")}`;
}

const donorSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(120),
  email: z.string().trim().email("Please enter a valid email address").max(255),
});

function Donate() {
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [selectedTier, setSelectedTier] = useState<number | null>(donationTiers[2]?.amount ?? null);
  const [customAmount, setCustomAmount] = useState("");
  const [donor, setDonor] = useState({ name: "", email: "" });
  const [submitting, setSubmitting] = useState(false);

  const amount = useMemo(() => {
    if (customAmount.trim().length > 0) {
      const parsed = Number(customAmount);
      return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
    }
    return selectedTier ?? 0;
  }, [customAmount, selectedTier]);

  return (
    <div>
      <section className="relative overflow-hidden pt-36 pb-20 text-center text-ink-foreground">
        <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-warm)" }} />
        <div className="container-page relative z-10">
          <Reveal>
            <p className="eyebrow text-ink-foreground/80">Donate</p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl">
              Your gift becomes someone's next chapter.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <div className="mx-auto max-w-xl">
          <Reveal className="rounded-3xl border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8">
            {/* Frequency toggle */}
            <div className="flex gap-2 rounded-full bg-muted p-1">
              <button
                type="button"
                onClick={() => setFrequency("once")}
                className={`flex-1 rounded-full py-2 text-sm font-medium transition-colors ${
                  frequency === "once" ? "bg-background shadow-sm" : "text-muted-foreground"
                }`}
              >
                One-time
              </button>
              <button
                type="button"
                onClick={() => setFrequency("monthly")}
                className={`flex-1 rounded-full py-2 text-sm font-medium transition-colors ${
                  frequency === "monthly" ? "bg-background shadow-sm" : "text-muted-foreground"
                }`}
              >
                Monthly
              </button>
            </div>

            {/* Amount tiers */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {donationTiers.map((tier) => (
                <button
                  key={tier.amount}
                  type="button"
                  onClick={() => {
                    setSelectedTier(tier.amount);
                    setCustomAmount("");
                  }}
                  className={`rounded-xl border p-3 text-left transition-colors ${
                    selectedTier === tier.amount && customAmount.trim().length === 0
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/40"
                  }`}
                >
                  <p className="font-display text-lg">{formatNaira(tier.amount)}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{tier.impact}</p>
                </button>
              ))}
            </div>

            <div className="mt-4 space-y-1.5">
              <Label htmlFor="custom-amount">Or enter a custom amount (₦)</Label>
              <Input
                id="custom-amount"
                type="number"
                min={100}
                placeholder="e.g. 25000"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedTier(null);
                }}
              />
            </div>

            {/* Donor info */}
            <div className="mt-6 grid gap-4 border-t pt-6 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="donor-name">Full name</Label>
                <Input
                  id="donor-name"
                  required
                  maxLength={120}
                  value={donor.name}
                  onChange={(e) => setDonor((d) => ({ ...d, name: e.target.value }))}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="donor-email">Email (for your receipt)</Label>
                <Input
                  id="donor-email"
                  type="email"
                  required
                  maxLength={255}
                  value={donor.email}
                  onChange={(e) => setDonor((d) => ({ ...d, email: e.target.value }))}
                />
              </div>
            </div>

            <Button
              size="lg"
              disabled={submitting}
              className="mt-6 w-full"
              onClick={() => {
                const result = donorSchema.safeParse(donor);
                if (!result.success) {
                  toast.error(result.error.issues[0]?.message ?? "Please check your details.");
                  return;
                }
                if (amount <= 0) {
                  toast.error("Please choose or enter a donation amount.");
                  return;
                }
                setSubmitting(true);
                // TODO: wire this button to a live payment gateway (Paystack /
                // Flutterwave). This UI is ready — it just needs real API keys
                // from the foundation before it can accept a payment.
                window.setTimeout(() => {
                  toast.info(
                    "Payment processing isn't connected yet — add your Paystack/Flutterwave keys to enable live donations.",
                  );
                  setSubmitting(false);
                }, 400);
              }}
            >
              <Heart className="size-4" aria-hidden="true" />
              {frequency === "monthly" ? "Give monthly" : "Give"}
              {amount > 0 ? ` — ${formatNaira(amount)}` : ""}
            </Button>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
              <ShieldCheck className="size-3.5" aria-hidden="true" />
              Secure checkout via card, bank transfer or USSD
            </p>
          </Reveal>

          {/* Bank transfer */}
          <Reveal delay={100} className="mt-6 rounded-2xl border bg-secondary/40 p-6">
            <div className="flex items-start gap-3">
              <Landmark className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="font-display text-base">Prefer a bank transfer?</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Contact us at {org.email} or {org.phone} for direct bank transfer details, or to
                  arrange a larger or in-kind gift.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Active campaigns */}
      <section className="bg-secondary/30 py-16 sm:py-20">
        <div className="container-page">
          <Reveal className="max-w-xl">
            <p className="eyebrow">Active campaigns</p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl">Fund a specific need</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {campaigns.map((c, i) => {
              const pct = Math.min(100, Math.round((c.raised / c.goal) * 100));
              return (
                <Reveal key={c.title} delay={i * 90} className="rounded-2xl border bg-card p-6">
                  <p className="font-display text-base leading-snug">{c.title}</p>
                  <Progress value={pct} className="mt-4" />
                  <div className="mt-2 flex items-baseline justify-between text-sm">
                    <span className="font-medium text-primary">{formatNaira(c.raised)}</span>
                    <span className="text-muted-foreground">of {formatNaira(c.goal)}</span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
