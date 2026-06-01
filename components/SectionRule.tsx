type Props = {
  weight?: "thick" | "ultra" | "thin" | "hairline";
};

const weights = {
  hairline: "h-px bg-[var(--color-border-light)]",
  thin: "h-px bg-[var(--color-foreground)]",
  thick: "h-1 bg-[var(--color-foreground)]",
  ultra: "h-2 bg-[var(--color-foreground)]",
} as const;

export default function SectionRule({ weight = "thick" }: Props) {
  return <div role="separator" aria-hidden className={weights[weight]} />;
}
