import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { org, socials } from "@/data/site";
import { NewsletterForm } from "./NewsletterForm";

const quickLinks = [
  { to: "/about", label: "About Us" },
  { to: "/what-we-do", label: "What We Do" },
  { to: "/outreaches", label: "Our Outreaches" },
  { to: "/stories", label: "Stories" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/donate", label: "Donate" },
  { to: "/transparency", label: "Transparency" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl">{org.name}</p>
          <p className="mt-3 max-w-xs text-sm opacity-70">
            Skills, capital and community for widows and less-privileged women and children in Kogi
            State.
          </p>
          <p className="mt-4 text-xs opacity-60">{org.cac}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold tracking-wide uppercase opacity-80">Quick links</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="opacity-75 transition-opacity hover:opacity-100">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold tracking-wide uppercase opacity-80">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm opacity-80">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {org.address}
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <a href={`tel:${org.phone.replace(/\s/g, "")}`}>{org.phone}</a>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <a href={`mailto:${org.email}`}>{org.email}</a>
            </li>
          </ul>
          <ul className="mt-5 flex flex-wrap gap-4 text-sm">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="opacity-75 underline-offset-4 transition-opacity hover:opacity-100 hover:underline"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide uppercase opacity-80">
            Field notes, monthly
          </h2>
          <p className="mt-3 text-sm opacity-70">
            Stories from the training centre and the road. No fundraising noise.
          </p>
          <div className="mt-4">
            <NewsletterForm compact />
          </div>
        </div>
      </div>

      <div className="border-t border-current/15">
        <div className="container-page flex flex-col gap-2 py-6 text-xs opacity-60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {org.name}. All rights reserved.
          </p>
          <p>Registered non-governmental organisation, {org.city}</p>
        </div>
      </div>
    </footer>
  );
}
