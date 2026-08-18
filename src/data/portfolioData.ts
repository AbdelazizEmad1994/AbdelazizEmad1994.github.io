import { ExperienceItem, WorkProcessStep, SkillCategory, BpmnNode } from '../types';
import headshotImage from '../assets/images/abdelaziz_headshot_1786433288101.jpg';

// Google Drive CV link — Replace with your public Google Drive CV URL after downloading code
export const GOOGLE_DRIVE_CV_URL = "https://drive.google.com/file/d/1hr2Q0S1ZKyU77WJqBVTHp0absF9-eNHj/view?usp=sharing";

export const PERSONAL_INFO = {
  name: "Abdelaziz Emad",
  roleSubline: "Product Owner | Business Analyst",
  positioningStatement: "Product Owner & Business Analyst with a cross-industry background in digital health, fintech, and enterprise platforms. Experienced in leading product discovery, backlog management, and cross-functional delivery within Agile environments.",
  location: "Tanta, Egypt — Open to Relocation",
  email: "abdelaziz.emadnegm@gmail.com",
  phone: "+(20) 1159092726",
  phoneRaw: "+201159092726",
  whatsappUrl: "https://wa.me/201159092726",
  github: "https://github.com/AbdelazizEmad1994",
  linkedin: "https://www.linkedin.com/in/abdelaziz-emad-541296105/",
  headshotImg: headshotImage,
  pullQuote: "I turn complex operational and clinical workflows into product requirements that engineering teams can actually build.",
  aboutParagraphs: [
    "Product Owner & Business Analyst with a cross-industry background in digital health, fintech, and enterprise platforms. Experienced in leading product discovery, backlog management, and cross-functional delivery within Agile environments.",
    "Proven ability to bridge business objectives with technical execution — translating complex operational workflows into structured, actionable product requirements, user stories, and acceptance criteria that drive measurable delivery outcomes.",
    "Holds hands-on full-stack development training from the Information Technology Institute (ITI) for .NET and the Digital Egypt Pioneers Initiative (DEPI) for front-end engineering, along with a B.Sc. in Business Information Systems (GPA 3.73/4, Excellent degree)."
  ]
};

export const RECRUITER_QUICK_FACTS = [
  { label: "Core Roles", value: "Product Owner / Business Analyst" },
  { label: "Key Domains", value: "Digital Health, Fintech, Banking" },
  { label: "Tech Training", value: "ITI Full-Stack .NET & DEPI Front-End" },
  { label: "Education", value: "B.Sc. Business Info Systems (GPA 3.73 / 4.0)" },
  { label: "Location", value: "Tanta, Egypt (Open to Relocation)" },
  { label: "Languages", value: "Arabic (Native), English (Fluent)" },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "adam-health",
    role: "Product Owner",
    company: "Adam Health",
    period: "Nov 2025 – Present",
    isCurrent: true,
    domain: "Digital Health",
    domainColor: "bg-[#1E8C7C]/15 text-[#1E8C7C] border-[#1E8C7C]/30",
    bullets: [
      "Own product discovery and delivery activities for a digital healthcare platform, collaborating with engineering, operations, and business stakeholders.",
      "Translate operational and clinical workflows into structured product requirements, user stories, and acceptance criteria.",
      "Prioritize and refine the product backlog to support Agile sprint planning and incremental product delivery.",
      "Define product features, user roles, permissions, and business rules to improve platform usability and operational efficiency.",
      "Facilitate cross-functional alignment between product, engineering, marketing, and operations teams to ensure successful feature implementation.",
      "Contribute to telemedicine workflow optimization, reporting requirements, and process standardization initiatives.",
      "Support release planning, feature validation, and delivery coordination while ensuring alignment with business objectives.",
      "Led organizational onboarding of ClickUp as the team's core project management platform, designing workflows, task structures, and tracking conventions adopted across departments.",
      "Track and coordinate team resources, tools, and operational needs to ensure delivery teams remain unblocked and sprint commitments are met.",
      "Apply organizational excellence practices to standardize internal processes, improving cross-team visibility and reducing coordination overhead."
    ],
    techStack: ["Product Ownership", "ClickUp", "User Stories", "Acceptance Criteria", "Telemedicine Workflows", "Agile Sprint Planning", "Process Standardization"]
  },
  {
    id: "sbs",
    role: "Presales & Business Analyst",
    company: "SBS - Specialized Business Solutions",
    period: "Aug 2025 – Nov 2025",
    isCurrent: false,
    domain: "Enterprise Software Delivery",
    domainColor: "bg-blue-500/15 text-blue-700 border-blue-500/30",
    bullets: [
      "Supported presales discovery sessions to understand client business needs and operational workflows.",
      "Assisted in translating client requirements into structured functional documentation and solution outlines.",
      "Contributed to preparing solution proposals and system scope definitions for digital platforms and internal systems.",
      "Worked with technical teams to clarify system capabilities and align them with client requirements.",
      "Participated in process analysis and documentation to support implementation planning."
    ],
    techStack: ["Presales Discovery", "Functional Documentation", "Solution Outlining", "System Scope Definitions", "Process Analysis"]
  },
  {
    id: "iti",
    role: "Full-Stack .NET Trainee",
    company: "Information Technology Institute (ITI)",
    period: "Nov 2024 – Mar 2025",
    isCurrent: false,
    domain: "Software Development Internship",
    domainColor: "bg-purple-500/15 text-purple-700 border-purple-500/30",
    bullets: [
      "Trained on frontend, backend and business - related skills.",
      "Collaborated on requirement gathering and Agile sprints.",
      "Developed user stories and use cases.",
      "Delivered web application solutions aligned with business goals."
    ],
    techStack: [".NET", "Frontend & Backend", "Agile Sprints", "User Stories", "Use Cases"]
  },
  {
    id: "depi",
    role: "Front-End Developer Trainee",
    company: "Digital Egypt Pioneers Initiative (DEPI)",
    period: "Apr 2024 – Nov 2024",
    isCurrent: false,
    domain: "Software Development Internship",
    domainColor: "bg-amber-500/15 text-amber-800 border-amber-500/30",
    bullets: [
      "Built responsive web interfaces based on user feedback.",
      "Conducted user testing and iterative refinements.",
      "Resolved UI issues to improve performance."
    ],
    techStack: ["Front-End Development", "Responsive UI", "User Testing", "Iterative Refinements", "Performance Optimization"]
  },
  {
    id: "bdc",
    role: "SME Relationship Officer & MIS Analyst",
    company: "Banque du Caire",
    period: "Feb 2020 – Aug 2023",
    isCurrent: false,
    domain: "Banking Experience",
    domainColor: "bg-emerald-500/15 text-emerald-800 border-emerald-500/30",
    bullets: [
      "Managed a portfolio of SME client relationships, conducting financial needs assessments and translating client goals into tailored product and service recommendations.",
      "Produced analytical MIS reports and business insights that supported senior management decision-making and operational planning."
    ],
    techStack: ["SME Portfolio Management", "Financial Needs Assessment", "MIS Analytics & Reporting", "Business Insights"]
  },
  {
    id: "cib",
    role: "Assistant Universal Teller",
    company: "Commercial International Bank (CIB)",
    period: "Jan 2019 – Jun 2019",
    isCurrent: false,
    domain: "Banking Experience",
    domainColor: "bg-slate-500/15 text-slate-800 border-slate-500/30",
    bullets: [
      "Processed customer transactions with accuracy.",
      "Recommended banking products to support portfolio growth."
    ],
    techStack: ["Transaction Processing", "Banking Operations", "Customer Experience", "Product Recommendations"]
  }
];

export const HOW_I_WORK_STEPS: WorkProcessStep[] = [
  {
    id: "requirements",
    number: "01",
    title: "Requirements Elicitation & Stakeholder Workshops",
    summary: "Engaging directly with clinical staff, business leads, and end-users to discover true operational constraints and pain points before writing a single ticket.",
    deliverables: ["Stakeholder Needs Matrix", "Functional Specs", "Use Case Scenarios"],
    toolsUsed: ["ClickUp", "draw.io", "Structured Interviews"],
    detailNote: "Active listening combined with domain knowledge ensures edge cases in regulated environments (like healthcare and banking) are surfaced early."
  },
  {
    id: "bpmn",
    number: "02",
    title: "Process Mapping & BPMN Workflows",
    summary: "Translating messy human processes into standardized BPMN process flows that map user actions, decision gateways, and system integrations step by step.",
    deliverables: ["As-Is & To-Be Flowcharts", "BPMN 2.0 Diagrams", "System Interface Boundaries"],
    toolsUsed: ["draw.io", "BPMN Standard", "Visio"],
    detailNote: "A visual flowchart eliminates ambiguity between product managers, clinical operations, and software engineers."
  },
  {
    id: "backlog",
    number: "03",
    title: "Backlog Prioritization & Sprint Planning",
    summary: "Decomposing epics into structured user stories with unambiguous Given-When-Then acceptance criteria, MoSCoW prioritization, and sprint readiness checks.",
    deliverables: ["Refined Backlog", "Sprint Commitment", "INVEST User Stories & Acceptance Criteria"],
    toolsUsed: ["ClickUp", "Agile Frameworks", "Kanban / Scrum"],
    detailNote: "Led company-wide ClickUp migration at Adam Health, creating standardized ticket templates and status workflows still used daily."
  },
  {
    id: "gap-analysis",
    number: "04",
    title: "Gap Analysis & Technical Scoping",
    summary: "Leveraging my full-stack .NET and database training to evaluate existing API contracts, database schema requirements, and backend integration gaps.",
    deliverables: ["Gap Analysis Matrix", "API Payload Requirements", "Release Scoping Specs"],
    toolsUsed: ["SQL", "REST API Specs", "Data Mapping"],
    detailNote: "I speak developer language — allowing me to ask the right technical questions and avoid unrealistic scope commitments."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Business Analysis & Product Ownership",
    subtitle: "Core product management, discovery, and requirements craftsmanship",
    skills: [
      { name: "Product Ownership", tag: "Primary" },
      { name: "Product Backlog Management", tag: "Daily" },
      { name: "Feature Prioritization", tag: "Core" },
      { name: "User Stories & Acceptance Criteria", tag: "Given-When-Then" },
      { name: "Product Discovery", tag: "Strategy" },
      { name: "Agile Product Delivery", tag: "Execution" },
      { name: "Requirements Gathering", tag: "Elicitation" },
      { name: "Process Mapping (Current/Future State)", tag: "Workflows" },
      { name: "BPMN", tag: "Standards" },
      { name: "Gap Analysis", tag: "Scoping" },
      { name: "Stakeholder Workshops", tag: "Alignment" },
      { name: "Business Process Improvement", tag: "Excellence" }
    ]
  },
  {
    title: "Project & Delivery",
    subtitle: "Agile methodologies, release planning, and team leadership",
    skills: [
      { name: "Agile Scrum & Kanban", tag: "Frameworks" },
      { name: "Sprint Planning", tag: "Cadence" },
      { name: "Cross-functional Leadership", tag: "Alignment" },
      { name: "Delivery Coordination", tag: "Execution" },
      { name: "Risk & Dependency Tracking", tag: "Governance" },
      { name: "Scope Management", tag: "Boundaries" },
      { name: "Release Planning", tag: "Delivery" }
    ]
  },
  {
    title: "Technical",
    subtitle: "Tools, architecture, and engineering competencies",
    skills: [
      { name: "ClickUp", tag: "Admin & Workflows" },
      { name: "Figma", tag: "Design & Specs" },
      { name: "Web Architecture", tag: "Design" },
      { name: "draw.io", tag: "Diagrams" },
      { name: "REST APIs", tag: "Integrations" },
      { name: "SQL", tag: "Data" },
      { name: "Excel (Advanced)", tag: "Analytics" },
      { name: "System Integrations", tag: "Tech" }
    ]
  }
];

export const SAMPLE_BPMN_FLOW: BpmnNode[] = [
  {
    id: "step-1",
    title: "1. Consultation Request",
    type: "start",
    actor: "Patient / User",
    description: "Patient submits symptom details & selects doctor slot via Adam Health mobile interface.",
    acceptanceCriteria: [
      "Validate patient contact & slot availability in real time",
      "Store initial triage notes into encrypted session payload"
    ]
  },
  {
    id: "step-2",
    title: "2. Clinical Triage & Assignment",
    type: "process",
    actor: "Clinical / Medical Team",
    description: "System verifies doctor availability & routes request to on-call clinical coordinator.",
    acceptanceCriteria: [
      "Auto-timeout escalation if unassigned after 3 minutes",
      "Display patient emergency history flag if applicable"
    ]
  },
  {
    id: "step-3",
    title: "3. Workflow Decision Gateway",
    type: "decision",
    actor: "Product Owner (Abdelaziz)",
    description: "Requires explicit business logic for instant video vs. async text consultation routing.",
    acceptanceCriteria: [
      "Video route: Initialize WebRTC session token",
      "Async route: Create structured message ticket in ClickUp queue"
    ]
  },
  {
    id: "step-4",
    title: "4. Telemedicine Session Execution",
    type: "process",
    actor: "Engineering Team",
    description: "Backend handles media stream / chat protocol & generates electronic prescription artifact.",
    acceptanceCriteria: [
      "E-prescription must comply with MOH regulatory data standards",
      "Log completion timestamp to audit history"
    ]
  },
  {
    id: "step-5",
    title: "5. Session Closure & Feedback",
    type: "end",
    actor: "Patient / User",
    description: "Consultation ends, payment settled, PDF summary delivered via app.",
    acceptanceCriteria: [
      "Send post-consultation rating survey",
      "Update patient health record ledger in DB"
    ]
  }
];

