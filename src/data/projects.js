export const PROJECTS = [
  {
    slug: 'bulldog-mapping',
    title: 'Bulldog Mapping',
    blurb:
      'A campus map that reads your class schedule off a screenshot and routes you between buildings — construction closures and all.',
    tagline: 'Turning a class-schedule screenshot into a walking route across campus.',
    tags: ['Next.js', 'Mapbox GL', 'Supabase', 'AI/OCR'],
    year: '2026',
    role: 'Full-stack engineer · team of 5, built in Scrum sprints',
    accent: 'var(--accent-4)',
    links: {
      live: 'https://bulldog-mapping-one.vercel.app/',
      repo: 'https://github.com/malaviatanay/Bulldog-Mapping',
    },
    stats: [
      { value: '5', label: 'person team' },
      { value: '3', label: 'Scrum sprints' },
      { value: 'Custom', label: 'Dijkstra pathfinder' },
    ],
    overview:
      "Fresno State's campus is big enough that new students genuinely get lost between classes — and off-the-shelf map tools don't know which paths are closed for construction, or where your next class actually is. We set out to fix that.",
    approach: [
      {
        title: 'Digitize the campus',
        body: 'Converted every building footprint and walkway into a named GeoJSON graph — the source of truth every other feature builds on.',
      },
      {
        title: 'Build our own pathfinder',
        body: "Mapbox's directions API doesn't know our campus's actual walkways, so we wrote a Dijkstra pathfinder over the campus graph, with edge filtering for closures, stitched together with Mapbox for the outdoor legs.",
      },
      {
        title: 'Read a schedule off a screenshot',
        body: 'Built an OCR pipeline (Tesseract.js) that parses a screenshot of your class schedule, matches course names to real buildings, and generates a walking plan between back-to-back classes automatically.',
      },
      {
        title: 'Stay accurate during construction',
        body: 'Added a construction-zone system so closures get logged and the pathfinder reroutes around them in real time, instead of sending someone into a fenced-off walkway.',
      },
      {
        title: 'Add an AI concierge',
        body: 'Wired up a chat assistant (Groq + Gemini) for natural-language questions about the campus, backed by Supabase for auth and persistence.',
      },
      {
        title: 'Ship it like a team',
        body: 'Ran three Scrum sprints with a retrospective after each, a dedicated test-case spreadsheet, and a security-hardening pass before launch.',
      },
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'Mapbox GL',
      'Turf.js',
      'Supabase',
      'Tesseract.js OCR',
      'Groq',
      'Gemini',
      'Tailwind CSS',
    ],
    outcome:
      "Live as an installable PWA — students can drop in a schedule screenshot and get a full day's walking route, construction closures and all.",
  },
  {
    slug: 'schemagp',
    title: 'SchemaGP',
    blurb:
      'Cleaned and normalized a full F1 season into a BCNF-compliant PostgreSQL schema, then mined it for insights like pole position’s real win-rate impact.',
    tagline: 'Normalizing a full F1 season into a database that actually answers questions.',
    tags: ['SQL', 'PostgreSQL', 'Data Modeling', 'BCNF'],
    year: '2026',
    role: 'Solo · database systems coursework',
    accent: 'var(--accent)',
    links: {
      repo: 'https://github.com/darpanattri/SchemaGP',
    },
    stats: [
      { value: '38,703 → 38,260', label: 'rows cleaned' },
      { value: '8', label: 'BCNF tables' },
      { value: '7', label: 'SQL queries' },
      { value: '58.8%', label: 'pole-position win rate' },
    ],
    overview:
      "The 2020 F1 season produced 38,703 rows of lap times, telemetry, weather, and results across 17 COVID-shortened races — riddled with redundancy in raw form. The goal: a schema that survives real analytical questions without update anomalies.",
    approach: [
      {
        title: 'Extract',
        body: 'Pulled lap, result, weather, and telemetry data for all 17 races via FastF1 (official FIA timing), landing 38,703 raw rows across 4 sources.',
      },
      {
        title: 'Clean',
        body: 'Deduped on composite keys, dropped 443 null-lap rows, converted pandas timedeltas to float seconds, and cut 24 dead columns — 89 columns down to 65, every step logged for audit.',
      },
      {
        title: 'Normalize to BCNF',
        body: "Walked the schema through 1NF → 2NF → 3NF → BCNF, using the season's own quirks as forcing functions: Spielberg and Silverstone each hosted two races, forcing a clean Circuit-vs-Event split; mid-season substitutions forced Drivers apart from DriverSeason.",
      },
      {
        title: 'Constrain and load',
        body: 'Wrote CHECK constraints, an index, a FastestLaps view, and a trigger rejecting negative lap times — then loaded it all into PostgreSQL 16.',
      },
      {
        title: 'Query for insight',
        body: 'Wrote 7 queries, each exercising a different SQL feature — window functions, CTEs, STDDEV/HAVING, PERCENTILE_CONT — to answer real questions about the season.',
      },
    ],
    stack: ['Python 3', 'pandas', 'FastF1', 'PostgreSQL 16', 'psycopg2', 'matplotlib'],
    outcome:
      'Storing "Mercedes" dropped from ~2,500 redundant copies to 2; "Spielberg" from ~2,200 to 1. The clean schema turned two real findings into simple queries: pole position converted to a win 58.8% of the time — 6x more often than P2 — and soft tires ran 8 seconds/lap faster than hards despite drivers using them least, the classic single-lap-pace-vs-stint-length tradeoff.',
  },
  {
    slug: 'applied-ml-scikit-learn',
    title: 'Applied ML with scikit-learn',
    blurb:
      'Team project for CSCI 164: supervised learning on two datasets, three algorithms each, with hyperparameter tuning and a comparison to prior published work.',
    tagline: 'Two datasets, three algorithms each, and an honest comparison to prior work.',
    tags: ['Python', 'scikit-learn', 'Machine Learning'],
    year: 'Apr 2026',
    role: 'Team of 4 · CSCI 164 Artificial Intelligence',
    accent: 'var(--accent-2)',
    links: {
      repo: 'https://github.com/malaviatanay/Applied-Machine-Learning-with-scikit-learn',
    },
    stats: [
      { value: '2', label: 'datasets' },
      { value: '6', label: 'models trained' },
      { value: '4', label: 'person team' },
    ],
    overview:
      'A supervised-learning study for our AI course: take two very different problems — classification and regression — run three algorithms on each, tune them properly, and check the results against published benchmarks instead of declaring victory on face value.',
    approach: [
      {
        title: 'Pick contrasting problems',
        body: 'Titanic survival prediction (binary classification, Kaggle) and California median housing value (regression, sklearn built-in) — different data shapes, different failure modes.',
      },
      {
        title: 'Baseline first',
        body: 'Logistic Regression, k-NN, and Decision Tree for Titanic; Linear Regression, Decision Tree Regressor, and an MLP for housing — trained plain, no tuning, for an honest baseline.',
      },
      {
        title: 'Tune deliberately',
        body: "Ran GridSearchCV over each model's real hyperparameters instead of eyeballing defaults.",
      },
      {
        title: 'Compare to the literature',
        body: 'Checked tuned results against previously published numbers on the same datasets, instead of reporting our own metrics in isolation.',
      },
      {
        title: 'Write it up',
        body: 'Packaged findings into an executive summary report and presentation, with every notebook reproducible end-to-end.',
      },
    ],
    stack: ['Python', 'scikit-learn', 'pandas', 'Jupyter', 'GridSearchCV'],
    outcome:
      'Two independently reproducible notebooks plus a summary report — the full pipeline reruns end-to-end in under 2 minutes per notebook.',
  },
  {
    slug: 'this-portfolio',
    title: 'This Portfolio',
    blurb: 'The site you’re on, including this page — designed and built from scratch with React and Vite, no template.',
    tagline: 'The site you’re on, including this page.',
    tags: ['React', 'Vite', 'CSS'],
    year: '2026',
    role: 'Solo · designed and built from scratch',
    accent: 'var(--accent-3)',
    links: {
      repo: 'https://github.com/malaviatanay/Portfolio',
    },
    stats: [
      { value: '0', label: 'templates used' },
      { value: '4', label: 'accent colors' },
    ],
    overview:
      "Most portfolio templates read the same. The brief I gave myself: bold, dark, a little playful, and honest about what's actually behind each project — not just a link out to GitHub.",
    approach: [
      {
        title: 'Start with a strong hero',
        body: 'A gradient wordmark, one clear sentence about what I do, and no stock photography.',
      },
      {
        title: 'Design system before content',
        body: 'Locked in a dark palette with four rotating accent colors, one display font, and consistent spacing before writing a single section.',
      },
      {
        title: 'Build it in React + Vite',
        body: 'No template — hand-built components, scroll-triggered reveals via IntersectionObserver, and React Router for real per-project case study pages like this one.',
      },
      {
        title: 'Test it like a real product',
        body: 'Checked every change in headless Chrome at desktop and mobile widths before shipping — including catching and fixing a mobile-nav bug that would’ve otherwise gone live.',
      },
      {
        title: 'Ship continuously',
        body: 'Deployed on Vercel with auto-deploys on every push to main, so the live site never drifts from the repo.',
      },
    ],
    stack: ['React', 'Vite', 'React Router', 'CSS', 'Vercel'],
    outcome:
      'Every project on this site — including itself — gets a real case study instead of a one-line blurb.',
  },
]

export function getProject(slug) {
  return PROJECTS.find((project) => project.slug === slug)
}
