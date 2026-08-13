interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  const isCenter = align === 'center';
  return (
    <div
      className={`reveal max-w-2xl ${isCenter ? 'mx-auto text-center' : 'text-left'}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-volt-500">
          <span className="h-px w-6 bg-volt-500" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-3 font-display text-3xl font-extrabold uppercase tracking-tight sm:text-4xl lg:text-5xl ${
          light ? 'text-ink-950' : 'text-white'
        }`}
      >
        {title} {highlight && <span className="text-volt-500">{highlight}</span>}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? 'text-ink-700' : 'text-white/60'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
