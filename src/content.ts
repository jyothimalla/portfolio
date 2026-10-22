// ─────────────────────────────────────────────────────────────────────────
// SITE CONTENT
// Every piece of text, link, and list on the site lives in this file.
// Edit the values below — the page updates automatically. No need to touch
// any component files to change wording, add a job, or update a skill.
// ─────────────────────────────────────────────────────────────────────────

export const site = {
  name: 'Jyothi Malla',
  title: 'Jyothi Malla - PhD Student, Goldsmiths, University of London',
  email: 'mjyothionline@gmail.com',
  location: 'London, United Kingdom',
  year: '2026',
  nav: [
    { label: 'Research', href: '#about' },
    { label: 'Curriculum', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
}

export const about = {
  heading: 'About Me',
  photo: `${import.meta.env.BASE_URL}Profile_ic_Jo%20Medium.jpeg`,
  paragraphs: [
    "I'm a PhD student at Goldsmiths, University of London, exploring how health data analytics, Machine Learning and Artificial Intelligence can address real-world healthcare challenges. My work spans predictive modelling, statistical analysis and natural language processing applied to large-scale clinical and epidemiological data, with a particular focus on early diagnosis, risk stratification and patient pathways in maternal and infant health.",
    "My Master's dissertation on predictive modelling for patient readmission was referenced in a UK Parliament discussion on NHS wait-time planning — part of my MSc in Data Science (Distinction) at Goldsmiths. Building on that work, my PhD focuses on developing AI-based Clinical Decision Support tools for maternal and infant health, addressing equity gaps through community health worker-centred frameworks.",
  ],
  tags: ['London, UK', 'PhD Student, Goldsmiths', 'English · Telugu · Hindi'],
}

export const education = {
  heading: 'Education',
  items: [
    {
      badge: 'PHD',
      degree: 'PhD',
      school: 'Goldsmiths, University of London',
      detail: 'In progress',
    },
    {
      badge: 'MSC',
      degree: 'MS in Data Science',
      school: 'Goldsmiths, University of London',
      detail: 'Graduated with 80%',
    },
    {
      badge: 'BE',
      degree: 'BE in Electronics & Communications',
      school: 'Andhra University',
      detail: 'Graduated with 77.3%',
    },
  ],
}

export const experience = {
  heading: 'Experience',
  items: [
    {
      period: 'Sep 2024 — Aug 2026',
      title: 'Research Collaborator — AI in Maternal & Infant Health',
      org: 'Goldsmiths, University of London',
      bullets: [
        'Co-developing NurtureAI, a Clinical Decision Support system for maternal and infant health.',
        'Conducting real-world data collection from feeding mothers in the UK to support model evaluation.',
        'Collaborating with UK academic partners on AI evaluation frameworks addressing equity gaps in South Asian maternal healthcare.',
        'Leading a structured literature review for AIiH 2026, focusing on AI-based CDS and maternal health.',
        "Evaluating ARMMAN's IHRP tool in the Indian context, centred on community health worker-delivered care (ANMs, ASHAs).",
      ],
      tags: ['Clinical Decision Support', 'Maternal & Infant Health', 'AI Evaluation'],
    },
    {
      period: 'Sep 2023 — Present',
      title: 'Teaching Assistant',
      org: 'Goldsmiths, University of London',
      bullets: [
        'Supporting undergraduate and postgraduate modules in data science and computing.',
        'Assisting students with Python programming, statistics and data analysis.',
        'Academic support during labs, coursework and assessments; liaison between students and faculty.',
      ],
      tags: ['Python', 'Statistics', 'Data Analysis'],
    },
    {
      period: 'Apr 2022 — Sep 2023',
      title: 'Manager — Data Engineering',
      org: 'Bank of India, Mumbai, India',
      bullets: [
        'Built systems that collect, manage and convert raw data into usable information for business analysts.',
        'Developed and maintained end-to-end data pipelines using ETL processes.',
        'Worked closely with the data science team to implement data analytics pipelines.',
        'Helped define data governance policies and supported data-versioning processes.',
        'Monitored and maintained existing pipelines.',
      ],
      tags: ['Data Engineering', 'ETL', 'Data Governance'],
    },
    {
      period: 'May 2019 — Mar 2022',
      title: 'Manager — Credit',
      org: 'Bank of India, Hyderabad, India',
      bullets: [
        'Led credit risk analysis on loan portfolios using quantitative modelling and data-driven monitoring frameworks.',
        'Implemented risk management policies to reduce financial exposure; oversaw loan proposals and repayment performance.',
        'Supported team training and operational oversight across credit assessment functions.',
      ],
      tags: ['Credit Risk Analysis', 'Quantitative Modelling', 'Risk Management'],
    },
    {
      period: 'Sep 2014 — Apr 2019',
      title: 'Assistant Manager',
      org: 'Bank of India, Hyderabad, India',
      bullets: [
        'Managed customer relationships, handling onboarding of savings, current and other retail banking accounts while ensuring KYC and regulatory compliance.',
        'Processed high-value financial transactions and issued banking products including ATM/debit cards, cheque books and digital banking services.',
        'Verified customer documentation and maintained data accuracy across core banking systems.',
        'Promoted digital banking adoption and trained junior staff on banking procedures and customer service best practices.',
      ],
      tags: ['Retail Banking', 'KYC & Compliance', 'Customer Relationship Management'],
    },
  ],
}

export const projects = {
  heading: 'Selected Projects & Publications',
  items: [
    {
      kind: 'Client Project',
      title: 'Readiness Global — Global Talent Visa Readiness Platform',
      description:
        'Developer of Readiness Global, built from scratch with Dr. Yemisi Adedeji and launched in October 2026. The platform helps international researchers and professionals prepare for the UK Global Talent Visa: a free eligibility checker returns a clear readiness tier (Apply Now, Strengthen Before Applying, or Not Yet) with a downloadable summary, alongside an AI chat assistant that answers applicant questions.',
      tags: ['React', 'TypeScript', 'TanStack', 'Tailwind CSS', 'Supabase', 'AI Assistant'],
      link: { label: 'Visit site', href: 'https://readinessglobal.co.uk/' },
    },
    {
      kind: 'Project',
      title: 'NurtureAI — Clinical Decision Support System',
      description:
        'Full-stack React/Vite CDS frontend comprising a midwife dashboard, patient detail views, assessment wizard and mother-facing view, backed by a FastAPI (Python) service for data ingestion, predictive scoring and clinical alerts, with a PostgreSQL/SQLAlchemy data layer and GitLab CI/CD.',
      tags: ['React', 'Vite', 'FastAPI', 'PostgreSQL'],
      link: null,
    },
    {
      kind: 'MSc Dissertation',
      title: 'Predictive Modelling for Patient Readmission',
      description:
        'MSc dissertation developing ML/NLP models on high-granularity clinical notes to predict hospital readmission risk. Cited in a UK Parliament discussion on NHS wait-time planning; research subsequently published peer-reviewed.',
      tags: ['Machine Learning', 'NLP', 'Python'],
      link: null,
    },
  ],
  publicationsHeading: 'Publications',
  publications: [
    {
      citation:
        'Kumar, A., Malla, J., & Sharma, A. (2025). BioBERT-RxReadmit: Improving Hospital Readmission Predictions Through Clinical Text Analysis with BioBERT.',
      journal: 'International Journal on Engineering Artificial Intelligence Management, Decision Support, and Policies, 2(1), 14–29.',
      link: { label: 'doi.org/10.63503/j.ijaimd.2025.38', href: 'https://doi.org/10.63503/j.ijaimd.2025.38' },
    },
    {
      citation: 'Malla, J. et al. NurtureAI: An Equity-Centred Clinical Decision Support Framework for Maternal and Infant Health.',
      journal: 'In preparation — target AIiH 2026, Imperial College London.',
      link: null,
    },
  ],
}

export const skills = {
  heading: 'Skills',
  groups: [
    {
      heading: 'Programming',
      items: ['Python', 'TypeScript', 'JavaScript', 'React', 'Angular', 'SQL', 'PHP', 'Node.js'],
    },
    {
      heading: 'Frameworks & Tools',
      items: ['FastAPI', 'Django', 'PyTorch', 'scikit-learn', 'NLTK', 'HuggingFace', 'PostgreSQL', 'SQLite', 'GitHub/GitLab', 'Power BI', 'Flutter'],
    },
    {
      heading: 'Soft Skills',
      items: ['Research & Technical Writing', 'Academic Collaboration', 'Data Storytelling', 'Project Leadership', 'Cross-functional Communication'],
    },
  ],
}

export const contact = {
  heading: 'Get in touch',
  paragraph: 'Available for research collaborations, academic discussions, and consulting on AI in healthcare.',
  email: 'mjyothionline@gmail.com',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jyothi-malla/' },
    { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=vEbtqcoAAAAJ&hl=en&oi=ao' },
  ],
}

export const footer = {
  text: `© ${site.year} ${site.name.toUpperCase()} — LONDON, UNITED KINGDOM`,
}
