"use client";

import { useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button type="button" onClick={copy} className="btn btn-white">
      {copied ? "Adresse copiée ✓" : email}
      <span className="sr-only" role="status">
        {copied ? "Adresse e-mail copiée" : "Copier l’adresse e-mail"}
      </span>
    </button>
  );
}
