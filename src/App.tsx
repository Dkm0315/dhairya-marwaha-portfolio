import {
  ArrowUpRight,
  Braces,
  CheckCircle2,
  Cloud,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  GitBranch,
  GraduationCap,
  Layers3,
  Link2,
  Mail,
  Menu,
  ShieldCheck,
  Terminal,
  Waypoints,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { TooltipProvider } from '@/components/ui/tooltip'

import './App.css'

const links = {
  email: 'mailto:dhairya15marwaha@gmail.com',
  github: 'https://github.com/Dkm0315',
  linkedin: 'https://www.linkedin.com/in/dhairya-marwaha-955897206/',
  x: 'https://x.com/Dhairya15Marwah',
  muster: 'https://themuster.dev',
  musterGithub: 'https://github.com/Dkm0315/muster',
  frappeAgent: 'https://github.com/Dkm0315/frappe-agent',
  openclawBridge: 'https://github.com/Dkm0315/Frappe-Openclaw-Bridge',
}

const navItems = [
  { label: 'Work', href: '#featured-work' },
  { label: 'Journey', href: '#journey' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const journey = [
  {
    label: '01',
    title: 'Moved into full-stack product systems',
    body: 'Shipped Angular, Java Spring Boot, Python FastAPI, auth, portal, workflow, and Salesforce-linked business systems with real client constraints.',
    meta: 'Angular · Java 17 · FastAPI · MSAL · NgRx',
    icon: Code2,
  },
  {
    label: '02',
    title: 'Added infrastructure ownership',
    body: 'Owned Redis, Valkey, PostgreSQL, pgvector, PgBouncer, MongoDB, Kafka, HA/DR, TLS, observability, Kubernetes, Terraform, support bundles, and release handovers.',
    meta: 'Postgres · pgvector · PgBouncer · Redis · Valkey · MongoDB · Kafka',
    icon: Database,
  },
  {
    label: '03',
    title: 'Focused on governed AI systems',
    body: 'Designed agent systems where memory, tools, provider routing, token usage, evals, traces, and permissions are explicit controls operators can inspect.',
    meta: 'MCP · RAG · LangGraph · OpenTelemetry · policy',
    icon: ShieldCheck,
  },
  {
    label: '04',
    title: 'Built Muster as the flagship',
    body: 'Muster is the public proof: a TypeScript governed agent harness with scoped memory, token ledger, eval-gated learning, MCP/plugin controls, channels, and provider flexibility.',
    meta: 'themuster.dev · 59.4% token reduction · 20+ providers',
    icon: Terminal,
    href: links.muster,
  },
  {
    label: '05',
    title: 'Packaged domain depth when useful',
    body: 'frappe-agent is one supporting example of turning domain delivery patterns into assistant behavior for coding tools.',
    meta: 'Codex plugin · Claude Code package · HOL registry',
    icon: Braces,
    href: links.frappeAgent,
  },
]

const experience = [
  {
    role: 'Head of Professional Services / Gen AI Expert',
    company: 'RagnDataOps',
    time: 'Feb 2026 - Present',
    body: 'Leading OSS Manager and production AI systems across Redis/Valkey, PostgreSQL/pgvector/PgBouncer, MongoDB, Kafka, self-hosted operations, support automation, delivery workflows, and customer-facing professional services.',
  },
  {
    role: 'Full Stack Engineer',
    company: 'Hybrowlabs Technologies',
    time: 'Apr 2025 - Present',
    body: 'Shipping Angular, Java Spring Boot, Python FastAPI, RAG, agentic workflows, and enterprise portal/security analysis across production client systems.',
  },
  {
    role: 'Senior Software Engineer',
    company: 'Extension Technologies',
    time: 'Jun 2024 - Apr 2025',
    body: 'Built ERP and manufacturing flows across Frappe/ERPNext, Vue, MariaDB, Redis, NGINX, Grafana, CI/CD, and production support.',
  },
]

const stack = [
  'TypeScript',
  'Python',
  'Java 17',
  'FastAPI',
  'Spring Boot',
  'Angular',
  'React',
  'MCP',
  'LangGraph',
  'OpenTelemetry',
  'PostgreSQL',
  'pgvector',
  'PgBouncer',
  'Redis',
  'Valkey',
  'MongoDB',
  'Kafka',
  'Kubernetes',
  'Terraform',
]

const skillGroups = [
  {
    title: 'AI and agent systems',
    icon: Cpu,
    body: 'Production RAG, agentic workflows, MCP tools, governed memory, eval gates, token accounting, provider routing, OpenTelemetry tracing, and multi-agent surfaces.',
    skills: ['Muster', 'MCP', 'LangGraph', 'LangChain', 'RAG', 'FAISS', 'Qdrant', 'OpenTelemetry'],
  },
  {
    title: 'Enterprise full-stack',
    icon: Code2,
    body: 'Angular, React, Java Spring Boot, Python FastAPI, TypeScript, REST APIs, auth analysis, portals, workflows, dashboards, and production debugging.',
    skills: ['Angular', 'React', 'Spring Boot', 'FastAPI', 'TypeScript', 'Java 17', 'MSAL', 'OPA'],
  },
  {
    title: 'Domain tooling',
    icon: Layers3,
    body: 'When a domain needs special handling, I package the rules into plugins, runbooks, checks, and reusable assistant behavior instead of keeping them as tribal knowledge.',
    skills: ['plugins', 'runbooks', 'permissions', 'reports', 'workflow modeling', 'bench checks', 'MariaDB'],
  },
  {
    title: 'Data and infrastructure',
    icon: Database,
    body: 'Redis, Valkey, PostgreSQL, pgvector, PgBouncer, MongoDB, Kafka KRaft, replication, HA/DR, observability, cloud deployments, Kubernetes, Terraform, CI/CD, and packaging.',
    skills: ['Redis', 'Valkey', 'PostgreSQL', 'pgvector', 'PgBouncer', 'MongoDB', 'Kafka', 'Kubernetes', 'Terraform', 'Grafana', 'NGINX'],
  },
  {
    title: 'Platform orchestration',
    icon: Cloud,
    body: 'Plan/apply/status/destroy workflows, service dependency graphs, production runbooks, sizing, TLS, ACLs, support bundles, air-gapped RPM/DEB delivery, and operator handovers.',
    skills: ['HA/DR', 'TLS', 'ACLs', 'RPM/DEB', 'support bundles', 'runbooks', 'service orchestration', 'release validation'],
  },
]

const ossManagerLayers = [
  {
    title: 'Data plane',
    body: 'Persistent services, vector search, pooling, cache, streams, and operational state.',
    tools: ['Postgres', 'pgvector', 'PgBouncer', 'MongoDB', 'Redis', 'Valkey', 'Kafka'],
  },
  {
    title: 'Control plane',
    body: 'Repeatable workflows for planning, applying, checking, destroying, sizing, and validating customer environments.',
    tools: ['plan/apply', 'status', 'destroy', 'sizing', 'HA/DR', 'TLS', 'ACLs'],
  },
  {
    title: 'Operator experience',
    body: 'Runbooks, support bundles, dashboards, release validation, packaging, and handover material that make the platform usable after delivery.',
    tools: ['Grafana', 'Prometheus', 'RPM/DEB', 'air-gapped', 'support bundles', 'runbooks'],
  },
]

const otherWork = [
  {
    title: 'Turbo Platform',
    label: 'enterprise client project',
    icon: Cloud,
    body: 'Angular 21/MSAL/NgRx frontend, Java 17 Spring Boot backend, reusable engine library, and Python FastAPI engine for Salesforce-linked sales, quoting, margin, delivery, and executive opportunity views.',
    chips: ['Salesforce workflows', 'quote generation', 'margin modeling', 'delivery timelines'],
  },
  {
    title: 'Frappe OpenClaw Bridge',
    label: 'open-source bridge',
    icon: Waypoints,
    body: 'OpenClaw/Frappe bridge with actor resolution, capability cataloging, intent routing, permissions, readonly analytics, HMAC auth, nonce protection, audit logging, and governed tool execution.',
    chips: ['HMAC auth', 'audit logging', 'intent routing', 'permission-aware tools'],
    href: links.openclawBridge,
  },
  {
    title: 'AI Systems Engineering Course',
    label: 'knowledge product',
    icon: GraduationCap,
    body: 'A 157-file course/book covering LLMs, prompting, RAG, vector databases, tools, agents, MCP, coding-agent harnesses, evals, observability, security, cost controls, and operational AI design.',
    chips: ['LLMs', 'RAG', 'evals', 'operational AI'],
  },
]

function App() {
  return (
    <TooltipProvider>
      <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
        <main>
          <Hero />
          <FeaturedWork />
          <Journey />
          <SkillsSection />
          <OtherWorkSection />
          <Experience />
          <Contact />
        </main>
      </div>
    </TooltipProvider>
  )
}

function Hero() {
  return (
    <section id="top" className="hero-pattern min-h-screen p-4 sm:p-7">
      <div className="hero-computer mx-auto flex min-h-[calc(100vh-2rem)] max-w-[1520px] flex-col overflow-hidden sm:min-h-[calc(100vh-3.5rem)]">
        <div className="hero-topbar">
          <a className="flex items-center gap-4" href="#top" aria-label="Dhairya Marwaha home">
            <span className="terminal-mark"><Terminal /></span>
            <span className="font-semibold text-[#07343a]">Dhairya Marwaha</span>
          </a>
          <nav className="hidden items-center gap-12 text-base font-medium text-[#092f35] md:flex">
            {navItems.map((item, index) => (
              <a className={index === 0 ? 'hero-nav-active' : 'transition hover:text-[#006b78]'} href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
          </nav>
          <Sheet>
            <SheetTrigger
              render={
                <Button className="md:hidden" size="icon" variant="outline" aria-label="Open menu" />
              }
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Navigate</SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-4">
                {navItems.map((item) => (
                  <a className="text-lg font-medium" href={item.href} key={item.label}>
                    {item.label}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hero-main-grid">
          <div className="hero-copy">
            <h1>Dhairya Marwaha</h1>
            <p className="hero-subtitle">AI systems engineer for governed agents</p>
            <p className="hero-body">
              I design and ship production AI agent systems with strong guardrails, great developer experience, and real business impact.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="hero-primary" render={<a href={links.muster} />}>
                <Terminal data-icon="inline-start" />
                Explore Muster
              </Button>
              <Button size="lg" className="hero-secondary" variant="outline" render={<a href={links.github} />}>
                <GitBranch data-icon="inline-start" />
                View GitHub
              </Button>
            </div>
          </div>

          <div className="portrait-cluster">
            <div className="workflow-panel">
              <h2>Workflow</h2>
              {[
                ['Discover', 'map systems, users, data, permissions'],
                ['Build', 'ship product surfaces and agent controls'],
                ['Measure', 'trace tokens, evals, memory, failures'],
                ['Operate', 'runbooks, support, handover, hardening'],
              ].map(([title, body]) => (
                <div className="workflow-row" key={title}>
                  <i />
                  <div>
                    <strong>{title}</strong>
                    <span>{body}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="circuit-lines" aria-hidden="true">
              <svg viewBox="0 0 560 330">
                <path d="M22 92h72c38 0 38-52 76-52h54" />
                <path d="M18 170h142c30 0 30 70 60 70h70" />
                <path d="M260 42h74c32 0 32 46 64 46h98" />
                <path d="M330 154h132c30 0 30 84 60 84h26" />
                <path d="M410 20v64m54 28v84m-142 62h126" />
                <circle cx="95" cy="92" r="5" />
                <circle cx="222" cy="40" r="5" />
                <circle cx="462" cy="88" r="5" />
                <circle cx="448" cy="258" r="5" />
              </svg>
            </div>
            <div className="portrait-card">
              <img src="/assets/dhairya-marwaha.jpeg" alt="Dhairya Marwaha" />
            </div>
          </div>
        </div>

        <div className="hero-console-grid">
          <TerminalWindow />
          <MusterPreview />
          <HarnessCard />
        </div>

        <div className="hero-status">
          <span><i /> Building production AI systems with strong guardrails and great developer experience.</span>
          <span>Gurugram, Haryana, India</span>
          <span>2026</span>
        </div>
      </div>
    </section>
  )
}

function TerminalWindow() {
  return (
    <Card className="terminal-card glass-panel">
      <CardHeader className="flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="traffic bg-[#ff5f57]" />
          <span className="traffic bg-[#febc2e]" />
          <span className="traffic bg-[#28c840]" />
        </div>
        <CardDescription className="font-mono text-xs">dhairya@MacBook-Pro ~</CardDescription>
      </CardHeader>
      <CardContent>
        <pre className="terminal-text">
          <span className="term-green">$</span> pnpm --package=@musterhq/cli dlx muster demo{'\n'}
          muster 0.3.0{'\n'}
          AI agent harness for production systems{'\n\n'}
          <span className="term-cyan">workspace</span> isolated · stub model online{'\n'}
          <span className="term-lav">memory</span> recalled 1 scoped note{'\n'}
          <span className="term-muted">run            in    out   saved</span>{'\n'}
          287bde9c       38    17    4.1k ctx{'\n'}
          653b434a       7     18    scoped{'\n'}
          <span className="term-ok">integrity check: OK</span>
        </pre>
      </CardContent>
    </Card>
  )
}

function MusterPreview() {
  return (
    <Card className="muster-preview glass-panel">
      <CardHeader className="flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="traffic bg-[#ff5f57]" />
          <span className="traffic bg-[#febc2e]" />
          <span className="traffic bg-[#28c840]" />
        </div>
        <CardDescription className="font-mono text-xs">themuster.dev</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-5 sm:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col gap-4">
          <img src="/assets/muster-logo.svg" alt="Muster" className="w-36" />
          <h3 className="text-2xl font-semibold leading-tight text-[#07343a]">
            Ship governed agents. With speed and confidence.
          </h3>
          <p className="text-sm leading-6 text-[#365a60]">
            Scoping, memory, evals, and MCP controls for operators who need proof.
          </p>
          <div className="flex gap-2">
            <Badge variant="secondary">Run demo</Badge>
            <Badge variant="outline">Docs</Badge>
          </div>
        </div>
        <div className="agent-map" aria-hidden="true">
          <span className="node user">User</span>
          <span className="node agent">Agent</span>
          <span className="node memory">Memory</span>
          <span className="node evals">Evals</span>
          <span className="node mcp">MCP</span>
          <span className="node audit">Audit Log</span>
        </div>
      </CardContent>
    </Card>
  )
}

function HarnessCard() {
  return (
    <Card className="harness-card glass-panel">
      <CardHeader>
        <div className="flex items-center justify-between gap-4">
          <CardTitle>Agent Harness Console</CardTitle>
          <span className="live-dot"><i />Live</span>
        </div>
      </CardHeader>
      <CardContent className="harness-console-content">
        <div className="console-panel">
          <span className="console-label">Scoped Memory</span>
          {['salesforce-agent', 'User Profile 42.1 KB', 'Opportunities 128.7 KB', 'Run Context 18.9 KB'].map((item) => (
            <div className="console-row" key={item}>{item}</div>
          ))}
        </div>
        <div className="console-panel">
          <span className="console-label">Token Ledger</span>
          <div className="ledger-line"><span>Input</span><strong>1.42M</strong></div>
          <div className="ledger-line"><span>Output</span><strong>0.96M</strong></div>
          <div className="ledger-line"><span>Savings</span><strong>59%</strong></div>
          <div className="bars" aria-hidden="true">
            {Array.from({ length: 18 }).map((_, index) => (
              <i key={index} style={{ height: `${22 + ((index * 17) % 38)}px` }} />
            ))}
          </div>
        </div>
        <div className="console-panel">
          <span className="console-label">Eval Gates</span>
          {['Correctness', 'Groundedness', 'Policy & Safety', 'Tool Compliance'].map((item) => (
            <div className="eval-row" key={item}><CheckCircle2 />{item}<strong>Pass</strong></div>
          ))}
        </div>
        <div className="console-panel console-wide">
          <span className="console-label">MCP Controls</span>
          {['Salesforce (REST)', 'PostgreSQL (Read)', 'Redis (Cache)', 'S3 (Artifacts)'].map((item, index) => (
            <div className="ledger-line" key={item}>
              <span>{item}</span>
              <strong>tools: {24 - index * 6} · Online</strong>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function FeaturedWork() {
  return (
    <section id="featured-work" className="section-pad featured-work-section">
      <div className="section-glass mx-auto max-w-[1520px] px-4 py-8 sm:px-7 lg:px-12">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Work that defines the range.
            </h2>
            <p className="text-lg leading-8 text-muted-foreground">
              Muster leads with the agent systems story. OSSMGR shows the platform engineer side: open-source data infrastructure, operational workflows, packaging, and support paths. frappe-agent stays as supporting plugin work.
            </p>
          </div>
          <div className="featured-stack-strip">
            {['Redis', 'Valkey', 'MongoDB', 'Postgres', 'pgvector', 'PgBouncer', 'Kafka'].map((tool) => (
              <Badge variant="secondary" key={tool}>
                {tool}
              </Badge>
            ))}
          </div>
        </div>

        <div className="featured-grid">
          <Card className="featured-card muster-feature-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Terminal className="text-primary" />
                <CardDescription>open-source agent harness</CardDescription>
              </div>
              <CardTitle>Muster</CardTitle>
              <CardDescription>Governed agent harness for production AI systems.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <p className="leading-7 text-muted-foreground">
                Muster is the flagship public proof: scoped memory, token ledger, eval-gated learning, MCP/plugin controls, channels, provider flexibility, and operator-facing surfaces for long-running agents.
              </p>
              <div className="muster-proof-grid">
                <MiniStat value="59.4%" label="token reduction" />
                <MiniStat value="20+" label="providers" />
                <MiniStat value="MCP" label="controls" />
              </div>
              <div className="flex flex-wrap gap-2">
                {['scoped memory', 'token ledger', 'eval gates', 'provider routing', 'channels', 'integrity checks'].map((chip) => (
                  <Badge variant="secondary" key={chip}>
                    {chip}
                  </Badge>
                ))}
              </div>
              <Button className="w-fit hero-secondary" variant="outline" render={<a href={links.muster} />}>
                Open themuster.dev
                <ArrowUpRight data-icon="inline-end" />
              </Button>
            </CardContent>
          </Card>

          <div className="featured-side">
            <Card className="featured-card ossmgr-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Database className="text-primary" />
                  <CardDescription>RagnDataOps · platform orchestration</CardDescription>
                </div>
                <CardTitle>OSSMGR</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-5">
                <p className="leading-7 text-muted-foreground">
                  Self-hosted control plane and delivery layer for Redis, Valkey, MongoDB, Postgres, pgvector, PgBouncer, Kafka, HA/DR, TLS, ACLs, sizing, support bundles, and air-gapped packages.
                </p>
                <div className="oss-layer-grid compact">
                  {ossManagerLayers.map((layer) => (
                    <div className="oss-layer" key={layer.title}>
                      <h3>{layer.title}</h3>
                      <p>{layer.body}</p>
                      <div className="flex flex-wrap gap-2">
                        {layer.tools.map((tool) => (
                          <Badge variant="outline" key={tool}>
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="featured-card supporting-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Braces className="text-primary" />
                  <CardDescription>supporting plugin work</CardDescription>
                </div>
                <CardTitle>frappe-agent</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <p className="leading-7 text-muted-foreground">
                  A smaller proof of packaging domain delivery knowledge into reusable assistant behavior for Codex, Claude Code, Cursor, and Copilot.
                </p>
                <Button className="w-fit" variant="outline" render={<a href={links.frappeAgent} />}>
                  View repo
                  <ArrowUpRight data-icon="inline-end" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

function Journey() {
  return (
    <section id="journey" className="story-section section-pad">
      <div className="mx-auto max-w-[1520px] px-4 sm:px-7">
        <div className="story-glass">
          <div className="story-heading">
            <div>
              <h2>My journey is the product surface.</h2>
              <p>
                ERP delivery taught me where business systems break. Infrastructure taught me how production fails. Agent systems became the place where both lessons meet.
              </p>
            </div>
            <Button className="hero-secondary" variant="outline" render={<a href={links.email} />}>
              <Mail data-icon="inline-start" />
              Contact
            </Button>
          </div>
          <div className="journey-timeline">
            {journey.map((item) => (
              <article className="journey-stop" key={item.label}>
                <div className="journey-index">{item.label}</div>
                <div className="journey-node">
                  <item.icon />
                </div>
                <div className="journey-copy">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <span>{item.meta}</span>
                  {item.href ? (
                    <a href={item.href}>
                      Open
                      <ArrowUpRight />
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillsSection() {
  return (
    <section id="skills" className="section-pad skills-band">
      <div className="section-glass mx-auto max-w-[1520px] px-4 py-8 sm:px-7 lg:px-12">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Known skills, mapped to the work they unlock.
            </h2>
            <p className="text-lg leading-8 text-muted-foreground">
              The range is broad, but not random: agent governance, enterprise product delivery, ERP domain depth, and infrastructure ownership all reinforce each other.
            </p>
          </div>
          <Card className="glass-card">
            <CardContent className="grid gap-4 p-5 sm:grid-cols-3">
              <MiniStat value="4" label="AI capability areas" />
              <MiniStat value="10+" label="services delivered" />
              <MiniStat value="ERP" label="domain depth" />
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <Card className="skill-card" key={group.title}>
              <CardHeader>
                <group.icon className="text-primary" />
                <CardTitle>{group.title}</CardTitle>
                <CardDescription>{group.body}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge variant="secondary" key={skill}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function OtherWorkSection() {
  return (
    <section id="other-work" className="section-pad">
      <div className="section-glass mx-auto max-w-[1520px] px-4 py-8 sm:px-7 lg:px-12">
        <div className="mb-10 flex max-w-3xl flex-col gap-4">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Other work that rounds out the story.
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            Muster is the sharpest public artifact, but the surrounding work shows delivery range: enterprise workflows, bridges, courses, infrastructure, and runbooks.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {otherWork.map((item) => (
            <Card className="work-card" key={item.title}>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <item.icon className="text-primary" />
                    <CardDescription>{item.label}</CardDescription>
                  </div>
                  {item.href ? (
                    <Button
                      size="icon"
                      variant="ghost"
                      aria-label={`Open ${item.title}`}
                      render={<a href={item.href} />}
                    >
                      <ArrowUpRight />
                    </Button>
                  ) : null}
                </div>
                <CardTitle className="text-2xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-5">
                <p className="leading-7 text-muted-foreground">{item.body}</p>
                <div className="flex flex-wrap gap-2">
                  {item.chips.map((chip) => (
                    <Badge variant="outline" key={chip}>
                      {chip}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="section-glass mx-auto grid max-w-[1520px] gap-8 px-4 py-8 sm:px-7 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
        <div className="flex flex-col gap-5">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Built across AI systems, ERP platforms, and infrastructure.
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            The through-line is production ownership: customer delivery, secure automation, data infrastructure, and the ergonomics that let teams operate complex systems calmly.
          </p>
          <div className="flex flex-wrap gap-2">
            {stack.map((item) => (
              <Badge key={item} variant="outline">
                {item}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {experience.map((item) => (
            <Card className="glass-card" key={`${item.company}-${item.role}`}>
              <CardHeader>
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div>
                    <CardTitle>{item.role}</CardTitle>
                    <CardDescription>{item.company}</CardDescription>
                  </div>
                  <Badge variant="secondary">{item.time}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">{item.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section-pad pb-16">
      <div className="mx-auto max-w-[1520px] px-4 sm:px-7">
        <Card className="contact-card section-glass">
          <CardContent className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                Let’s build agents that can be inspected after they ship.
              </h2>
              <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                Reach out for production AI systems, agent harnesses, Frappe/ERPNext automation, or technical leadership across delivery-heavy work.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button size="lg" render={<a href={links.email} />}>
                <Mail data-icon="inline-start" />
                Email
              </Button>
              <Button size="lg" variant="outline" render={<a href={links.linkedin} />}>
                <Link2 data-icon="inline-start" />
                LinkedIn
              </Button>
              <Button size="lg" variant="outline" render={<a href={links.x} />}>
                X
                <ExternalLink data-icon="inline-end" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

function MiniStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg border border-white/60 bg-white/45 p-4">
      <strong className="block text-2xl">{value}</strong>
      <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </span>
    </div>
  )
}

export default App
