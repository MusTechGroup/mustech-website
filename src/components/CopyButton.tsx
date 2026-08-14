"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
  textToCopy: string;
  ariaLabel?: string;
  title?: string;
}

export default function CopyButton({ textToCopy, ariaLabel = "Copy to clipboard", title = "Copy" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button 
      onClick={handleCopy}
      className="text-[var(--color-primary-dark)] hover:text-[var(--color-primary)] p-1 transition-colors"
      title={title}
      aria-label={ariaLabel}
    >
      {copied ? <Check className="w-4 h-4 text-[var(--color-primary)]" /> : <Copy className="w-4 h-4" />}
    </button>
  );
}
