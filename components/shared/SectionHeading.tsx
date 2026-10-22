export function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-navy md:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-7 text-muted md:text-lg">{text}</p> : null}
    </div>
  );
}
