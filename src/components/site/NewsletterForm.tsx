import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const schema = z.string().trim().email("Please enter a valid email address").max(255);

export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");

  return (
    <form
      className={compact ? "flex flex-col gap-2 sm:flex-row" : "flex flex-col gap-3 sm:flex-row"}
      onSubmit={(e) => {
        e.preventDefault();
        const result = schema.safeParse(email);
        if (!result.success) {
          toast.error(result.error.issues[0].message);
          return;
        }
        toast.success("Thank you — you're on the list.");
        setEmail("");
      }}
    >
      <label className="sr-only" htmlFor={compact ? "newsletter-compact" : "newsletter"}>
        Email address
      </label>
      <Input
        id={compact ? "newsletter-compact" : "newsletter"}
        type="email"
        required
        maxLength={255}
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-11"
      />
      <Button type="submit" className="h-11 shrink-0">
        Subscribe
      </Button>
    </form>
  );
}
