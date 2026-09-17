import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/what-we-do", label: "What We Do" },
  { to: "/outreaches", label: "Outreaches" },
  { to: "/stories", label: "Stories" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/transparency", label: "Transparency" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || !overHero || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        solid
          ? "border-b bg-background/90 backdrop-blur-md shadow-[var(--shadow-soft)]"
          : "bg-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className="container-page flex h-18 items-center justify-between gap-6 py-3"
      >
        <Link
          to="/"
          className={cn(
            "font-display text-lg leading-tight transition-colors",
            solid ? "text-foreground" : "text-ink-foreground",
          )}
        >
          Veronika Bakoz
          <span className="block text-[0.62rem] tracking-[0.28em] uppercase opacity-70">
            Charity Foundation
          </span>
        </Link>

        <ul className="hidden items-center gap-6 xl:flex">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={cn(
                  "link-underline text-sm font-medium transition-colors",
                  solid ? "text-foreground/80 hover:text-foreground" : "text-ink-foreground/90",
                )}
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: link.to === "/" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/donate">
              <Heart className="size-4" aria-hidden="true" />
              Donate
            </Link>
          </Button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-md border transition-colors xl:hidden",
              solid ? "text-foreground" : "border-transparent text-ink-foreground",
            )}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t bg-background xl:hidden">
          <ul className="container-page grid gap-1 py-4">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
                  activeProps={{ className: "text-primary" }}
                  activeOptions={{ exact: link.to === "/" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild className="w-full">
                <Link to="/donate">Donate</Link>
              </Button>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
