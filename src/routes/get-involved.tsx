import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { z } from "zod";
import { Calendar, HandHeart, Handshake, Package, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal } from "@/components/site/Reveal";
import { events, faqs, formatDate } from "@/data/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved — Veronika Bakoz Charity Foundation" },
      {
        name: "description",
        content: "Volunteer, partner with us, or give in-kind — ways to support widows and children in Kogi State.",
      },
    ],
  }),
  component: GetInvolved,
});

const volunteerSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(120),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  interest: z.string().min(1, "Please choose an area of interest"),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

const partnerSchema = z.object({
  org: z.string().trim().min(2, "Please enter your organisation's name").max(160),
  contact: z.string().trim().min(2, "Please enter a contact name").max(120),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  message: z.string().trim().min(5, "Tell us a little about what you have in mind").max(1000),
});

const interestOptions = [
  "Vocational training support",
  "Medical & humanitarian outreach",
  "Child development programmes",
  "Events & fundraising",
  "Admin, media or design skills",
];

function VolunteerForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        const result = volunteerSchema.safeParse(form);
        if (!result.success) {
          toast.error(result.error.issues[0]?.message ?? "Please check the form and try again.");
          return;
        }
        setSubmitting(true);
        window.setTimeout(() => {
          toast.success("Thank you — we'll be in touch about volunteering soon.");
          setForm({ name: "", email: "", phone: "", interest: "", message: "" });
          setSubmitting(false);
        }, 400);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="v-name">Full name</Label>
          <Input
            id="v-name"
            required
            maxLength={120}
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="v-email">Email</Label>
          <Input
            id="v-email"
            type="email"
            required
            maxLength={255}
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="v-phone">Phone (optional)</Label>
          <Input
            id="v-phone"
            type="tel"
            maxLength={30}
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="v-interest">Area of interest</Label>
          <Select
            value={form.interest}
            onValueChange={(value) => setForm((f) => ({ ...f, interest: value }))}
          >
            <SelectTrigger id="v-interest">
              <SelectValue placeholder="Choose an area" />
            </SelectTrigger>
            <SelectContent>
              {interestOptions.map((opt) => (
                <SelectItem key={opt} value={opt}>
                  {opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="v-message">Anything else we should know? (optional)</Label>
        <Textarea
          id="v-message"
          rows={3}
          maxLength={1000}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
        />
      </div>
      <Button type="submit" disabled={submitting} className="w-full sm:w-auto">
        {submitting ? "Sending…" : "Sign up to volunteer"}
      </Button>
    </form>
  );
}

function PartnerForm() {
  const [form, setForm] = useState({ org: "", contact: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        const result = partnerSchema.safeParse(form);
        if (!result.success) {
          toast.error(result.error.issues[0]?.message ?? "Please check the form and try again.");
          return;
        }
        setSubmitting(true);
        window.setTimeout(() => {
          toast.success("Thank you — our partnerships team will reach out shortly.");
          setForm({ org: "", contact: "", email: "", message: "" });
          setSubmitting(false);
        }, 400);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="p-org">Organisation name</Label>
          <Input
            id="p-org"
            required
            maxLength={160}
            value={form.org}
            onChange={(e) => setForm((f) => ({ ...f, org: e.target.value }))}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="p-contact">Contact name</Label>
          <Input
            id="p-contact"
            required
            maxLength={120}
            value={form.contact}
            onChange={(e) => setForm((f) => ({ ...f, contact: e.target.value }))}
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="p-email">Email</Label>
        <Input
          id="p-email"
          type="email"
          required
          maxLength={255}
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="p-message">Tell us about the partnership you have in mind</Label>
        <Textarea
          id="p-message"
          rows={4}
          required
          maxLength={1000}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
        />
      </div>
      <Button type="submit" disabled={submitting} className="w-full sm:w-auto">
        {submitting ? "Sending…" : "Submit inquiry"}
      </Button>
    </form>
  );
}

function GetInvolved() {
  const [tab, setTab] = useState<"volunteer" | "partner">("volunteer");

  return (
    <div>
      <section className="border-b bg-secondary/40 pt-36 pb-16">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow">Get involved</p>
            <h1 className="mt-3 max-w-2xl font-display text-4xl sm:text-5xl">
              There's a place for you in this work.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Ways to give */}
      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: HandHeart, title: "Volunteer your time", text: "Teach a skill, help run an outreach, or support events." },
            { icon: Handshake, title: "Partner with us", text: "Corporate sponsorship, in-kind support or joint programmes." },
            { icon: Package, title: "Give in-kind", text: "Fabric, sewing machines, food staples, medical supplies, books." },
            { icon: Users, title: "Spread the word", text: "Share our stories and outreach dates with your own network." },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 90} className="rounded-2xl border bg-card p-6">
              <item.icon className="size-6 text-primary" aria-hidden="true" />
              <h3 className="mt-3 font-display text-base">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Forms */}
      <section className="bg-secondary/30 py-16 sm:py-20">
        <div className="container-page">
          <Reveal className="mx-auto max-w-xl text-center">
            <p className="eyebrow">Sign up</p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl">Volunteer or partner with us</h2>
          </Reveal>

          <Reveal delay={100} className="mx-auto mt-10 max-w-xl rounded-3xl border bg-card p-6 sm:p-8">
            <div className="mb-6 flex gap-2 rounded-full bg-muted p-1">
              <button
                type="button"
                onClick={() => setTab("volunteer")}
                className={`flex-1 rounded-full py-2 text-sm font-medium transition-colors ${
                  tab === "volunteer" ? "bg-background shadow-sm" : "text-muted-foreground"
                }`}
              >
                Volunteer
              </button>
              <button
                type="button"
                onClick={() => setTab("partner")}
                className={`flex-1 rounded-full py-2 text-sm font-medium transition-colors ${
                  tab === "partner" ? "bg-background shadow-sm" : "text-muted-foreground"
                }`}
              >
                Partner / Sponsor
              </button>
            </div>
            {tab === "volunteer" ? <VolunteerForm /> : <PartnerForm />}
          </Reveal>
        </div>
      </section>

      {/* Upcoming events */}
      <section className="container-page py-16 sm:py-20">
        <Reveal className="max-w-xl">
          <p className="eyebrow">Upcoming</p>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl">Dates you can join</h2>
        </Reveal>
        <div className="mt-8 divide-y rounded-2xl border">
          {events.map((event, i) => (
            <Reveal
              key={event.title}
              delay={i * 80}
              as="div"
              className="flex flex-col gap-1 p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-display text-base">{event.title}</p>
                <p className="text-sm text-muted-foreground">{event.location}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                <Calendar className="size-3.5" aria-hidden="true" />
                {formatDate(event.date)}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/40 py-16 sm:py-20">
        <div className="container-page">
          <Reveal className="mx-auto max-w-xl text-center">
            <p className="eyebrow">Questions</p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl">Before you sign up</h2>
          </Reveal>
          <Reveal delay={100} className="mx-auto mt-10 max-w-2xl">
            <Accordion type="single" collapsible className="rounded-2xl border bg-card px-6">
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger className="text-left font-display text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
