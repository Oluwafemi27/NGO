import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { z } from "zod";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/site/Reveal";
import { org, socials } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Veronika Bakoz Charity Foundation" },
      {
        name: "description",
        content: `Get in touch with ${org.name} in ${org.city}.`,
      },
    ],
  }),
  component: Contact,
});

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(120),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  subject: z.string().trim().min(2, "Please enter a subject").max(160),
  message: z.string().trim().min(5, "Please enter a message").max(2000),
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  return (
    <div>
      <section className="border-b bg-secondary/40 pt-36 pb-16">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h1 className="mt-3 max-w-2xl font-display text-4xl sm:text-5xl">
              We'd love to hear from you.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Info */}
          <Reveal className="lg:col-span-2">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-sm text-muted-foreground">{org.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground">
                    {org.phone} · {org.phoneAlt}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">{org.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-medium">Office hours</p>
                  <p className="text-sm text-muted-foreground">{org.hours}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 border-t pt-6">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border">
              <iframe
                title="Map showing our location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(org.mapQuery)}&output=embed`}
                width="100%"
                height="260"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
              />
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={100} className="lg:col-span-3">
            <form
              className="space-y-4 rounded-3xl border bg-card p-6 sm:p-8"
              onSubmit={(e) => {
                e.preventDefault();
                const result = contactSchema.safeParse(form);
                if (!result.success) {
                  toast.error(result.error.issues[0]?.message ?? "Please check the form and try again.");
                  return;
                }
                setSubmitting(true);
                window.setTimeout(() => {
                  toast.success("Message sent — we'll reply within a couple of days.");
                  setForm({ name: "", email: "", subject: "", message: "" });
                  setSubmitting(false);
                }, 400);
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="c-name">Name</Label>
                  <Input
                    id="c-name"
                    required
                    maxLength={120}
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="c-email">Email</Label>
                  <Input
                    id="c-email"
                    type="email"
                    required
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="c-subject">Subject</Label>
                <Input
                  id="c-subject"
                  required
                  maxLength={160}
                  value={form.subject}
                  onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="c-message">Message</Label>
                <Textarea
                  id="c-message"
                  rows={5}
                  required
                  maxLength={2000}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                />
              </div>
              <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
                {submitting ? "Sending…" : "Send message"}
              </Button>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
