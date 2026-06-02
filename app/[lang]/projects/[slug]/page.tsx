import { notFound } from "next/navigation";
import { isLocale, getMessages, pick, type Locale } from "@/lib/i18n";
import { getProject, getAdjacentProjects, projects } from "@/lib/projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionRule from "@/components/SectionRule";
import ProjectTitleBlock from "@/components/project/ProjectTitleBlock";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectBrief from "@/components/project/ProjectBrief";
import ProjectMeta from "@/components/project/ProjectMeta";
import ProjectBody from "@/components/project/ProjectBody";
import ProjectSection from "@/components/project/ProjectSection";
import ProjectGallery from "@/components/project/ProjectGallery";
import ProjectGate from "@/components/project/ProjectGate";
import NextProject from "@/components/project/NextProject";

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const lang of ["zh", "en"] as const) {
    for (const p of projects) params.push({ lang, slug: p.slug });
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${pick(project.title, lang as Locale)} — Portfolio`,
    description: pick(project.lead, lang as Locale),
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const project = getProject(slug);
  if (!project) notFound();
  const t = getMessages(locale);
  const { next } = getAdjacentProjects(slug);

  return (
    <>
      <Header lang={locale} pathname={`/${locale}/projects/${slug}`} />
      <ProjectGate locked={project.locked} lang={locale}>
      <main id="main">
        <ProjectTitleBlock lang={locale} project={project} />
        <ProjectHero project={project} />
        <ProjectBrief lang={locale} project={project} />

        <section className="texture-lines relative">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 md:grid-cols-12 md:gap-10 md:px-10 md:py-32 lg:px-14">
            <div className="md:col-span-4">
              <p className="label-mono mb-6 text-[var(--color-muted-foreground)]">
                — {t.project.overview}
              </p>
              <ProjectMeta lang={locale} project={project} />
            </div>
            <div className="md:col-span-8">
              <ProjectBody lang={locale} project={project} />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
          <ProjectSection
            index="01"
            label={t.project.challenge}
            body={pick(project.challenge, locale)}
          />
          <ProjectSection
            index="02"
            label={t.project.approach}
            body={pick(project.approach, locale)}
          />
          <ProjectSection
            index="03"
            label={t.project.outcome}
            body={pick(project.outcome, locale)}
          />
          <ProjectGallery lang={locale} project={project} />
        </section>

        <SectionRule weight="ultra" />
        <NextProject lang={locale} project={next} />
      </main>
      </ProjectGate>
      <Footer lang={locale} />
    </>
  );
}
