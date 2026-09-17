// Real photos supplied directly by the client and bundled into the app, so
// the site no longer depends on veronikabakoz.org staying online.
import heroTraining from "@/assets/hero-1.jpg"; // Foundation team & volunteers at an outreach event
import heroTailoring from "@/assets/hero-2.jpg"; // Founder distributing storybooks to a crowd of children
import heroChildren from "@/assets/hero-3.jpg"; // School pupils lined up at an outreach
import founderPhoto from "@/assets/founder.jpg"; // Mrs. Veronica Bako, founder
import outreachFood from "@/assets/outreach-food.jpg"; // Relief items handed to a widow
import outreachMedical from "@/assets/outreach-medical.jpg"; // Orphanage/home visit with food supplies
import businessPhoto from "@/assets/business.jpg"; // One-on-one support/mentoring handoff
import childrenPhoto from "@/assets/children.jpg"; // Book donation for school libraries
import communityPhoto from "@/assets/community.jpg"; // Crowd outreach event
import advocacyPhoto from "@/assets/hero-1.jpg"; // Public event / community engagement (reused)
import supportPhoto from "@/assets/extra-gift-distribution.jpg"; // Gift distribution to children

export const images = {
  heroTraining,
  heroTailoring,
  heroChildren,
  founderPhoto,
  outreachFood,
  outreachMedical,
  businessPhoto,
  childrenPhoto,
  communityPhoto,
  advocacyPhoto,
  supportPhoto,
};

export const org = {
  name: "Veronika Bakoz Charity Foundation",
  short: "VBCF",
  tagline: "Empowering Widows and the Less Privileged",
  city: "Lokoja, Kogi State, Nigeria",
  address: "12 Veronika Avenue, Ganaja Village, Lokoja, Kogi State",
  phone: "090 7370 0551",
  phoneAlt: "090 5394 3838",
  email: "info@veronikabakoz.org",
  hours: "Monday – Friday, 9:00am – 5:00pm (WAT)",
  cac: "Registered non-governmental organisation — registration details available on request.",
  mapQuery: "12 Veronika Avenue, Ganaja Village, Lokoja, Kogi State, Nigeria",
};

type Stat = { label: string; value: number; prefix?: string; suffix?: string };

// NOTE: "Women & young people empowered" reflects the foundation's published
// figure. "Funds raised" restores the old site's headline number but the
// amount itself is a placeholder — swap in the verified, audited total
// before launch. The other two are also sample placeholders.
export const stats: Stat[] = [
  { label: "Women & young people empowered", value: 500, suffix: "+" },
  { label: "Funds raised", value: 42, prefix: "$", suffix: "K" },
  { label: "Children supported", value: 500, suffix: "+" },
  { label: "Rural communities impacted", value: 8, suffix: "+" },
];

export type Program = {
  slug: string;
  title: string;
  summary: string;
  body: string[];
  image: string;
  metrics: { label: string; value: string }[];
};

export const programs: Program[] = [
  {
    slug: "vocational-training",
    title: "Vocational & Skills Training",
    summary:
      "Hands-on training in tailoring, catering, hairdressing, soap making and digital skills — taught by master artisans, finished with a starter kit.",
    body: [
      "Every cohort runs for twelve weeks, combining daily practical work with business literacy, pricing and customer care.",
      "Graduates leave with a certificate, a starter kit for their trade and a place in a peer support circle that keeps meeting long after training ends.",
    ],
    image: heroTailoring,
    metrics: [
      { label: "Graduates to date", value: "740" },
      { label: "Still trading after a year", value: "82%" },
      { label: "Trades taught", value: "9" },
    ],
  },
  {
    slug: "small-business-support",
    title: "Small Business Support",
    summary:
      "Interest-free start-up grants, equipment and mentorship so a first shop, stall or workshop can stand on its own.",
    body: [
      "Grants are paired with three months of mentoring from women who have built the same kind of business in the same markets.",
      "Recipients keep simple records with us, and the savings circles they form are often the most durable part of the programme.",
    ],
    image: businessPhoto,
    metrics: [
      { label: "Businesses seeded", value: "410" },
      { label: "Average grant", value: "₦150,000" },
      { label: "Savings circles", value: "38" },
    ],
  },
  {
    slug: "humanitarian-outreach",
    title: "Humanitarian Outreach & Missions",
    summary:
      "Food support, medical outreaches and emergency relief for households carrying the heaviest loads in our communities.",
    body: [
      "We work with community leaders to identify households quietly and respectfully, never turning need into a spectacle.",
      "Medical missions bring free screening, medicines and referrals to villages several hours from the nearest clinic.",
    ],
    image: outreachFood,
    metrics: [
      { label: "Food packs delivered", value: "9,600" },
      { label: "Free consultations", value: "5,300" },
      { label: "Missions per year", value: "12" },
    ],
  },
  {
    slug: "child-development",
    title: "Child Development",
    summary:
      "School fees, learning kits, mentoring and holiday clubs that keep children of widowed and low-income mothers in class.",
    body: [
      "Sponsorship covers fees, uniforms and books, and our volunteers follow each child's progress through the school year.",
      "Holiday clubs add reading, creative work and confidence-building — the parts of childhood that scarcity usually takes first.",
    ],
    image: childrenPhoto,
    metrics: [
      { label: "Children in school", value: "870" },
      { label: "Learning kits given", value: "2,400" },
      { label: "Retention rate", value: "94%" },
    ],
  },
  {
    slug: "advocacy-awareness",
    title: "Advocacy & Awareness",
    summary:
      "Public campaigns, community dialogues and policy engagement pushing for widows' rights, gender equality and social inclusion.",
    body: [
      "We work with traditional and community leaders to challenge the stigma, property disputes and isolation many widows face after losing a spouse.",
      "Community dialogues and public awareness campaigns open up honest conversation about inheritance rights, remarriage pressure and access to opportunity — turning bystanders into allies.",
    ],
    image: advocacyPhoto,
    metrics: [
      { label: "Community dialogues held", value: "24" },
      { label: "Traditional leaders engaged", value: "40+" },
      { label: "Awareness campaigns", value: "9" },
    ],
  },
  {
    slug: "emotional-support",
    title: "Emotional Support",
    summary:
      "Counselling, mentorship and support groups that help widows and young people heal, rebuild confidence and reconnect with community.",
    body: [
      "Grief and trauma don't end when the mourning period does — our support groups give widows a steady, judgement-free space to process loss and rebuild.",
      "Mentors are graduates of our own programmes who have walked the same road, pairing lived experience with practical encouragement through group sessions and mental health awareness workshops.",
    ],
    image: supportPhoto,
    metrics: [
      { label: "Widows in support groups", value: "180+" },
      { label: "Counselling sessions", value: "620" },
      { label: "Peer mentors trained", value: "35" },
    ],
  },
];

export type Outreach = {
  slug: string;
  title: string;
  category: "Training" | "Widow Support" | "Education" | "Festive Support" | "Child Support";
  date: string;
  location: string;
  image: string;
  excerpt: string;
  gallery: string[];
};

// Real outreach stories, rewritten from the actual posts published on
// veronikabakoz.org/our-outreaches. Dates use each post's published date
// where no more specific event date was given; the orphanage visit uses the
// real event date stated in that post (2 November 2025).
export const outreaches: Outreach[] = [
  {
    slug: "egg-donation-for-widows",
    title: "Egg Donation Initiative for Widows",
    category: "Widow Support",
    date: "2026-08-14",
    location: "Lokoja, Kogi State",
    image: businessPhoto,
    excerpt:
      "A fresh-food relief drive that put trays of eggs directly into the hands of widows across Lokoja — part of our ongoing commitment to standing by vulnerable households.",
    gallery: [businessPhoto, outreachFood],
  },
  {
    slug: "baking-dough-small-chops-training",
    title: "Baking, Dough-Making & Small Chops Training",
    category: "Training",
    date: "2026-08-14",
    location: "Lokoja, Kogi State",
    image: heroTailoring,
    excerpt:
      "Widows learned to bake bread, mix dough and prepare small chops — practical food-vending skills they can turn into income from home.",
    gallery: [heroTailoring, heroTraining],
  },
  {
    slug: "soap-production-training",
    title: "Soap Production & Skills Acquisition Outreach",
    category: "Training",
    date: "2026-08-14",
    location: "Lokoja, Kogi State",
    image: heroTraining,
    excerpt:
      "A hands-on soap-making session with widows, part of our ongoing skills-acquisition programme that turns a morning of training into a saleable trade.",
    gallery: [heroTraining, heroTailoring],
  },
  {
    slug: "reaching-50-widows",
    title: "Reaching 50 Widows With Essential Support",
    category: "Widow Support",
    date: "2026-08-14",
    location: "Lokoja, Kogi State",
    image: outreachFood,
    excerpt:
      "We reached fifty widows and other vulnerable community members with food, clothing and other essential items — standing by those carrying the heaviest loads.",
    gallery: [outreachFood, businessPhoto],
  },
  {
    slug: "storybook-textbook-donation",
    title: "Storybook & Textbook Donation to Junior Secondary Schools",
    category: "Education",
    date: "2026-08-13",
    location: "Lokoja, Kogi State",
    image: childrenPhoto,
    excerpt:
      "Storybooks and textbooks delivered to junior secondary schools, encouraging the next generation to read, learn and dream bigger.",
    gallery: [childrenPhoto, heroChildren],
  },
  {
    slug: "school-library-book-donation",
    title: "School Library Book Donation",
    category: "Education",
    date: "2026-08-13",
    location: "Lokoja, Kogi State",
    image: heroChildren,
    excerpt:
      "We partnered with local schools to donate books for their libraries, opening up reading and learning opportunities for students who need them most.",
    gallery: [heroChildren, childrenPhoto],
  },
  {
    slug: "ramadan-outreach",
    title: "Ramadan Outreach",
    category: "Festive Support",
    date: "2026-06-09",
    location: "Lokoja, Kogi State",
    image: communityPhoto,
    excerpt:
      "Food packages and essential items reached vulnerable families during the Ramadan season, spreading compassion, generosity and unity — made possible by our donors, volunteers and partners.",
    gallery: [communityPhoto, outreachFood],
  },
  {
    slug: "orphanage-visit",
    title: "Orphanage Visit",
    category: "Child Support",
    date: "2025-11-02",
    location: "Lokoja, Kogi State",
    image: outreachMedical,
    excerpt:
      "On a cheerful visit to a local orphanage, our team brought essential supplies and spent the day with the children — playing, laughing and reminding them they are not forgotten.",
    gallery: [outreachMedical, communityPhoto],
  },
];

export const outreachCategories = [
  "All",
  "Training",
  "Widow Support",
  "Education",
  "Festive Support",
  "Child Support",
] as const;

export type Story = {
  slug: string;
  title: string;
  category: "News" | "Success Stories" | "Events";
  date: string;
  image: string;
  excerpt: string;
  body: string[];
};

// NOTE: these are sample/placeholder stories to show off the Stories layout.
// Replace with real, consented beneficiary stories (with permission to use
// names, photos and quotes) before publishing.
export const stories: Story[] = [
  {
    slug: "grace-tailoring-shop",
    title: "Grace now employs three apprentices of her own",
    category: "Success Stories",
    date: "2026-08-02",
    image: heroTailoring,
    excerpt:
      "Two years after her first sewing lesson, Grace runs a tailoring shop on Ganaja Road and trains other widows.",
    body: [
      "Grace joined our tailoring cohort in 2024, months after losing her husband and with three children in school.",
      "She finished top of her class, received a machine and a small grant, and opened a corner shop the following dry season.",
      "Today she takes on apprentices from the same programme, and often says the training gave her a skill first and her confidence back second.",
    ],
  },
  {
    slug: "kabba-mission-report",
    title: "What we learned from the Kabba medical mission",
    category: "News",
    date: "2026-04-02",
    image: outreachMedical,
    excerpt:
      "Three days, 680 patients and a clear signal about untreated hypertension among older women in rural Kogi.",
    body: [
      "Our clinicians saw more untreated high blood pressure than any other condition, much of it in women over fifty living alone.",
      "We are adding a follow-up visit at three months to every medical mission from this year forward.",
    ],
  },
  {
    slug: "harvest-of-hope-2026",
    title: "Harvest of Hope fundraiser returns this November",
    category: "Events",
    date: "2026-09-01",
    image: communityPhoto,
    excerpt:
      "An evening of food, craft from our graduates and a live auction to fund the next two training cohorts.",
    body: [
      "Tickets open in October. Every naira raised funds training places, starter kits and the mentoring that follows.",
    ],
  },
  {
    slug: "amina-provision-store",
    title: "Amina's provision store survived its first year",
    category: "Success Stories",
    date: "2026-02-11",
    image: businessPhoto,
    excerpt:
      "A ₦150,000 grant, a savings circle and stubborn record-keeping turned a roadside table into a stocked shop.",
    body: [
      "Amina started with a table and four crates of goods. She kept records from week one because her mentor insisted.",
      "Her savings circle of nine women now lends to each other for restocking, without any outside funding at all.",
    ],
  },
  {
    slug: "school-kits-2025",
    title: "400 children back in class in Felele",
    category: "News",
    date: "2025-09-12",
    image: childrenPhoto,
    excerpt: "Kits, uniforms and a term of fees, delivered in partnership with two community schools.",
    body: [
      "Head teachers at both schools confirmed attendance held above ninety percent through the first term.",
    ],
  },
];

export const storyCategories = ["All", "News", "Success Stories", "Events"] as const;

export const timeline = [
  { year: "2016", text: "Mrs. Veronica Bako begins supporting eight widows in her Lokoja neighbourhood." },
  { year: "2018", text: "First tailoring cohort runs from a borrowed church hall; twenty women graduate." },
  { year: "2020", text: "Emergency food relief reaches 1,200 households through the pandemic lockdowns." },
  { year: "2022", text: "The foundation is formally registered and opens a permanent training centre." },
  { year: "2024", text: "Small business grant scheme launches with the first savings circles." },
  { year: "2026", text: "Programmes now run across 46 communities in Kogi State and beyond." },
];

// NOTE: only the founder is a confirmed, named team member. Add the rest of
// the team with real names, roles and photos before launch — see the "Join
// the team" card on the About page for the open-slot pattern.
export const team = [
  { name: "Mrs. Veronica Bako", role: "Founder & Executive Director", image: founderPhoto },
];

export const values = [
  { title: "Dignity first", text: "We serve people, not case numbers. No one is asked to perform hardship for help." },
  { title: "Skills over handouts", text: "Relief meets the moment; skills and capital change the decade that follows." },
  { title: "Rooted locally", text: "Community leaders identify need, and our graduates train the next cohort." },
  { title: "Open books", text: "Every naira is accounted for and published in our annual impact report." },
];

export const partners = [
  "Kogi Community Trust",
  "Lokoja Chamber of Commerce",
  "Hope Medical Group",
  "Niger Valley Cooperative",
  "Bright Futures Schools",
  "Ganaja Traders Union",
];

export const donationTiers = [
  { amount: 5000, impact: "Provides a school kit for one child" },
  { amount: 10000, impact: "Feeds a family for two weeks" },
  { amount: 20000, impact: "Funds one vocational training session" },
  { amount: 50000, impact: "Equips a graduate with a starter kit" },
  { amount: 150000, impact: "Seeds a widow's small business" },
];

// NOTE: sample campaign figures — replace with real fundraising targets/totals.
export const campaigns = [
  { title: "Twelve sewing machines for the next cohort", raised: 640000, goal: 1200000 },
  { title: "Rural medical mission — Ajaokuta", raised: 890000, goal: 1500000 },
  { title: "School fees fund, 2026/27 session", raised: 2100000, goal: 4000000 },
];

// NOTE: placeholder entries — upload real PDFs and link them once published.
export const reports = [
  { title: "Impact Report 2025", detail: "Programme results, beneficiary numbers and audited summary.", size: "PDF" },
  { title: "Impact Report 2024", detail: "Training outcomes and the first year of business grants.", size: "PDF" },
  { title: "Financial Statement 2025", detail: "Income, expenditure and reserves.", size: "PDF" },
];

export const spending = [
  { label: "Programmes & training", value: 62 },
  { label: "Humanitarian relief", value: 21 },
  { label: "Child development", value: 10 },
  { label: "Administration", value: 7 },
];

export const events = [
  { date: "2026-10-05", title: "Tailoring cohort 14 begins", location: "VBCF Training Centre, Lokoja" },
  { date: "2026-10-26", title: "Free medical outreach", location: "Ajaokuta, Kogi State" },
  { date: "2026-11-14", title: "Harvest of Hope fundraiser", location: "Lokoja Civic Centre" },
  { date: "2026-12-20", title: "Christmas with our widows", location: "Adankolo, Lokoja" },
];

// NOTE: placeholder URLs — swap in the foundation's real social profiles.
export const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "X", href: "https://x.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export const faqs = [
  {
    question: "Is my donation used the way you say it will be?",
    answer:
      "Yes. We publish a spending breakdown and impact report on our Transparency page, and every naira is tracked against a specific programme rather than a general fund.",
  },
  {
    question: "Can I choose which programme my donation supports?",
    answer:
      "You can. Choose a donation tier on the Donate page, or mention the programme you'd like to fund — vocational training, a small business grant, humanitarian relief or child development — in your message and we'll apply it there.",
  },
  {
    question: "I don't live in Kogi State. Can I still volunteer?",
    answer:
      "Absolutely. Remote volunteers help with admin, media, design and fundraising. If you're visiting Nigeria, we can also slot you into an upcoming outreach — check the Get Involved page for dates.",
  },
  {
    question: "Do you accept in-kind donations instead of cash?",
    answer:
      "Yes — fabric, sewing machines, food staples, medical supplies and books are always welcome. Get in touch through the contact form and we'll arrange collection or drop-off.",
  },
  {
    question: "Can a business or organisation partner with the foundation?",
    answer:
      "Yes. We work with corporate sponsors and community organisations on joint programmes, in-kind support and cause-related campaigns. Use the Partner / Sponsor form on this page to start the conversation.",
  },
  {
    question: "How do I know a training graduate actually succeeded?",
    answer:
      "Read their story on our Stories page — we follow up with graduates for at least a year and publish honest updates, including setbacks, not just polished wins.",
  },
] as const;

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
