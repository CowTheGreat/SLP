import React from "react";
import {
  VscRepoForked,
  VscCode,
  VscGitPullRequest,
  VscRepo,
  VscGitMerge,
  VscPerson,
  VscWarning,
  VscGraph,
} from "react-icons/vsc";

export function About() {
  return (
    <div className="pt-16">
      <HeroSection />
      <AdminSection />
      <ContributorSection />
      <WorkflowSection />
      <EvaluationSection />
    </div>
  );
}

// Hero Section
const HeroSection = () => (
  <section className="relative py-28 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
    <div className="container mx-auto px-4 text-center relative z-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-6xl font-bold text-[#7ed957] mb-6 animate-fade-in-up">
          About SLP
        </h1>
        <p className="text-gray-300 text-xl leading-relaxed mb-8 animate-fade-in-up delay-100">
          Svce Learners Platform is a gateway to open-source excellence, bridging
          student innovation with real-world development through structured
          collaboration.
        </p>
        <div className="animate-fade-in-up delay-200">
          <div className="inline-block bg-[#7ed957]/10 rounded-full p-4 border border-[#7ed957]/20">
            <VscRepo className="h-16 w-16 text-[#7ed957]" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Admin Section
const AdminSection = () => (
  <SectionLayout title="Project Admins" theme="light">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <FeatureCard
        icon={<VscRepo className="h-8 w-8" />}
        title="Repository Architecture"
        content="Crafting organized repositories with comprehensive documentation and contribution guidelines."
      />
      <FeatureCard
        icon={<VscGitMerge className="h-8 w-8" />}
        title="PR Management"
        content="Rigorous review process ensuring code quality and alignment with project objectives."
      />
      <FeatureCard
        icon={<VscPerson className="h-8 w-8" />}
        title="Mentorship Network"
        content="Strategic mentor assignments for personalized contributor guidance."
      />
      <FeatureCard
        icon={<VscWarning className="h-8 w-8" />}
        title="Conflict Resolution"
        content="Expert handling of merge conflicts and code integration challenges."
      />
      <FeatureCard
        icon={<VscGraph className="h-8 w-8" />}
        title="Contribution Scoring"
        content="Transparent evaluation system based on technical merit and impact."
      />
    </div>
  </SectionLayout>
);

// Contributor Section
const ContributorSection = () => (
  <SectionLayout title="Contributors" theme="dark">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <ProcessStep
        number={1}
        title="Repository Forking"
        content="Create personal project copy with full development control"
      />
      <ProcessStep
        number={2}
        title="Branch Strategy"
        content="Isolated feature branches for clean development workflow"
      />
      <ProcessStep
        number={3}
        title="Code Evolution"
        content="Iterative development with atomic commits"
      />
      <ProcessStep
        number={4}
        title="Sync & Collaborate"
        content="Continuous integration with upstream changes"
      />
    </div>
  </SectionLayout>
);

// Workflow Section
const WorkflowSection = () => (
  <SectionLayout title="Development Workflow" theme="light">
    <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">
      <WorkflowPhase
        phase="Setup"
        steps={["Fork Repository", "Clone Locally", "Initialize Branch"]}
        icon={<VscRepoForked className="h-12 w-12" />}
      />
      <WorkflowPhase
        phase="Development"
        steps={["Implement Features", "Commit Changes", "Sync Upstream"]}
        icon={<VscCode className="h-12 w-12" />}
      />
      <WorkflowPhase
        phase="Submission"
        steps={["Push Changes", "Create PR", "Address Feedback"]}
        icon={<VscGitPullRequest className="h-12 w-12" />}
      />
    </div>
  </SectionLayout>
);

// Evaluation Section
const EvaluationSection = () => (
  <SectionLayout title="Evaluation Metrics" theme="dark">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <MetricCard
        title="Code Quality"
        percentage={40}
        description="Readability and maintainability"
      />
      <MetricCard
        title="Complexity"
        percentage={30}
        description="Technical challenge level"
      />
      <MetricCard
        title="Guideline Adherence"
        percentage={20}
        description="Following best practices"
      />
      <MetricCard
        title="Timeliness"
        percentage={10}
        description="Meeting deadlines"
      />
    </div>
  </SectionLayout>
);

// Reusable Components

// Section Layout
interface SectionLayoutProps {
  title: string;
  children: React.ReactNode;
  theme?: "light" | "dark";
}

const SectionLayout = ({ title, children, theme }: SectionLayoutProps) => (
  <section className={`py-20 ${theme === "dark" ? "bg-[#1a1a1a]" : "bg-[#0f0f0f]"}`}>
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-16 relative">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7ed957] to-[#5fa847]">
          {title}
        </span>
        <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 h-1 w-24 bg-[#7ed957] rounded-full" />
      </h2>
      {children}
    </div>
  </section>
);

// Feature Card
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const FeatureCard = ({ icon, title, content }: FeatureCardProps) => (
  <div className="group bg-[#1a1a1a] rounded-xl p-8 border border-[#2a2a2a] hover:border-[#7ed957]/40 transition-all duration-300 hover:-translate-y-2">
    <div className="mb-4 text-[#7ed957] group-hover:text-[#9eff6b] transition-colors">
      {icon}
    </div>
    <h3 className="text-2xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{content}</p>
  </div>
);

// Process Step
interface ProcessStepProps {
  number: number;
  title: string;
  content: string;
}

const ProcessStep = ({ number, title, content }: ProcessStepProps) => (
  <div className="flex items-start gap-6 p-6 bg-[#242424] rounded-xl border border-[#333333] hover:border-[#7ed957]/40 transition-colors">
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#7ed957] flex items-center justify-center text-black font-bold">
      {number}
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{content}</p>
    </div>
  </div>
);

// Workflow Phase
interface WorkflowPhaseProps {
  phase: string;
  steps: string[];
  icon: React.ReactNode;
}

const WorkflowPhase = ({ phase, steps, icon }: WorkflowPhaseProps) => (
  <div className="flex-1 bg-[#1a1a1a] rounded-xl p-8 border border-[#333333]">
    <div className="mb-6 text-[#7ed957] text-4xl">{icon}</div>
    <h3 className="text-2xl font-bold mb-6">{phase}</h3>
    <ul className="space-y-4">
      {steps.map((step: string, index: number) => (
        <li key={index} className="flex items-center gap-3 text-gray-400">
          <div className="w-2 h-2 rounded-full bg-[#7ed957]" />
          {step}
        </li>
      ))}
    </ul>
  </div>
);

// Metric Card
interface MetricCardProps {
  title: string;
  percentage: number;
  description: string;
}

const MetricCard = ({ title, percentage, description }: MetricCardProps) => (
  <div className="relative bg-[#242424] rounded-xl p-8 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-1 bg-[#7ed957]/20">
      <div
        className="h-full bg-[#7ed957] transition-all duration-1000"
        style={{ width: `${percentage}%` }}
      />
    </div>
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <div className="text-4xl font-bold text-[#7ed957] mb-3">{percentage}%</div>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default About;