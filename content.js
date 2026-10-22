/*
  EDIT THIS FILE TO CHANGE WHAT APPEARS ON YOUR SITE.
  Everything is plain text inside quotes. Keep the commas and quote marks.
  Leave a value as "" to hide it (for example a project with no demo link).
*/
window.SITE = {

  /* ---------- Basics ---------- */
  name: "Amanda Tan",
  headline: "I build small tools that make finance operations work easier.",
  intro: "A collection of projects I have built, plus a short summary of my work. My full resume is available on request.",
  email: "you@example.com",            // shown in the footer and in error messages
  github: "",                          // e.g. "https://github.com/yourname"
  linkedin: "",                        // e.g. "https://www.linkedin.com/in/yourname"

  /* ---------- Request resume form ----------
     1. Go to https://web3forms.com and enter your email to get a free access key.
     2. Paste the key below. Requests will be emailed to the address you used. */
  formKey: "PASTE_WEB3FORMS_ACCESS_KEY_HERE",

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
      title: "Project title",
      description: "One sentence on what it does and who it helps.",
      tags: ["Tag", "Tag"],
      demo: "",
      code: "",
      image: ""
    },
    {
      title: "Project title",
      description: "One sentence on what it does and who it helps.",
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
        period: "",
        note: "First AR hire. Built out collections processes, co-led the Cforia implementation, and automated reporting with Google Apps Script."
      },
      {
        role: "Finance Assistant",
        company: "Affordable Art Fair",
        period: "",
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
