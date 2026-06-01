type Props = {
  index: string;
  label: string;
  body: string;
};

export default function ProjectSection({ index, label, body }: Props) {
  return (
    <section
      aria-labelledby={`sec-${label.toLowerCase()}`}
      className="grid grid-cols-1 gap-8 border-t border-[var(--color-border-light)] py-16 md:grid-cols-12 md:gap-10 md:py-20"
    >
      <div className="md:col-span-4">
        <p className="label-mono mb-4 text-[var(--color-muted-foreground)]">
          — {index}
        </p>
        <h2
          id={`sec-${label.toLowerCase()}`}
          className="font-display font-medium tracking-tight text-3xl md:text-4xl"
        >
          {label}
        </h2>
      </div>
      <p className="font-body text-lg leading-relaxed md:col-span-8 md:text-xl md:leading-[1.85]">
        {body}
      </p>
    </section>
  );
}
