import type { Bilingual, BilingualList } from "./i18n";

export type DiagramId =
  | "process-prefill"
  | "explore-prefill"
  | "define-prefill"
  | "design-prefill"
  | "onboarding-prefill"
  | "process-task-status"
  | "comparison-docusign"
  | "comparison-pandadoc"
  | "flow-current"
  | "flow-gdpr";

export type GalleryCaptionKey =
  | "prefillFieldsPanel"
  | "prefillAssignFields"
  | "statemachine"
  | "flowFrames"
  | "abTest";

export type GalleryBlock =
  | { kind: "image"; src: string; alt: Bilingual; captionKey?: GalleryCaptionKey }
  | {
      kind: "compare";
      a: { src: string; alt: Bilingual };
      b: { src: string; alt: Bilingual };
      captionKey?: GalleryCaptionKey;
    }
  | { kind: "diagram"; id: DiagramId };

export type Project = {
  slug: string;
  number: string;
  year: string;
  title: Bilingual;
  category: Bilingual;
  lead: Bilingual;
  /** Brief — 專案需求來源 */
  source: Bilingual;
  /** Brief — 目標 */
  goal: Bilingual;
  /** Brief — 擔任角色 */
  role: Bilingual;
  /** Brief — 進行時間 */
  duration: Bilingual;
  /** Brief — 量化成果（條列） */
  outcomeBullets: BilingualList;
  client: Bilingual;
  /** meta 列標籤：預設用 client，設為 product 時顯示「Product / 產品」。 */
  clientLabel?: "client" | "product";
  stack: string;
  link?: { label: string; href: string };
  /** Gallery 區塊（圖表重建 + 裁切圖片）。未提供時顯示 placeholder。 */
  gallery?: GalleryBlock[];
  overview: Bilingual;
  challenge: Bilingual;
  approach: Bilingual;
  outcome: Bilingual;
};

const b = (zhText: string, enText: string): Bilingual => ({
  zh: zhText,
  en: enText,
});

const bl = (zhArr: string[], enArr: string[]): BilingualList => ({
  zh: zhArr,
  en: enArr,
});

export const projects: Project[] = [
  {
    slug: "dottedsign-task-status",
    number: "001",
    year: "2022",
    title: b("點點簽 — 任務狀態架構擴充", "DottedSign — Task Status Architecture Expansion"),
    category: b("產品設計 · 資訊架構", "Product Design · Information Architecture"),
    lead: b(
      "隨產品擴張，原有的任務狀態系統已無法涵蓋遠端簽署與手動簽署的完整生命週期。重新梳理並擴充任務狀態架構，支援『簽署後』文件歸檔等情境。",
      "As the product grew, the original task-status system could no longer cover the full lifecycle of remote and manual signing. I restructured and expanded the task-status architecture to support scenarios like after-signing document archival.",
    ),
    source: b(
      "由內部產品團隊發起。",
      "Initiated by the internal product team.",
    ),
    goal: b(
      "讓透過遠端簽署或手動簽署建立的任務都能擁有完整的生命週期管理，特別是支援『簽署後』的文件歸檔需求。",
      "Give every task — whether created via remote signing or manual signature — complete lifecycle management, with particular support for after-signing document archival.",
    ),
    role: b("產品設計師", "Product Designer"),
    duration: b("2022 夏季（8 週）", "Summer 2022 (8 weeks)"),
    outcomeBullets: bl(
      [
        "產出兩份完整的任務狀態流程圖，涵蓋擴充後的狀態系統",
        "統一遠端簽署與手動簽署的任務生命週期",
        "補上『簽署後』歸檔狀態，讓任務從建立到封存皆可追溯",
      ],
      [
        "Delivered two complete task-status flow diagrams covering the expanded state system",
        "Unified the task lifecycle across remote and manual signing",
        "Added the after-signing archival state so tasks are traceable from creation to archive",
      ],
    ),
    client: b("點點簽 · 電子簽署 SaaS", "DottedSign · e-signature SaaS"),
    clientLabel: "product",
    stack: "Sketch · Figma",
    gallery: [
      { kind: "diagram", id: "process-task-status" },
      { kind: "diagram", id: "comparison-docusign" },
      { kind: "diagram", id: "comparison-pandadoc" },
      { kind: "diagram", id: "flow-current" },
      { kind: "diagram", id: "flow-gdpr" },
      {
        kind: "image",
        src: "/projects/task-status-statemachine.png",
        alt: b("完整任務狀態機", "Full task state machine"),
        captionKey: "statemachine",
      },
      {
        kind: "image",
        src: "/projects/task-status-flow-frames.png",
        alt: b("任務操作流程分鏡", "Task interaction flow frames"),
        captionKey: "flowFrames",
      },
    ],
    overview: b(
      "點點簽是一個電子簽名 SaaS 服務。產品上市初期主要服務簡短的外部簽署流程（例如：業務提供文件給客戶簽名，簽完後以 PDF 檔案保存）；而在產品用戶擴充後，更複雜的內部簽署情境需求開始增加（例如：多層級上級核准流程，需可退回修訂，並且有歸檔需求），因此團隊內部決定透過擴充任務狀態機來滿足複雜的內部簽署需求。\n\n在點點簽，『任務』指的是由發文者指派『誰該簽署、簽署什麼』的整包文件。隨著產品擴張，原本的任務狀態已不足以描述各種簽署路徑與後續處理，因此需要重新定義並擴充整套任務狀態架構。",
      "DottedSign is an e-signature SaaS. Early after launch it mainly served short external signing flows (for example, a salesperson sends a document to a client to sign, and the signed result is kept as a PDF). As the user base grew, demand for more complex internal signing scenarios increased (for example, multi-level manager approval flows that can be sent back for revision, with archival requirements) — so the team decided to expand the task state machine to meet these complex internal signing needs.\n\nIn DottedSign, a task is a complete document package in which the sender assigns who signs and what gets signed. As the product expanded, the existing task states could no longer describe the various signing paths and post-signing handling — so the entire task-status architecture had to be redefined and extended.",
    ),
    challenge: b(
      "原有的任務狀態系統是在產品早期設計的，無法涵蓋遠端簽署、手動簽署等新增情境，也缺少『簽署後』的歸檔狀態，導致部分任務的生命週期無法被完整描述。",
      "The original task-status system was designed early in the product's life and couldn't cover newer scenarios like remote and manual signing, nor an after-signing archival state — leaving parts of the task lifecycle undescribable.",
    ),
    approach: b(
      "重新盤點任務從建立、簽署到歸檔的所有可能路徑，把遠端簽署與手動簽署的流程對齊到同一套狀態語言，並補上『簽署後』的歸檔狀態，最後以兩份任務狀態流程圖收斂整體架構。",
      "I re-mapped every path a task takes from creation through signing to archival, aligned the remote- and manual-signing flows into a single state vocabulary, added the after-signing archival state, and consolidated the whole architecture into two task-status flow diagrams.",
    ),
    outcome: b(
      "擴充後的任務狀態架構以兩份流程圖完整呈現，讓遠端簽署與手動簽署建立的任務都能被一致地管理與追溯，並支援『簽署後』的文件歸檔需求。",
      "The expanded task-status architecture is captured in two flow diagrams, giving tasks from both remote and manual signing consistent management and traceability — and supporting after-signing document archival.",
    ),
  },
  {
    slug: "dottedsign-prefill",
    number: "002",
    year: "2022",
    title: b("點點簽 — 預填功能優化", "DottedSign — Prefill Feature Optimization"),
    category: b("產品設計 · 功能優化", "Product Design · Feature Optimization"),
    lead: b(
      "預填功能讓發文者在指派任務前先填好部分表單欄位，減輕簽署者的填寫負擔。透過客戶使用回饋重新檢視流程，針對痛點優化體驗。",
      "Prefill lets senders populate parts of the form before assigning a task, easing the load on signers. I revisited the flow through customer feedback and optimized the experience around the identified pain points.",
    ),
    source: b(
      "客戶透過前線業務夥伴提出痛點，由設計與前線業務夥伴合作分析優化方向。",
      "Clients raised pain points through frontline sales partners; design collaborated with them to analyze optimization directions.",
    ),
    goal: b(
      "在不增加發文者操作負擔的前提下，讓預填欄位更好設定、更貼近實際使用情境，進一步縮短簽署者完成表單的時間。",
      "Without adding effort for senders, make prefill fields easier to set up and closer to real usage — further shortening the time signers spend completing forms.",
    ),
    role: b("產品設計師", "Product Designer"),
    duration: b("2022 春季（2 週）", "Spring 2022 (2 weeks)"),
    outcomeBullets: bl(
      [
        "依客戶痛點重整預填欄位的設定流程",
        "產出兩份完整的預填介面流程／畫面稿",
        "縮短簽署者填寫表單的時間，降低重複輸入",
      ],
      [
        "Reworked the prefill field setup flow around customer pain points",
        "Delivered two complete prefill interface flow/screen mockups",
        "Cut the time signers spend on forms by reducing repeated input",
      ],
    ),
    client: b("點點簽 · 電子簽署 SaaS", "DottedSign · e-signature SaaS"),
    clientLabel: "product",
    stack: "Sketch · Figma",
    gallery: [
      { kind: "diagram", id: "process-prefill" },
      { kind: "diagram", id: "explore-prefill" },
      {
        kind: "compare",
        a: { src: "/projects/prefill-ab-a.png", alt: b("方案 A", "Option A") },
        b: { src: "/projects/prefill-ab-b.png", alt: b("方案 B", "Option B") },
        captionKey: "abTest",
      },
      { kind: "diagram", id: "define-prefill" },
      { kind: "diagram", id: "design-prefill" },
      { kind: "diagram", id: "onboarding-prefill" },
    ],
    overview: b(
      "點點簽是一個電子簽名 SaaS 產品，使用者可以上傳 PDF 文件，並在上面加入填寫與簽名欄位。隨著產品客戶越來越多樣化，不同客戶開始有各自的簽署流程；其中預填功能便是客戶主動透過業務人員提出的需求——在保險或金融情境中，業務人員會先協助客戶填好部分欄位，方便客戶快速回簽。\n\n預填（Prefill）讓發文者在指派任務時，能針對特定欄位類型預先填入內容，減少簽署者完成表單所需的時間。此次優化以上線後的客戶使用數據與回饋為基礎，重新檢視預填的設定與使用流程。",
      "DottedSign is an e-signature SaaS product where users upload a PDF and add fill-in and signature fields on top of it. As the customer base grew more diverse, different customers brought their own signing flows; prefill was one such need, raised by customers through the sales team — in insurance and finance scenarios, salespeople fill in some fields in advance so the customer can sign back quickly.\n\nPrefill lets senders pre-populate specific field types when assigning a task, reducing the time signers need to complete the form. This optimization was grounded in post-launch customer usage data and feedback, revisiting how prefill is set up and used.",
    ),
    challenge: b(
      "原有的預填功能雖能減少簽署者負擔，但在實際使用中浮現多個痛點——客戶透過前線業務夥伴反映設定不夠直覺、難以對應真實表單情境，需要在短時間內收斂出優化方向。",
      "The original prefill reduced signer effort, but real-world use surfaced several pain points — clients reported, via frontline sales partners, that setup wasn't intuitive and didn't map well to real form scenarios, requiring optimization directions to converge quickly.",
    ),
    approach: b(
      "與前線業務夥伴一起把客戶回饋的痛點分類、排序，鎖定最高頻的設定情境，重新設計預填欄位的指派與填寫流程，並以兩份介面稿收斂方案。",
      "Working with frontline sales partners, I categorized and prioritized the customer pain points, focused on the highest-frequency setup scenarios, redesigned the prefill assignment and entry flow, and consolidated the solution into two interface mockups.",
    ),
    outcome: b(
      "優化後的預填流程更貼近客戶實際的表單情境，讓發文者更容易設定、簽署者更快完成，整體降低了重複輸入造成的摩擦。",
      "The optimized prefill flow maps more closely to clients' real form scenarios — easier for senders to set up, faster for signers to complete, and with less friction from repeated input overall.",
    ),
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: Project;
  next: Project;
} {
  const i = projects.findIndex((p) => p.slug === slug);
  const next = projects[(i + 1) % projects.length];
  const prev = projects[(i - 1 + projects.length) % projects.length];
  return { prev, next };
}
