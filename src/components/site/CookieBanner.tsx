import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const KEY = "vbcf-cookie-consent";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      /* storage unavailable */
    }
  }, []);

  if (!show) return null;

  const decide = (value: string) => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
    setShow(false);
  };

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-3 bottom-3 z-50 rounded-xl border bg-card p-4 shadow-[var(--shadow-lift)] md:inset-x-auto md:right-6 md:bottom-6 md:max-w-md"
    >
      <p className="text-sm text-muted-foreground">
        We use a few essential cookies to keep this site working, and optional ones to understand
        how visitors find our stories.
      </p>
      <div className="mt-3 flex gap-2">
        <Button size="sm" onClick={() => decide("all")}>
          Accept all
        </Button>
        <Button size="sm" variant="outline" onClick={() => decide("essential")}>
          Essential only
        </Button>
      </div>
    </div>
  );
}
