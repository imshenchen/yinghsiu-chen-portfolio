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
  | "flow-gdpr"
  | "research-ai-iiot"
  | "arch-ai-iiot"
  | "eval-alarm"
  | "flow-serial"
  | "flow-parallel"
  | "compare-workflow"
  | "artifacts-workflow";

export type GalleryCaptionKey =
  | "prefillFieldsPanel"
  | "prefillAssignFields"
  | "statemachine"
  | "flowFrames"
  | "abTest"
  | "aiAgentSelect"
  | "aiThinkingFlow"
  | "aiChat"
  | "aiRag"
  | "aiModel"
  | "aiMcp"
  | "alarmList"
  | "alarmBell"
  | "alarmRules"
  | "alarmRuleEdit"
  | "alarmNotify"
  | "alarmEmail";

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
  /** 封面 logo 下方顯示的模組／子專案名稱。 */
  moduleName?: Bilingual;
  /** Hero 封面圖（16:9）。未提供時顯示佔位圖。 */
  cover?: string;
  lead: Bilingual;
  /** Brief — 專案需求來源 */
  source: Bilingual;
  /** Brief — 目標 */
  goal: Bilingual;
  /** Brief — 擔任角色 */
  role: Bilingual;
  /** Brief — 進行時間 */
  duration: Bilingual;
  /** Brief — 量化成果（條列）。未提供時隱藏整列。 */
  outcomeBullets?: BilingualList;
  /** 未提供時隱藏 meta 的 Client／Product 列。 */
  client?: Bilingual;
  /** meta 列標籤：預設用 client，設為 product 時顯示「Product / 產品」。 */
  clientLabel?: "client" | "product";
  stack: string;
  /** 受密碼保護：true 時專案內頁需輸入密碼才能查看（client-side soft gate）。 */
  locked?: boolean;
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
    slug: "ai-iiot-platform",
    number: "001",
    year: "2025",
    title: b(
      "機聯網平台 — AI Agent應用模組",
      "IIoT Platform — AI Agent Module",
    ),
    category: b("產品設計 · 系統架構", "Product Design · System Architecture"),
    moduleName: b("AI Agent應用模組", "AI Agent Module"),
    cover: "/projects/ai-iiot-thinking-flow.png",
    lead: b(
      "團隊預計在機聯網平台中，提供「本地端 AI 服務」應用模組：以不同種類的代理（Agent）為核心，提供 API、MCP 工具，以實現即時問答、圖表彙整等 AI 應用功能。",
      "The team plans to offer a “local AI Service” application module within the IIoT platform: agent-centric across different agent types, exposing APIs and MCP tools to enable AI features such as real-time Q&A and chart aggregation.",
    ),
    source: b(
      "團隊內部需求。",
      "Internal team requirement.",
    ),
    goal: b(
      "因應 AI 趨勢，團隊認為基礎的 AI 問答功能將成為下一代製造領域系統的基本功能，因此需快速開發一版應用模組，以在 2025 自動化展展出。",
      "Riding the AI trend, the team believed basic AI Q&A would become a baseline capability of next-generation manufacturing systems — so we needed to rapidly ship a version of the application module to exhibit at the 2025 Automation Show.",
    ),
    role: b("產品設計師", "Product Designer"),
    duration: b("2025", "2025"),
    outcomeBullets: bl(
      [
        "導入內部工廠，取得關鍵成果——成功減少 90% 以上人員手抄機台資料彙整報告時間，並完全避免手抄資料抄錯問題。",
      ],
      [
        "Deployed in an internal factory with a key result — cutting over 90% of the time staff spent manually transcribing machine data into aggregated reports, and fully eliminating transcription errors.",
      ],
    ),
    client: b(
      "設備自動化控制系統控制台 · 機聯網平台",
      "Equipment-Automation Control Console · IIoT Platform",
    ),
    clientLabel: "product",
    stack: "MCP · RAG",
    locked: true,
    gallery: [
      { kind: "diagram", id: "arch-ai-iiot" },
      {
        kind: "image",
        src: "/projects/ai-iiot-agent-select.png",
        alt: b("代理選擇與分類畫面", "Agent selection and categorization screen"),
        captionKey: "aiAgentSelect",
      },
      {
        kind: "image",
        src: "/projects/ai-iiot-chat.png",
        alt: b("設備排查對話畫面", "Equipment-troubleshooting chat screen"),
        captionKey: "aiChat",
      },
      {
        kind: "image",
        src: "/projects/ai-iiot-thinking-flow.png",
        alt: b("可視化思考流程畫面", "Visualized reasoning-flow screen"),
        captionKey: "aiThinkingFlow",
      },
      {
        kind: "image",
        src: "/projects/ai-iiot-rag.png",
        alt: b("代理管理與 RAG 知識庫畫面", "Agent management and RAG knowledge-base screen"),
        captionKey: "aiRag",
      },
      {
        kind: "image",
        src: "/projects/ai-iiot-model.png",
        alt: b("模型管理畫面", "Model management screen"),
        captionKey: "aiModel",
      },
      {
        kind: "image",
        src: "/projects/ai-iiot-mcp.png",
        alt: b("MCP 伺服器設定畫面", "MCP server setup screen"),
        captionKey: "aiMcp",
      },
      { kind: "diagram", id: "research-ai-iiot" },
    ],
    overview: b(
      "「AI 服務」是機聯網平台的一個應用模組，它以代理（Agent）為核心：使用者挑選合適的代理（設備排查、文檔問答、數據圖表、智能助手，或多代理組合）執行任務。\n\n此模組提供使用者建立內部知識庫，讓代理透過查找內部知識庫與機聯網平台內的設備資料，減少 AI 幻覺或錯誤資訊發生的可能性；知識庫與 LLM（大語言模型）皆可部署於廠內邊緣運算 IPC，確保資訊不外流。此外，透過設定 MCP 或 API，可讓代理具備更多功能，例如把現場的口語問題轉成對機聯網即時數據的查詢，甚至協助撰寫 PLC 程式碼等。",
      "The “AI Service” is an application module of the IIoT platform, built around agents: users pick a suitable agent (equipment troubleshooting, document Q&A, data charts, smart assistant, or a multi-agent combination) to carry out a task.\n\nThe module lets users build an internal knowledge base, so agents can answer by looking up that knowledge base alongside the device data inside the IIoT platform — reducing the chance of AI hallucination or wrong information. Both the knowledge base and the LLM can be deployed on the factory's edge-computing IPC, keeping information from leaving the premises. Beyond that, configuring MCP or APIs gives agents more capabilities — for example, turning spoken-language questions on the floor into queries against live IIoT data, or even helping write PLC code.",
    ),
    challenge: b(
      "需從頭理解目前團隊較不熟悉的技術框架。",
      "We had to understand, from the ground up, technical frameworks the team was relatively unfamiliar with.",
    ),
    approach: b(
      "把 AI 服務拆成四層——對話介面層承接互動、代理層決定由誰回答、推理與工具層透過 MCP 與模型把問題轉成查詢、資料層接機聯網真實數據與知識庫維護。",
      "I split the AI Service into four layers — a conversational interface layer for interaction, an agent layer that decides who answers, a reasoning-and-tools layer that turns questions into queries via MCP and the model, and a data layer wired to live IIoT data and knowledge-base maintenance.",
    ),
    outcome: b(
      "AI 服務以模組應用部署於機聯網平台，並讓 AI 可被使用者管理——代理、模型、MCP、資料集與問答回饋皆可設定與調校。邀請願意測試的內部廠端使用，並在使用一段時間後進行訪談搜集回饋。",
      "The AI Service is deployed on the IIoT platform as an application module, and AI becomes manageable by users — agents, models, MCP, datasets, and Q&A feedback are all configurable and tunable. We invited willing internal factory sites to try it, then ran interviews after a period of use to gather feedback.",
    ),
  },
  {
    slug: "workflow-transformation",
    number: "002",
    year: "2026",
    title: b(
      "開發團隊工作流程轉型 — 從瀑布式交付到 AI 共筆並行開發",
      "Dev Workflow Transformation — From Waterfall Delivery to AI-Assisted Parallel Development",
    ),
    category: b("流程設計 · 設計系統", "Process Design · Design System"),
    lead: b(
      "一場新的團隊工作流程實驗——透過與 AI 協作，把設計師的角色從「逐支功能畫設計稿」轉為維護一份前端共用元件庫與一份給 AI 讀的 design guide；團隊分工也從職能分工改為主責功能分工，每位成員都具備理解需求、撰寫 prd.md 到開發的能力，讓全團隊並行開發多支功能。這套流程首次實驗於一個時程緊迫的舊系統 migration 專案。",
      "A new experiment in team workflow — by collaborating with AI, the designer's role shifts from drawing mockups feature by feature to maintaining a shared front-end component library and an AI-readable design guide; the team's division of labor also moves from role-based to feature-ownership, where every member can understand requirements, write their own prd.md, and build — so the whole team develops multiple features in parallel. The workflow was first trialed on a time-pressured legacy-system migration project.",
    ),
    source: b(
      "團隊內部的開發瓶頸觀察。",
      "An internal observation of the team's development bottleneck.",
    ),
    goal: b(
      "設計師人力在團隊內佔比較少，通常一個 Sprint 設計師要同時處理 3–4 支小功能交付給前後端開發，若設計稿有延遲，整個團隊的開發速度就會停滯。目標是解決「設計產能＝團隊速度上限」的瓶頸。",
      "Designers are a small fraction of the team — in a single sprint, one designer often has to deliver 3–4 small features to front-end and back-end developers at once, so any delay in the mockups stalls the whole team's development speed. The goal is to break the bottleneck where design capacity equals the team's speed ceiling.",
    ),
    role: b("主導設計系統定義 · 流程重構", "Design System Lead · Process Redesign"),
    duration: b("2026", "2026"),
    outcomeBullets: bl(
      [
        "把設計師角色從逐支畫稿重定義為維護共用元件庫與 design guide",
        "建立給 AI 讀的設計規範（含間距系統、元件使用準則），讓 AI 產出可達 70% 以上符合既有設計系統",
        "流程從序列交付轉為多支功能並行開發，開發不再需要等設計師提供設計稿，每個人都轉為有能力釐清功能與開發",
      ],
      [
        "Redefined the designer's role from per-feature screen drawing to maintaining a shared component library and design guide",
        "Built an AI-readable design guide (spacing system, component-usage rules) so AI output reaches over 70% conformance with the existing design system",
        "Moved from serial delivery to parallel multi-feature development — development no longer waits on the designer for mockups, and everyone becomes capable of clarifying features and building",
      ],
    ),
    stack: "Figma · Storybook · Markdown · AI (Claude)",
    locked: true,
    gallery: [
      { kind: "diagram", id: "flow-serial" },
      { kind: "diagram", id: "flow-parallel" },
      { kind: "diagram", id: "compare-workflow" },
      { kind: "diagram", id: "artifacts-workflow" },
    ],
    overview: b(
      "在傳統的開發流程中，每一支功能都得先經過 product designer 收需求、定義範圍、產出設計稿與 PRD，前後端工程師才能動工。設計師是所有功能的單一入口，而當設計人力不足時，就成為整條產線的瓶頸——「設計師畫得多快」變成整個團隊的速度上限。\n\n這個專案把設計師的角色從「逐支功能的繪圖者」轉變為「共用基礎的維護者」：把可重複使用的設計決策一次性沉澱進元件庫與一份給 AI 讀的設計規範，再把功能規格的撰寫權交回給最了解該功能的開發者，讓各團隊的 AI 依共用文件並行產出，最後由團隊共同 review。",
      "In the traditional development flow, every feature had to pass through the product designer — gathering requirements, defining scope, producing mockups and a PRD — before front-end and back-end engineers could start. The designer was the single entry point for all features, and when design capacity ran short, became the bottleneck of the whole line: “how fast the designer draws” turned into the team's speed ceiling.\n\nThis project shifts the designer from “feature-by-feature illustrator” to “maintainer of shared foundations”: reusable design decisions are distilled once into a component library and an AI-readable design guide, spec-writing is handed back to the developers who understand each feature best, and each team's AI builds in parallel from the shared docs — with the team reviewing together at the end.",
    ),
    challenge: b(
      "觀察團隊組成結構，設計師是團隊內的少數——通常一個產品團隊有 2–3 名前端、3–5 位後端、1 位 SA、1 位設計師。每個 sprint 至少需同時開發 2–3 支功能，但每一支功能都得先經過設計師調研、定義、產出設計稿，設計師畫圖的速度很容易成為團隊開發速度的上限。",
      "Looking at the team's makeup, designers are a minority — a product team typically has 2–3 front-end engineers, 3–5 back-end engineers, 1 SA, and 1 designer. Each sprint needs at least 2–3 features built at once, yet every feature must first pass through the designer's research, definition, and mockups — so the designer's drawing speed easily becomes the ceiling on the team's development speed.",
    ),
    approach: b(
      "設計師原本已有一套共用元件庫，但只維護在 Figma 內，每次元件修改都得與前端討論並調整；AI 工具的加入，讓設計師有機會也具備開發元件的能力。而若只有共用元件庫，在缺乏設計師經驗的情況下，前端開發並不清楚版面要怎麼排才更符合體驗，因此由設計師額外維護一份 design guideline.md，讓前端開發者使用的 AI 能夠讀懂。\n\n此次流程轉型建立在三個支點上：讓設計師負責維護元件庫、把設計規範寫成 design guide.md 讓 AI 直接讀、把 PRD 拆成每支功能一份 prd.md 由開發者撰寫。新流程因此分成五步：設計師建立並維護共用基礎①、每位開發者各自撰寫 prd.md②、匯入共用文件池成為單一事實來源③、各團隊 AI 讀取共用文件並行開發多支功能④、團隊共同 review 後發布⑤。",
      "The designer already had a shared component library, but it lived only in Figma — every component change had to be discussed and adjusted with front-end, and the arrival of AI tools opened the chance for the designer to build components too. With only a component library, lacking a designer's instinct, front-end developers wouldn't know how to lay things out for a better experience — so the designer additionally maintained a design guideline.md that the front-end developers' AI could read.\n\nThe transformation rests on three pivots: have the designer maintain the component library, write the design spec as a design guide.md the AI reads directly, and split the PRD into one prd.md per feature authored by the developer. The new flow runs in five steps: the designer builds and maintains the shared foundation (1), each developer writes their own prd.md (2), these feed a shared context pool as a single source of truth (3), each team's AI reads the shared docs and builds multiple features in parallel (4), and the team reviews together before release (5).",
    ),
    outcome: b(
      "共用元件庫讓前端開發人員不用再額外分人力出來維護；design guide 讓 AI 產出的介面可達到基本的一致性，設計師不再需要逐支產出設計稿，只要審查 AI 產出的版面即可；全團隊人員都具備基本的設計與前端開發能力，可把更多精力花在理解需求與架構上。",
      "The shared component library means front-end no longer has to peel off dedicated headcount to maintain it; the design guide lets AI-generated interfaces reach a baseline consistency, so the designer no longer draws mockups feature by feature and just reviews the AI's layouts; and everyone on the team gains basic design and front-end development skills, freeing more energy for understanding requirements and architecture.",
    ),
  },
  {
    slug: "alarm-management",
    number: "003",
    year: "2025–2026",
    title: b(
      "機聯網平台 — 告警管理功能模組",
      "IIoT Platform — Alarm Management Module",
    ),
    category: b("產品設計 · 系統架構", "Product Design · System Architecture"),
    moduleName: b("告警管理功能模組", "Alarm Management Module"),
    cover: "/projects/alarm-list.png",
    lead: b(
      "規劃並整合 Grafana、Keep 等開源模組架構，並進行平台端事件中心（告警列表 / 小鈴鐺 / 渠道設定）的前端介面設計。",
      "Planned and integrated an open-source module architecture (Grafana, Keep), and designed the front-end interface for the platform's event center (alarm list / notification bell / channel settings).",
    ),
    source: b(
      "工廠內部用戶。",
      "Internal factory users.",
    ),
    goal: b(
      "一方面讓使用者能透過設定監控硬體設備（如 IPC 的 CPU、溫度）與系統（如資料庫）狀態，在符合告警條件時透過 Email、Teams 等渠道發出通知；另一方面提供 API，讓部署於平台的應用開發者能在應用內自行設定閾值，再交由告警模組統一發報。",
      "On one hand, let users monitor hardware (e.g. an IPC's CPU and temperature) and system status (e.g. a database) through configuration, and fire notifications via channels like Email and Teams when alarm conditions are met. On the other, expose an API so developers of apps deployed on the platform can set thresholds inside their own apps while the alarm module handles dispatch.",
    ),
    role: b("架構提案 · 產品功能設計", "Architecture Proposal · Product Feature Design"),
    duration: b("Phase 1 — 2025/11；Phase 2 — 2026/6", "Phase 1 — 2025/11; Phase 2 — 2026/6"),
    client: b(
      "AIOT機聯網平台",
      "AIoT IIoT Platform",
    ),
    clientLabel: "product",
    stack: "Grafana · Keep · React · MUI",
    locked: true,
    gallery: [
      { kind: "diagram", id: "eval-alarm" },
      {
        kind: "image",
        src: "/projects/alarm-list.png",
        alt: b("告警列表畫面", "Alarm list screen"),
        captionKey: "alarmList",
      },
      {
        kind: "image",
        src: "/projects/alarm-bell.png",
        alt: b("小鈴鐺通知列表畫面", "Notification bell list screen"),
        captionKey: "alarmBell",
      },
      {
        kind: "image",
        src: "/projects/alarm-rules.png",
        alt: b("告警規則設定列表畫面", "Alarm rule settings list screen"),
        captionKey: "alarmRules",
      },
      {
        kind: "image",
        src: "/projects/alarm-rule-edit.png",
        alt: b("規則設定編輯畫面", "Rule settings edit screen"),
        captionKey: "alarmRuleEdit",
      },
      {
        kind: "image",
        src: "/projects/alarm-notify.png",
        alt: b("Teams 通知設定編輯畫面", "Teams notification settings edit screen"),
        captionKey: "alarmNotify",
      },
      {
        kind: "image",
        src: "/projects/alarm-email.png",
        alt: b("Email 通知設定畫面", "Email notification settings screen"),
        captionKey: "alarmEmail",
      },
    ],
    overview: b(
      "AIOT 機聯網平台是一個部署於工廠內部的邊緣運算平台，底層為 microk8s 架構。平台主要負責搜集不同通訊協定的設備資料，整合後提供廠端查詢與利用；也讓使用者運用平台搜集的設備資料進行二次開發，並把客製化應用部署於此平台。\n\n告警管理模組是此平台的重要功能，負責監控設備、平台本身的 IPC 硬體、平台底層服務與應用狀態；當上述發生異常時，能透過特定渠道對特定對象發出通知。",
      "The AIoT IIoT platform is an edge-computing platform deployed inside the factory, built on a microk8s architecture. It mainly collects device data across different communication protocols, integrating it for query and use on the factory side; it also lets users build secondary applications on top of the collected device data and deploy those custom apps onto the platform.\n\nThe alarm-management module is a key capability of this platform: it monitors devices, the platform's own IPC hardware, the platform's underlying services, and application status — and when any of these goes wrong, it can send notifications to specific recipients through specific channels.",
    ),
    challenge: b(
      "最大的挑戰在於開源模組的選型與整合。Grafana、Keep 各有自己的功能與限制，彼此又有部分重疊——整個架構必須找出合理的切分點與串接方式，決定哪一段交給哪個模組。\n\n另一個挑戰在於提供友善的操作介面，不只是把各模組原生的介面內嵌進畫面，而要在平台上重新設計一套對使用者友善、語彙一致的體驗。",
      "The biggest challenge was selecting and integrating the open-source modules. Grafana and Keep each come with their own capabilities and limits, and they partly overlap — so the architecture had to find sensible split points and a way to wire them together, deciding which stage each module owns.\n\nThe other challenge was providing a friendly interface: rather than embedding each module's native UI into the screen, the platform needed a freshly designed, user-friendly experience with consistent vocabulary.",
    ),
    approach: b(
      "把告警鏈拆成五個階段——接收、狀態監控、規則設定、彙整發報、通知渠道——再針對其中兩個分歧點（規則引擎放哪、發報彙整放哪）並列評估四個架構方案，從彈性、第三方依賴、開發成本三個維度取捨，最後傾向解法二：以 Grafana 設規則、Keep 統一發報與彙整，兼顧查詢彈性與單一彙整入口。",
      "I split the alarm chain into five stages — ingest, monitoring, rule setup, aggregation & dispatch, and notification channels — then evaluated four architecture options side by side around the two divergence points (where the rule engine lives, where aggregation/dispatch lives), trading off flexibility, third-party dependency, and development cost. The preference landed on Solution 2: rules in Grafana, dispatch and aggregation unified in Keep — balancing query flexibility with a single aggregation entry point.",
    ),
    outcome: b(
      "最終決定 Phase 1 必須先實現四件事：告警中心設定——Keep、Email server 等基本連線設定；事件中心——彙整並列出所有告警；站內小鈴鐺——作為其中一個告警渠道，Phase 1 至少要能在站內收到告警；Email 通知——同上，Phase 1 至少要能指定收件人。規則設定與通知設定則留待 Phase 2。",
      "In the end, Phase 1 was scoped to deliver four things first: alarm-center setup — basic connection settings for Keep, the email server, and so on; the event center — aggregating and listing every alarm; the in-app notification bell — as one of the alarm channels, where Phase 1 must at least be able to receive alarms in-app; and email notifications — likewise, where Phase 1 must at least support specifying recipients. Rule setup and notification settings are deferred to Phase 2.",
    ),
  },
  {
    slug: "dottedsign-task-status",
    number: "004",
    year: "2022",
    title: b("點點簽 — 任務狀態架構擴充", "DottedSign — Task Status Architecture Expansion"),
    moduleName: b("任務狀態架構擴充", "Task Status Architecture"),
    cover: "/projects/task-status-statemachine.png",
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
    number: "005",
    year: "2022",
    title: b("點點簽 — 預填功能優化", "DottedSign — Prefill Feature Optimization"),
    moduleName: b("預填功能優化", "Prefill Optimization"),
    cover: "/projects/prefill-edit-mode.png",
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
