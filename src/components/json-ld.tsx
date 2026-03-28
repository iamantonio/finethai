// JSON-LD structured data component for SEO.
// The data prop is a compile-time constant from our own codebase (not user input),
// so dangerouslySetInnerHTML is safe here — no untrusted content is rendered.
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
