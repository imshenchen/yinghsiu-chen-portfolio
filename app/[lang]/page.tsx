import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import About from "@/components/About";
import WritingSection from "@/components/WritingSection";
import ResumeCTA from "@/components/ResumeCTA";
import Footer from "@/components/Footer";
import SectionRule from "@/components/SectionRule";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;

  return (
    <>
      <Header lang={locale} pathname={`/${locale}`} />
      <main id="main">
        <Hero lang={locale} />
        <SectionRule weight="thick" />
        <ProjectsSection lang={locale} />
        <SectionRule weight="thick" />
        <About lang={locale} />
        <SectionRule weight="thick" />
        <WritingSection lang={locale} />
        <SectionRule weight="ultra" />
        <ResumeCTA lang={locale} />
      </main>
      <Footer lang={locale} />
    </>
  );
}
