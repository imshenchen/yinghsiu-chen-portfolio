export type Article = {
  title: string;
  link: string;
  date: string; // ISO
  categories: string[];
};

const MEDIUM_FEED = "https://medium.com/feed/@yhuxchen";
const MEDIUM_PROFILE = "https://medium.com/@yhuxchen";

export const MEDIUM_URL = MEDIUM_PROFILE;

/**
 * Fetch the latest Medium articles from the public RSS feed.
 * Revalidates every hour. Returns an empty list on any failure
 * (network, parse error, etc.) so the page never breaks.
 */
export async function getLatestArticles(limit = 3): Promise<Article[]> {
  try {
    const res = await fetch(MEDIUM_FEED, {
      next: { revalidate: 3600 },
      headers: { Accept: "application/rss+xml, text/xml, */*" },
    });
    if (!res.ok) return [];
    const xml = await res.text();
    return parseRss(xml).slice(0, limit);
  } catch {
    return [];
  }
}

function parseRss(xml: string): Article[] {
  const items: Article[] = [];
  const itemRe = /<item>([\s\S]*?)<\/item>/g;
  let m: RegExpExecArray | null;
  while ((m = itemRe.exec(xml))) {
    const block = m[1];
    const title = extractCdata(block, "title") ?? "";
    const link = (extract(block, "link") ?? "").split("?")[0];
    const pub = extract(block, "pubDate") ?? "";
    const categories = extractAllCdata(block, "category");
    if (!title || !link) continue;
    items.push({
      title: decode(title),
      link,
      date: pub ? new Date(pub).toISOString() : "",
      categories,
    });
  }
  return items;
}

function extract(block: string, tag: string): string | null {
  const re = new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`);
  const m = re.exec(block);
  return m ? m[1].trim() : null;
}

function extractCdata(block: string, tag: string): string | null {
  const re = new RegExp(`<${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`);
  const m = re.exec(block);
  return m ? m[1].trim() : extract(block, tag);
}

function extractAllCdata(block: string, tag: string): string[] {
  const re = new RegExp(
    `<${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`,
    "g",
  );
  const out: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(block))) out.push(m[1].trim());
  return out;
}

function decode(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

export function formatDate(iso: string, lang: "zh" | "en"): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  if (lang === "zh") {
    return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
  }
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
