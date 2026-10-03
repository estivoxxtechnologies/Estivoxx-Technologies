import { 
  ServiceItem, 
  TechItem, 
  ArchitectureLayer, 
  IndustryItem, 
  ProcessStep, 
  CaseStudyItem, 
  InsightArticle, 
  LabModule 
} from '../types';

export const MARQUEE_ITEMS = [
  'SOFTWARE ENGINEERING',
  'ARTIFICIAL INTELLIGENCE',
  'CLOUD INFRASTRUCTURE',
  'SAAS PLATFORMS',
  'ENTERPRISE SYSTEMS',
  'INTELLIGENT AUTOMATION',
  'DATA ARCHITECTURE',
  'API ECOSYSTEMS',
  'DISTRIBUTED COMPUTING',
  'DIGITAL PLATFORMS',
];

export const CORE_PILLARS = [
  {
    title: 'Custom Software',
    description: 'Bespoke systems built from ground truth to resolve specific operational friction.',
    metric: 'Enterprise-Grade',
    code: 'SW-01',
  },
  {
    title: 'AI & Automation',
    description: 'Neural intelligence and deterministic workflow pipelines integrated into core logic.',
    metric: 'Intelligent Logic',
    code: 'AI-02',
  },
  {
    title: 'Cloud Systems',
    description: 'Resilient multi-region architectures, microservices, containerization and zero-trust security.',
    metric: 'High Scalability',
    code: 'CL-03',
  },
  {
    title: 'Digital Products',
    description: 'High-velocity SaaS platforms and customer portals crafted with obsessive precision.',
    metric: 'Production-Ready',
    code: 'DP-04',
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'custom-software',
    number: '01',
    title: 'Custom Software Development',
    shortDesc: 'Enterprise-grade software designed around your workflows, users and business requirements.',
    fullDesc: 'We engineer bespoke software systems that replace fragile off-the-shelf software with purpose-built, high-throughput architectures. Designed for maintainability, zero lock-in, and longevity.',
    capabilities: [
      'Enterprise applications & ERP extensions',
      'Business management systems',
      'Internal operations platforms',
      'Workflow & authorization engines',
      'Custom analytics & executive dashboards',
    ],
    deliverables: [
      'Modular TypeScript/.NET architecture',
      'Role-based access control (RBAC)',
      'Audit log & compliance tracking',
      'Automated CI/CD deployment pipelines',
    ],
    techFocus: ['React', 'TypeScript', '.NET / C#', 'PostgreSQL', 'Docker'],
    iconName: 'Code2',
  },
  {
    id: 'web-development',
    number: '02',
    title: 'Web Development & Platforms',
    shortDesc: 'High-performance websites and web applications engineered for modern businesses.',
    fullDesc: 'We craft web applications with sub-second page loads, accessible component frameworks, and rock-solid state management. Engineered to withstand heavy traffic surges while delivering an uncompromising user experience.',
    capabilities: [
      'Mission-critical corporate websites',
      'Full-stack SaaS application interfaces',
      'Client & partner portals with self-service',
      'High-conversion e-commerce engines',
      'Progressive Web Applications (PWAs)',
    ],
    deliverables: [
      'Server-side rendered / static architecture',
      'Responsive design across 320px–4K displays',
      'Core Web Vitals 95+ score optimization',
      'Headless CMS & API connectivity',
    ],
    techFocus: ['Next.js', 'React', 'Tailwind CSS', 'Vite', 'GraphQL'],
    iconName: 'Globe',
  },
  {
    id: 'ai-automation',
    number: '03',
    title: 'AI & Intelligent Automation',
    shortDesc: 'Integrate artificial intelligence into business processes to reduce manual work and unlock new capabilities.',
    fullDesc: 'Move beyond generic chatbots into deep autonomous agents, document cognition, and predictive decision engines that run natively alongside your business database and transaction streams.',
    capabilities: [
      'Autonomous business AI assistants & agents',
      'Intelligent deterministic workflow pipelines',
      'Document parsing, OCR & structured extraction',
      'Predictive analytics & pattern detection',
      'Custom LLM integrations with RAG pipelines',
      'End-to-end robotic process automation',
    ],
    deliverables: [
      'Retrieval-Augmented Generation (RAG) vector engines',
      'Deterministic fallback & human-in-the-loop gates',
      'Privacy-first data containment & encryption',
      'Continuous evaluation & response benchmarking',
    ],
    techFocus: ['Python', 'OpenAI / Gemini SDK', 'LangChain', 'Vector DBs', 'FastAPI'],
    iconName: 'Cpu',
  },
  {
    id: 'cloud-infrastructure',
    number: '04',
    title: 'Cloud & Infrastructure',
    shortDesc: 'Secure, scalable infrastructure designed for reliability and future growth.',
    fullDesc: 'We architect cloud environments with automated provisioning, self-healing clusters, multi-zone failovers, and rigorous zero-trust networking to eliminate single points of operational failure.',
    capabilities: [
      'Multi-cloud & hybrid cloud architecture',
      'High-concurrency API gateway infrastructure',
      'Distributed database systems & caching layers',
      'DevOps automation & GitOps deployment',
      'Automated blue/green deployment pipelines',
      'Real-time observability, tracing & telemetry',
    ],
    deliverables: [
      'Infrastructure as Code (Terraform / Docker)',
      'Automated disaster recovery & zero-downtime backups',
      'DDoS mitigation & edge caching networks',
      'Cost optimization & resource auto-scaling',
    ],
    techFocus: ['AWS', 'Microsoft Azure', 'Docker', 'Kubernetes', 'Redis'],
    iconName: 'Cloud',
  },
  {
    id: 'saas-development',
    number: '05',
    title: 'SaaS Product Development',
    shortDesc: 'From product concept to production-ready SaaS platform engineered for exponential scale.',
    fullDesc: 'We partner with founders and enterprise incubators to translate complex product roadmaps into high-converting, resilient digital products with multi-tenant isolation, automated metering, and self-service onboarding.',
    capabilities: [
      'Proof-of-concept to production-grade MVP',
      'Multi-tenant database partitioning',
      'Automated billing & tiered subscription engines',
      'Super-admin & customer management control rooms',
      'Granular product analytics & audit trails',
    ],
    deliverables: [
      'Stripe / Payment gateway integration',
      'Automated tenant provisioning & subdomains',
      'Comprehensive REST & Webhook API documentation',
      'Enterprise SSO (SAML 2.0 / OAuth / OIDC)',
    ],
    techFocus: ['React', '.NET Core', 'PostgreSQL', 'Stripe API', 'Tailwind'],
    iconName: 'Layers',
  },
  {
    id: 'enterprise-transformation',
    number: '06',
    title: 'Enterprise Digital Transformation',
    shortDesc: 'Modernize legacy processes and turn fragmented workflows into connected digital systems.',
    fullDesc: 'Eliminate manual spreadsheet dependencies and legacy software debt. We build modern middleware, unified data lakes, and interconnected operational consoles that harmonize disparate business branches.',
    capabilities: [
      'Process digitization & legacy modernization',
      'Disparate software system integration',
      'Two-way API integration & middleware orchestration',
      'Business process automation (BPA)',
      'Enterprise data migration with zero data loss',
    ],
    deliverables: [
      'System dependency audit & migration roadmap',
      'Real-time message queues & sync bridges',
      'Legacy DB normalization to modern relational models',
      'Comprehensive staff training & handoff playbooks',
    ],
    techFocus: ['.NET Core', 'PostgreSQL', 'Azure Service Bus'],
    iconName: 'RefreshCw',
  },
];

export const TECH_STACK: TechItem[] = [
  // Frontend
  { name: 'React', category: 'frontend', tagline: 'Component UI Architecture', useCase: 'Interactive client applications and dynamic dashboards' },
  { name: 'Next.js', category: 'frontend', tagline: 'Server-Rendered Framework', useCase: 'High-speed web platforms with server-side rendering and edge routing' },
  { name: 'TypeScript', category: 'frontend', tagline: 'Type-Safe JavaScript', useCase: 'Compile-time verification and enterprise-scale code maintainability' },
  { name: 'JavaScript', category: 'frontend', tagline: 'Universal Web Engine', useCase: 'Standard ECMAScript runtime for browser and client logic' },
  { name: 'Tailwind CSS', category: 'frontend', tagline: 'Design System Engine', useCase: 'High-performance utility styling and responsive layouts' },
  // { name: 'Three.js', category: 'frontend', tagline: 'WebGL 3D Rendering', useCase: 'Interactive 3D digital twins, hardware viewports, and visual simulations' },

  // Backend
  { name: '.NET / C#', category: 'backend', tagline: 'Enterprise Computing Framework', useCase: 'High-throughput enterprise backends and distributed transactional systems' },
  { name: 'ASP.NET Core', category: 'backend', tagline: 'Web API Framework', useCase: 'Cross-platform REST and gRPC service layers with low latency' },
  { name: 'Node.js', category: 'backend', tagline: 'Asynchronous JavaScript Runtime', useCase: 'Event-driven real-time services and microservices' },
  // { name: 'Python', category: 'backend', tagline: 'Data & Machine Intelligence', useCase: 'Data pipeline transformation, AI agents, and scientific processing' },
  { name: 'REST & GraphQL APIs', category: 'backend', tagline: 'Interoperable Data Interfaces', useCase: 'Standardized data contracts for client and partner integration' },

  // Databases
  { name: 'PostgreSQL', category: 'database', tagline: 'Advanced Relational Database', useCase: 'ACID-compliant transactional storage, JSONB indexing, and pgvector' },
  { name: 'SQL Server', category: 'database', tagline: 'Enterprise RDBMS', useCase: 'Mission-critical enterprise reporting, stored procedures, and ERP integration' },
  { name: 'MySQL', category: 'database', tagline: 'High-Performance Relational DB', useCase: 'Scalable read-heavy platforms and web services' },
  { name: 'MongoDB', category: 'database', tagline: 'Document Database', useCase: 'Flexible schema storage for unstructured logs and rapid prototypes' },
  { name: 'Redis', category: 'database', tagline: 'In-Memory Cache & Key-Value', useCase: 'Sub-millisecond session state, message brokers, and rate limiting' },

  // Cloud & Infra
  { name: 'Microsoft Azure', category: 'cloud', tagline: 'Enterprise Cloud Platform', useCase: 'Enterprise cloud hosting, App Services, and Azure OpenAI integration' },
  { name: 'AWS', category: 'cloud', tagline: 'Scalable Cloud Computing', useCase: 'Global distributed infrastructure, S3 storage, and serverless compute' },
  { name: 'Docker', category: 'cloud', tagline: 'Containerization Standard', useCase: 'Isolated, reproducible application environments across dev and production' },
  { name: 'CI/CD Pipelines', category: 'cloud', tagline: 'Automated Delivery Workflows', useCase: 'Automated testing, vulnerability scanning, and zero-downtime release' },

  // AI & Automation
  { name: 'OpenAI & Gemini APIs', category: 'ai', tagline: 'Frontier AI Models', useCase: 'Generative intelligence, complex document reasoning, and classification' },
  { name: 'Machine Learning', category: 'ai', tagline: 'Predictive Algorithms', useCase: 'Regression analysis, anomaly detection, and operational forecasting' },
  { name: 'LLM Integrations & RAG', category: 'ai', tagline: 'Context-Augmented Reasoning', useCase: 'Private corporate knowledge search with citation grounding' },
  { name: 'AI Autonomous Agents', category: 'ai', tagline: 'Goal-Directed Automation', useCase: 'Multi-step tasks with tool invocation and deterministic safety gates' },
  { name: 'Intelligent Automation', category: 'ai', tagline: 'Deterministic RPA + AI', useCase: 'Eliminating repetitive human operational tasks and data re-entry' },
];

export const ARCHITECTURE_LAYERS: ArchitectureLayer[] = [
  {
    id: 'client-tier',
    step: 'LAYER 01',
    name: 'Client Access & Edge Devices',
    role: 'Responsive Web, Mobile Apps, Desktop & IoT Interfaces',
    specs: [
      'Accessible semantic interfaces rendered via React & WebGL',
      'Optimized client bundles with aggressive tree-shaking',
      'Offline-first caching and optimistic UI state updates',
    ],
    protocols: ['HTTPS / TLS 1.3', 'HTTP/3 & QUIC', 'WSS (WebSockets)'],
    icon: 'Monitor',
  },
  {
    id: 'edge-gateway',
    step: 'LAYER 02',
    name: 'Edge Gateway & Global CDN',
    role: 'Global Routing, DDoS Mitigation, Rate Limiting & SSL Termination',
    specs: [
      'Anycast edge distribution across multi-region points of presence',
      'Web Application Firewall (WAF) blocking malicious bot payloads',
      'Edge JWT token decoding and fast authorization gatekeeping',
    ],
    protocols: ['GeoDNS', 'BGP Anycast', 'WAF Filtering'],
    icon: 'Shield',
  },
  {
    id: 'api-layer',
    step: 'LAYER 03',
    name: 'API Orchestration & Routing Layer',
    role: 'Standardized Contract Routing, GraphQL & REST Gateways',
    specs: [
      'Single entry point routing requests into internal microservices',
      'Strongly typed schemas validated before hitting business logic',
      'Automatic request telemetry, distributed correlation IDs, and rate bounds',
    ],
    protocols: ['RESTful OpenAPI', 'GraphQL 2021', 'gRPC / Protobuf'],
    icon: 'Network',
  },
  {
    id: 'business-logic',
    step: 'LAYER 04',
    name: 'Business Logic & Domain Engines',
    role: 'Enterprise Workflow Execution, RBAC, Calculations & Validation',
    specs: [
      'Domain-driven design (DDD) separating rules from persistence',
      'Deterministic state machines ensuring transactional integrity',
      'Audit logging recording every state change with timestamped signatures',
    ],
    protocols: ['.NET Core Runtime', 'Node.js V8', 'Python Microservices'],
    icon: 'Cog',
  },
  {
    id: 'database-tier',
    step: 'LAYER 05',
    name: 'Database & Persistent Storage',
    role: 'ACID Relational Storage, Document Repositories & High-Speed Cache',
    specs: [
      'Primary/replica multi-zone clusters with sub-second failover',
      'Encrypted at rest (AES-256) and in transit with TLS',
      'Point-in-time recovery with continuous write-ahead log archiving',
    ],
    protocols: ['PostgreSQL WAL', 'SQL Server AlwaysOn', 'Redis In-Memory'],
    icon: 'Database',
  },
  {
    id: 'ai-automation-layer',
    step: 'LAYER 06',
    name: 'AI & Automation Pipelines',
    role: 'Vector Embeddings, Machine Learning Models & Task Workers',
    specs: [
      'Asynchronous task queues handling compute-intensive background workloads',
      'Vector similarity search powering grounded enterprise retrieval',
      'Deterministic validation gates wrapping generative model outputs',
    ],
    protocols: ['Async Workers (Celery/BullMQ)', 'Vector Index (HNSW)', 'LLM Gateways'],
    icon: 'Sparkles',
  },
  {
    id: 'cloud-infra',
    step: 'LAYER 07',
    name: 'Cloud & Distributed Infrastructure',
    role: 'Container Orchestration, Multi-Region Compute & Auto-Scaling',
    specs: [
      'Immutable infrastructure defined via Declarative Code (IaC)',
      'Automated horizontal pod autoscaling based on traffic and queue depth',
      'Continuous 24/7 health probing, metric aggregation, and alerts',
    ],
    protocols: ['Kubernetes / Docker', 'Terraform Engine', 'Prometheus / Grafana'],
    icon: 'Server',
  },
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'fintech',
    name: 'Financial Services',
    description: 'Secure, high-reliability software designed for strict compliance and real-time transaction processing.',
    solutions: ['Core accounting modules', 'Automated reconciliation engines', 'Payment gateway connectors', 'Compliance audit vaults'],
    icon: 'Landmark',
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    description: 'Privacy-first medical record systems and clinical practice workflows built with patient privacy at the core.',
    solutions: ['Patient management portals', 'Appointment scheduling engines', 'Lab sample tracking systems', 'HIPAA/GDPR aligned data storage'],
    icon: 'Activity',
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce & Digital Retail',
    description: 'Scalable commerce architectures built to handle high catalog volume and massive promotional traffic spikes.',
    solutions: ['Headless storefronts', 'Dynamic inventory synchronizers', 'Checkout optimization pipelines', 'Order fulfillment dashboards'],
    icon: 'ShoppingBag',
  },
  {
    id: 'retail',
    name: 'Retail & Multi-Store Networks',
    description: 'Unified Point-of-Sale (POS) and inventory replenishment networks linking offline stores with online sales.',
    solutions: ['Multi-branch inventory balance', 'Real-time billing consoles', 'Loyalty reward mechanics', 'Supply chain replenishment alerts'],
    icon: 'Store',
  },
  {
    id: 'education',
    name: 'Education & Institutional Learning',
    description: 'Digital campus portals, course management systems, and student progress engines for modern academies.',
    solutions: ['Student information systems (SIS)', 'Exam grading & submission portals', 'Virtual classroom scheduling', 'Fee collection platforms'],
    icon: 'GraduationCap',
  },
  {
    id: 'logistics',
    name: 'Logistics & Supply Chain',
    description: 'End-to-end fleet coordination, shipment tracking, and warehouse management systems.',
    solutions: ['Route dispatch consoles', 'Consignment milestone tracking', 'Warehouse barcode scanning apps', 'Carrier rate comparison engines'],
    icon: 'Truck',
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    description: 'Client collaboration spaces, project billing systems, and knowledge repositories for consultancies and firms.',
    solutions: ['Timesheet & project accounting', 'Contract lifecycle management', 'Secure client document vaults', 'Resource utilization matrices'],
    icon: 'Briefcase',
  },
  {
    id: 'startups',
    name: 'Venture-Backed Startups',
    description: 'High-speed technical execution turning visionary product concepts into scalable, investor-ready platforms.',
    solutions: ['Rapid MVP technical delivery', 'Scalable multi-tenant architecture', 'Early-stage analytics & telemetry', 'Modern developer experience'],
    icon: 'Rocket',
  },
  {
    id: 'enterprise',
    name: 'Enterprise Corporations',
    description: 'Complex custom ERP modules, legacy modernization, and internal tool ecosystems that connect disparate departments.',
    solutions: ['Legacy software migration', 'Custom middleware integrations', 'Role-based departmental portals', 'High-availability data pipelines'],
    icon: 'Building2',
  },
  {
    id: 'real-estate',
    name: 'Real Estate & Property Management',
    description: 'Property portfolio management, tenant lease tracking, and commercial property marketing platforms.',
    solutions: ['Lease agreement lifecycle tracking', 'Maintenance ticket dispatchers', 'Interactive property floorplan viewers', 'Investor return reporting'],
    icon: 'Home',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover & Deconstruct',
    description: 'We unpack the root operational bottleneck, interrogate business requirements, and analyze legacy constraints.',
    deliverables: ['System requirements document', 'Risk matrix & dependency audit', 'Core capability roadmap'],
    timeframe: 'Stage 01',
  },
  {
    step: '02',
    title: 'Architect & Specify',
    description: 'We formulate the technical architecture, data model, API contracts, security posture, and wireframe schemas.',
    deliverables: ['High-level architecture diagram', 'Normalized database schema', 'Interactive UI prototype'],
    timeframe: 'Stage 02',
  },
  {
    step: '03',
    title: 'Engineer & Implement',
    description: 'Our engineering teams build the software using clean, typed code, automated testing, and sprint cadence.',
    deliverables: ['Production-ready TypeScript/.NET codebase', 'Unit & integration test suites', 'Containerized builds'],
    timeframe: 'Stage 03',
  },
  {
    step: '04',
    title: 'Integrate & Automate',
    description: 'We link third-party APIs, legacy databases, payment gateways, AI models, and real-time event brokers.',
    deliverables: ['API connectors & webhook endpoints', 'AI pipeline integration', 'Data migration scripts'],
    timeframe: 'Stage 04',
  },
  {
    step: '05',
    title: 'Harden & Launch',
    description: 'We run load tests, security penetration reviews, failover simulations, and deploy into live cloud environments.',
    deliverables: ['Zero-downtime production deployment', 'Telemetry & monitoring dashboards', 'Operational runbooks'],
    timeframe: 'Stage 05',
  },
  {
    step: '06',
    title: 'Evolve & Scale',
    description: 'Continuous monitoring, performance tuning, and architectural scaling as business volume multiplies.',
    deliverables: ['SLO & uptime tracking', 'Iterative feature enhancement', 'Long-term technology support'],
    timeframe: 'Stage 06',
  },
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'enterprise-management',
    badge: 'Enterprise Architecture Blueprint',
    title: 'Enterprise Management System',
    clientType: 'Multi-Branch Operations Platform (Representative Blueprint)',
    challenge: 'A growing enterprise faced severe friction with fragmented spreadsheets, disconnected manual payroll calculations, and no unified visibility across disparate office branches.',
    solution: 'Designed and engineered an integrated business management platform consolidating core operations into a single secure, role-governed control center.',
    modules: [
      'Automated Payroll Engine with tax deduction rules',
      'Biometric & Mobile Attendance tracking with shift rules',
      'Enterprise CRM & Sales Pipeline pipeline visualization',
      'Executive Financial Reporting with multi-currency support',
      'Granular Role-Based Access Control (Super-Admin, Manager, Staff)',
      'Multi-Tenancy with isolated branch data partitions',
    ],
    architecture: ['.NET Core API', 'PostgreSQL', 'React / TypeScript', 'Docker', 'Redis Cache'],
    statusNote: 'Representative Case Study Blueprint. Actual client NDA case details available upon technical consultation.',
  },
  {
    id: 'ai-automation-platform',
    badge: 'Intelligent Automation Architecture',
    title: 'AI Business Automation Platform',
    clientType: 'Operations & Workflow Orchestration (Representative Blueprint)',
    challenge: 'High operational overhead caused by staff manually reviewing hundreds of unstructured vendor invoices, purchase orders, and customer inquiries each day.',
    solution: 'Built an intelligent cognitive pipeline that extracts unstructured documents, categorizes intent, verifies data against ERP databases, and routes workflows autonomously.',
    modules: [
      'OCR & Multi-Modal Document Extraction for invoices & PDFs',
      'Deterministic Rule Engine verifying budget limits & approvals',
      'Autonomous Business AI Assistants for customer support triage',
      'Automated Ticket Dispatch & ERP Data Synchronization',
      'Real-Time Telemetry & Exception Handling Dashboard',
    ],
    architecture: ['Python / FastAPI', 'OpenAI & Vector Store', 'Next.js', 'PostgreSQL', 'RabbitMQ'],
    statusNote: 'Representative Case Study Blueprint. Actual client NDA case details available upon technical consultation.',
  },
  {
    id: 'custom-digital-platform',
    badge: 'High-Scale Cloud Platform',
    title: 'Custom Digital Platform & Partner Portal',
    clientType: 'B2B Distribution & Partner Ecosystem (Representative Blueprint)',
    challenge: 'Legacy phone and email ordering created delays, ordering inaccuracies, and zero inventory transparency for a network of hundreds of B2B distribution partners.',
    solution: 'Engineered a modern partner portal and unified administrative command center with real-time stock allocation, automated invoice generation, and partner self-service.',
    modules: [
      'B2B Self-Service Partner Ordering with custom pricing tiers',
      'Real-Time Inventory Allocation & Backorder Management',
      'Administrative Command Center for logistics & dispatch teams',
      'Automated PDF Invoice & Delivery Note Generation',
      'Comprehensive REST & Webhook API Ecosystem for partner ERPs',
    ],
    architecture: ['TypeScript', 'PostgreSQL', 'AWS S3 & CloudFront', 'Tailwind CSS'],
    statusNote: 'Representative Case Study Blueprint. Actual client NDA case details available upon technical consultation.',
  },
];

export const WHY_ESTIVOXX_CARDS = [
  {
    number: '01',
    title: 'Engineering First',
    subtitle: 'Code quality over quick shortcuts.',
    description: 'We prioritize architectural rigor, type safety, modular design, and maintainability. Technology decisions are driven by reliability, performance benchmarks, and long-term stability.',
  },
  {
    number: '02',
    title: 'Business Understanding',
    subtitle: 'Software mapped to real economics.',
    description: 'We do not build technology in an academic vacuum. Every architecture, workflow, and user interface is engineered directly around actual business operations, revenue streams, and user workflows.',
  },
  {
    number: '03',
    title: 'Scalable Architecture',
    subtitle: 'Built for tomorrow from day one.',
    description: 'We architect systems designed to scale gracefully from day-one launch to millions of database records and high-volume request loads without necessitating costly structural rewrites.',
  },
  {
    number: '04',
    title: 'AI Ready',
    subtitle: 'Intelligence engineered at the core.',
    description: 'Rather than bolting on superficial AI chatbots as an afterthought, we architect systems with clean data boundaries, vector search readiness, and autonomous agent integration from the foundation.',
  },
  {
    number: '05',
    title: 'Long-Term Partnership',
    subtitle: 'Engineering that evolves alongside you.',
    description: 'Technology is never a static one-time deliverable. We function as a dedicated technical partner, supporting ongoing platform evolution, proactive security hardening, and continuous enhancements.',
  },
];

export const LAB_MODULES: LabModule[] = [
  {
    id: 'lab-ai',
    code: 'LAB-MOD-01',
    name: 'Neural Agent Orchestration',
    description: 'Researching multi-agent deterministic coordination frameworks for autonomous back-office task execution with zero hallucination gates.',
    status: 'ACTIVE RESEARCH',
    metrics: [
      { label: 'Evaluation Precision', value: '99.4%' },
      { label: 'Latency Overhead', value: '<120ms' },
    ],
    tags: ['Autonomous Agents', 'Deterministic Gates', 'RAG Pipelines'],
  },
  {
    id: 'lab-cloud',
    code: 'LAB-MOD-02',
    name: 'Distributed Edge Mesh',
    description: 'Benchmarking sub-10ms state synchronization across distributed global nodes using CRDTs (Conflict-free Replicated Data Types).',
    status: 'PROTOTYPE TESTING',
    metrics: [
      { label: 'Sync Propagation', value: '8.2ms' },
      { label: 'Conflict Resolution', value: '100% Deterministic' },
    ],
    tags: ['Edge Compute', 'CRDTs', 'Global Consensus'],
  },
  {
    id: 'lab-data',
    code: 'LAB-MOD-03',
    name: 'Real-Time Telemetry Pipeline',
    description: 'Testing high-throughput event streaming ingestion capable of processing millions of operational audit events per second.',
    status: 'BENCHMARKING',
    metrics: [
      { label: 'Throughput', value: '1.2M evt/s' },
      { label: 'Storage Footprint', value: '-65% Compressed' },
    ],
    tags: ['Event Streaming', 'Time-Series', 'Audit Vaults'],
  },
  {
    id: 'lab-automation',
    code: 'LAB-MOD-04',
    name: 'Autonomous Document Cognition',
    description: 'Zero-shot multi-modal extraction pipelines that transform arbitrarily styled paper invoices and contracts into normalized JSON entities.',
    status: 'DEPLOYED IN ALPHA',
    metrics: [
      { label: 'Field Accuracy', value: '98.8%' },
      { label: 'Processing Speed', value: '1.8s / doc' },
    ],
    tags: ['Computer Vision', 'Document AI', 'Entity Extraction'],
  },
];

export const INSIGHTS_ARTICLES: InsightArticle[] = [
  {
    id: 'enterprise-software-architecture-2026',
    category: 'Software Engineering',
    title: 'Architecting Enterprise Systems for Maintainability and Ten-Year Longevity',
    shortDesc: 'Why modern engineering teams are ditching fragile microservice sprawl in favor of modular monoliths and clean domain boundaries.',
    date: 'March 2026',
    readTime: '6 min read',
    content: [
      'In enterprise technology, architectural premature optimization often costs businesses more than initial technical debt. Over the last decade, organizations partitioned relatively straightforward business applications into dozens of distributed microservices, only to suffer from distributed network failures, complex trace debugging, and brittle deployment cycles.',
      'At Estivoxx Technologies, our engineering philosophy favors the Modular Monolith as the foundational baseline: clean boundaries enforced through language typing, domain-driven design (DDD), and event queues within an observable process boundary.',
      'When scale necessitates isolated scaling or autonomous team boundaries, services are factored out along natural bounded contexts rather than arbitrary technical splits. This ensures that business logic remains readable, verifiable, and capable of evolving alongside business reality for a decade or more.'
    ],
    keyTakeaways: [
      'Prioritize clean domain boundaries over distributed network sprawl',
      'Enforce compile-time type safety across database, backend, and frontend contracts',
      'Design storage schemas with immutable audit logs from day zero',
    ],
  },
  {
    id: 'practical-ai-business-automation',
    category: 'Artificial Intelligence',
    title: 'Beyond the Hype: Designing Deterministic AI Automation for Real Enterprise Workflows',
    shortDesc: 'How to build generative and agentic workflows with strict verification gates, preventing hallucinations in mission-critical operations.',
    date: 'February 2026',
    readTime: '5 min read',
    content: [
      'Generative AI models are fundamentally probabilistic engines. In creative writing or casual research, an occasional approximation is harmless. However, in enterprise payroll, inventory allocation, or contract compliance, probabilistic approximations can introduce catastrophic business liability.',
      'The key to successful enterprise AI engineering is the integration of deterministic safety gates around probabilistic models. We treat LLMs not as autonomous decision-makers, but as cognitive translation layers: parsing unstructured human inputs into structured JSON payloads.',
      'Once structured, these payloads pass through rigorous deterministic rule validation code—written in strict TypeScript or C#—before any database commit or external API call is authorized.'
    ],
    keyTakeaways: [
      'Treat LLMs as cognitive extractors, not unchecked decision authorities',
      'Wrap model outputs with deterministic schema validation and constraint gates',
      'Implement human-in-the-loop escalation paths for edge exceptions',
    ],
  },
  {
    id: 'cloud-infrastructure-cost-reliability',
    category: 'Cloud Architecture',
    title: 'Engineering Cloud Infrastructure: Reliability Without Runaway Expenditure',
    shortDesc: 'Strategies for architecting resilient multi-cloud environments that maintain high availability while eliminating cloud bill surprises.',
    date: 'January 2026',
    readTime: '7 min read',
    content: [
      'Public cloud infrastructure offers unprecedented agility, yet without deliberate architectural boundaries, managed services and egress fees can balloon unpredictably. Engineering cloud systems requires balancing high availability with financial discipline.',
      'By utilizing containerization standards (Docker) and declarative Infrastructure as Code (Terraform), we build architectures that remain portable between AWS, Microsoft Azure, and dedicated infrastructure, avoiding proprietary vendor lock-in.',
      'Strategically placing caching layers (Redis) and offloading read traffic through distributed CDN edges dramatically reduces primary database load and cloud compute costs while simultaneously decreasing global response latency.'
    ],
    keyTakeaways: [
      'Maintain cloud portability through containerization and Infrastructure as Code',
      'Implement edge caching to protect core database compute from traffic spikes',
      'Set automated alerting thresholds on resource utilization and cloud spend',
    ],
  },
];
