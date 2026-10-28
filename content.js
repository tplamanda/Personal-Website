/*
  EDIT THIS FILE TO CHANGE WHAT APPEARS ON YOUR SITE.
  Everything is plain text inside quotes. Keep the commas and quote marks.
  Leave a value as "" to hide it (for example a project with no demo link).
*/
window.SITE = {

  /* ---------- Basics ---------- */
  name: "Keeping Score",
  headline: "Learning, trying, building things",
  intro: "Humanities graduate turned finance operations professional, now learning to vibe code, crochet and speak a new language.",
  location: {
    current: "Tokyo, Japan",
    origin: "Singapore, Singapore",
    aimingFor: ["Stockholm or Gothenburg, Sweden", "Copenhagen, Denmark"]
  },
  funFacts: [
    "Did a women's doubles HYROX for fun in 2024.",
    "Enjoys collecting music CDs.",
    "Accidentally represented my faculty in a tennis singles competition in university. That was how I found out how long a tennis game could be."
  ],
  email: "nicetomeetyoumandy@gmail.com",            // shown in the footer and in error messages
  github: "https://github.com/tplamanda",
  linkedin: "https://www.linkedin.com/in/amandatanpl",

  /* ---------- Request resume form ----------
     1. Go to https://web3forms.com and enter your email to get a free access key.
     2. Paste the key below. Requests will be emailed to the address you used. */
  formKey: "8a24064c-5cfa-4996-b6f0-a31d2f67a65c",

  /* ---------- Projects ----------
     Add a project by copying one block (from { to },) and pasting it below.
     image: optional. Put a screenshot in the images folder, e.g. "images/tracker.png".
            Leave "" to show a coloured block instead.
     Projects appear in the order listed. */
  projects: [
    {
      title: "Grocery price tracker",
      description: "Tracks staple grocery prices across supermarkets in Kanagawa and keeps a price history.",
      tags: ["Web app", "Japan"],
      demo: "",
      code: "",
      image: ""
    },
    {
      title: "Guesthouse",
      description: "(WIP) For friends and family who wish to stay with us in Japan",
      tags: ["Tag", "Tag"],
      demo: "",
      code: "",
      image: ""
    },
    {
      title: "PharmaFun",
      description: "(WIP) A game to recommend Japanese pharmacy products to friends visiting",
      tags: ["Tag", "Tag"],
      demo: "",
      code: "",
      image: ""
    }
  ],

  /* ---------- Resume section ---------- */
  resume: {
    heading: "Resume",
    summary: "Finance operations professional with about six years in SaaS accounts receivable and collections. I enjoy automating reporting and improving billing and collections processes.",

    experience: [
      {
        role: "Senior AR Operations Analyst",
        company: "Zendesk",
        period: "2021-2025",
        note: "First AR hire. Built out collections processes and processes, co-led a software implementation, and automated reporting with Google Apps Script."
      },
      {
        role: "Finance Assistant",
        company: "Affordable Art Fair",
        period: "2019-2020",
        note: "AR, AP, and month-end close across Singapore, Australia, and Hong Kong."
      }
    ],

    education: [
      "B.A. (Hons) Psychology, Nanyang Technological University",
      "Specialist Diploma in Professional Accounting, Singapore Polytechnic"
    ],

    skills: ["NetSuite", "Salesforce", "Zuora", "Coupa", "Cforia", "Google Apps Script"],

    requestHeading: "Request my resume",
    requestText: "Leave your details and I will email you a copy."
  }
};
