import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n";

type FlowNode = {
  id: string;
  label: string;
  x: number;
  y: number;
  w?: number;
  h?: number;
  deletable?: boolean;
};
type FlowEdge = {
  from: string;
  to: string;
  kind: "manual" | "system";
  label?: string;
};
type FlowData = { nodes: FlowNode[]; edges: FlowEdge[]; w: number; h: number };

const NW = 120;
const NH = 46;

const FLOWS: Record<"current" | "gdpr", FlowData> = {
  current: {
    w: 720,
    h: 450,
    nodes: [
      { id: "draft", label: "Draft", x: 300, y: 40, deletable: true },
      { id: "voided", label: "Voided", x: 110, y: 155, deletable: true },
      { id: "waiting", label: "Waiting", x: 300, y: 155, deletable: true },
      { id: "declined", label: "Declined", x: 490, y: 155 },
      { id: "expired", label: "Expired", x: 110, y: 270, deletable: true },
      { id: "completed", label: "Completed", x: 300, y: 270, deletable: true },
      { id: "archive", label: "Archive Action", x: 300, y: 400, w: 190 },
      { id: "deleteAction", label: "Delete Action", x: 620, y: 270, w: 140 },
      { id: "deleted", label: "Deleted", x: 620, y: 400 },
    ],
    edges: [
      { from: "draft", to: "waiting", kind: "manual" },
      { from: "waiting", to: "voided", kind: "manual" },
      { from: "waiting", to: "declined", kind: "manual" },
      { from: "waiting", to: "expired", kind: "system" },
      { from: "waiting", to: "completed", kind: "manual" },
      { from: "voided", to: "archive", kind: "manual" },
      { from: "expired", to: "archive", kind: "manual" },
      { from: "declined", to: "archive", kind: "manual" },
      { from: "completed", to: "archive", kind: "manual" },
      { from: "deleteAction", to: "deleted", kind: "system", label: "Trash: 14 days" },
    ],
  },
  gdpr: {
    w: 640,
    h: 450,
    nodes: [
      { id: "draft", label: "Draft", x: 300, y: 40 },
      { id: "delete", label: "Delete", x: 110, y: 155 },
      { id: "waiting", label: "Waiting", x: 300, y: 155 },
      { id: "declined", label: "Declined", x: 490, y: 155 },
      { id: "expired", label: "Expired", x: 110, y: 270 },
      { id: "completed", label: "Completed", x: 300, y: 270 },
      { id: "gdpr", label: "GDPR Delete", x: 300, y: 400, w: 160 },
    ],
    edges: [
      { from: "draft", to: "waiting", kind: "manual" },
      { from: "waiting", to: "delete", kind: "manual" },
      { from: "waiting", to: "declined", kind: "manual" },
      { from: "waiting", to: "expired", kind: "system" },
      { from: "waiting", to: "completed", kind: "manual" },
      { from: "expired", to: "delete", kind: "manual" },
      { from: "expired", to: "gdpr", kind: "manual" },
      { from: "completed", to: "gdpr", kind: "manual" },
      { from: "declined", to: "gdpr", kind: "manual" },
    ],
  },
};

/** Point on a node's border in the direction of (tx, ty). */
function border(n: Required<Pick<FlowNode, "x" | "y">> & { w: number; h: number }, tx: number, ty: number) {
  const dx = tx - n.x;
  const dy = ty - n.y;
  const hw = n.w / 2;
  const hh = n.h / 2;
  if (dx === 0) return { x: n.x, y: n.y + Math.sign(dy) * hh };
  const slope = dy / dx;
  if (Math.abs(slope) <= hh / hw) {
    const sx = Math.sign(dx);
    return { x: n.x + sx * hw, y: n.y + slope * sx * hw };
  }
  const sy = Math.sign(dy);
  return { x: n.x + (sy * hh) / slope, y: n.y + sy * hh };
}

export default function StatusFlow({
  lang,
  variant,
}: {
  lang: Locale;
  variant: "current" | "gdpr";
}) {
  const t = getMessages(lang);
  const f = t.gallery.flow;
  const meta = variant === "current" ? f.current : f.gdpr;
  const data = FLOWS[variant];
  const dim = (n: FlowNode) => ({ x: n.x, y: n.y, w: n.w ?? NW, h: n.h ?? NH });
  const byId = (id: string) => data.nodes.find((n) => n.id === id)!;

  return (
    <figure className="m-0">
      <figcaption className="label-mono mb-3 text-[var(--color-muted-foreground)]">
        {meta.title}
      </figcaption>
      <p className="mb-6 max-w-prose text-sm leading-relaxed text-[var(--color-muted-foreground)]">
        {meta.intro}
      </p>

      <div className="mb-6 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm">
        <span className="inline-flex items-center gap-2">
          <svg width="34" height="10" aria-hidden>
            <line x1="0" y1="5" x2="26" y2="5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M26 1 L33 5 L26 9 Z" fill="currentColor" />
          </svg>
          {f.legendManual}
        </span>
        <span className="inline-flex items-center gap-2">
          <svg width="34" height="10" aria-hidden>
            <line x1="0" y1="5" x2="26" y2="5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
            <path d="M26 1 L33 5 L26 9 Z" fill="currentColor" />
          </svg>
          {f.legendSystem}
        </span>
        {variant === "current" && (
          <span className="inline-flex items-center gap-2">
            <svg width="12" height="12" aria-hidden>
              <circle cx="6" cy="6" r="4" fill="currentColor" />
            </svg>
            {f.legendDeletable}
          </span>
        )}
      </div>

      <svg
        viewBox={`0 0 ${data.w} ${data.h}`}
        className="w-full"
        role="img"
        aria-label={meta.title}
      >
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" fill="var(--color-foreground)" />
          </marker>
        </defs>

        {data.edges.map((e) => {
          const a = dim(byId(e.from));
          const b = dim(byId(e.to));
          const p1 = border(a, b.x, b.y);
          const p2 = border(b, a.x, a.y);
          const mx = (p1.x + p2.x) / 2;
          const my = (p1.y + p2.y) / 2;
          return (
            <g key={`${e.from}-${e.to}`}>
              <line
                x1={p1.x}
                y1={p1.y}
                x2={p2.x}
                y2={p2.y}
                stroke="var(--color-foreground)"
                strokeWidth="1.5"
                strokeDasharray={e.kind === "system" ? "5 4" : undefined}
                markerEnd="url(#arrow)"
              />
              {e.label && (
                <text
                  x={mx + 6}
                  y={my - 4}
                  fontSize="11"
                  fill="var(--color-muted-foreground)"
                >
                  {e.label}
                </text>
              )}
            </g>
          );
        })}

        {data.nodes.map((n) => {
          const d = dim(n);
          return (
            <g key={n.id}>
              <rect
                x={d.x - d.w / 2}
                y={d.y - d.h / 2}
                width={d.w}
                height={d.h}
                fill="var(--color-background)"
                stroke="var(--color-foreground)"
                strokeWidth="1.5"
              />
              <text
                x={d.x}
                y={d.y}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="14"
                fontWeight="600"
                fill="var(--color-foreground)"
              >
                {n.label}
              </text>
              {n.deletable && (
                <circle cx={d.x + d.w / 2 - 8} cy={d.y - d.h / 2 + 8} r="4" fill="var(--color-foreground)" />
              )}
            </g>
          );
        })}
      </svg>
    </figure>
  );
}
