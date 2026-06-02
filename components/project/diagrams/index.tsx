import type { ReactNode } from "react";
import type { DiagramId } from "@/lib/projects";
import type { Locale } from "@/lib/i18n";
import ProcessDiagram from "./ProcessDiagram";
import PrefillExplore from "./PrefillExplore";
import PrefillDefine from "./PrefillDefine";
import PrefillDesign from "./PrefillDesign";
import PrefillOnboarding from "./PrefillOnboarding";
import ComparisonTable from "./ComparisonTable";
import StatusFlow from "./StatusFlow";
import ResearchInsights from "./ResearchInsights";
import ArchLayers from "./ArchLayers";
import AlarmEval from "./AlarmEval";
import WorkflowSerial from "./WorkflowSerial";
import WorkflowParallel from "./WorkflowParallel";
import WorkflowCompare from "./WorkflowCompare";
import WorkflowArtifacts from "./WorkflowArtifacts";

export const diagramRegistry: Record<
  DiagramId,
  (lang: Locale) => ReactNode
> = {
  "process-prefill": (lang) => <ProcessDiagram lang={lang} variant="prefill" />,
  "explore-prefill": (lang) => <PrefillExplore lang={lang} />,
  "define-prefill": (lang) => <PrefillDefine lang={lang} />,
  "design-prefill": (lang) => <PrefillDesign lang={lang} />,
  "onboarding-prefill": (lang) => <PrefillOnboarding lang={lang} />,
  "process-task-status": (lang) => (
    <ProcessDiagram lang={lang} variant="taskStatus" />
  ),
  "comparison-docusign": (lang) => (
    <ComparisonTable lang={lang} variant="docusign" />
  ),
  "comparison-pandadoc": (lang) => (
    <ComparisonTable lang={lang} variant="pandadoc" />
  ),
  "flow-current": (lang) => <StatusFlow lang={lang} variant="current" />,
  "flow-gdpr": (lang) => <StatusFlow lang={lang} variant="gdpr" />,
  "research-ai-iiot": (lang) => <ResearchInsights lang={lang} />,
  "arch-ai-iiot": (lang) => <ArchLayers lang={lang} />,
  "eval-alarm": (lang) => <AlarmEval lang={lang} />,
  "flow-serial": (lang) => <WorkflowSerial lang={lang} />,
  "flow-parallel": (lang) => <WorkflowParallel lang={lang} />,
  "compare-workflow": (lang) => <WorkflowCompare lang={lang} />,
  "artifacts-workflow": (lang) => <WorkflowArtifacts lang={lang} />,
};
