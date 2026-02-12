export const SITE = {
  website: "https://shehata.consulting/",
  author: "Michael Shehata",
  profile: "https://shehata.consulting/",
  desc: "Enterprise-Grade AI Implementation & Automation. Hybrid RAG systems, LLM integrations, and process automation built around your business.",
  title: "Shehata Tech Solutions",
  ogImage: "shehata-og.jpg",
  lightAndDarkMode: false,          // dark mode only — matches the site design
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: false,              // no blog archives needed
  showBackButton: false,
  editPost: {
    enabled: false,                 // removes the "Edit page" link pointing to satnaing's repo
    text: "Edit page",
    url: "",
  },
  dynamicOgImage: false,            // static OG image is fine for a single-page site
  dir: "ltr",
  lang: "en",
  timezone: "America/New_York", 
} as const;