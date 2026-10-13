import React from "react";

type JsonLdProps = {
  schema: Record<string, unknown> | Array<Record<string, unknown>>;
};

/**
 * Injects a validated JSON-LD schema object into the document.
 * Safely serialises JSON and protects against XSS string escapes.
 */
export default function JsonLd({ schema }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
