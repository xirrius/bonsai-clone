import {
  accounting,
  agreementtemplates,
  brieftemplates,
  clientcrm,
  contracts,
  contracttemplates,
  formsautomation,
  invoices,
  invoicetemplates,
  proposals,
  proposaltemplates,
  quotetemplates,
  scopeofworktemplates,
  tasktracking,
  timetracking,
} from "../assets";

export const NavbarTabs = [
  {
    name: "Product",
    // link: '#',
  },
  {
    name: "Templates",
    // link: '#',
  },
  {
    name: "Pricing",
    link: "#",
  },
  {
    name: "Reviews",
    link: "#",
  },
];

export const ProductLinks = [
  {
    title: "Bonsai Workflow",
    desc: "Look professional, win more clients and manage your business from one place",
    // link: "#",
  },
  {
    title: "Bonsai Tax",
    desc: "Track expenses, maximize tax write-offs, and estimate taxes without the headache",
    link: "#",
  },
  {
    title: "Bonsai Cash",
    desc: "Bonsai's all-in-one financial hub: No fees and lightning fast payouts",
    link: "#",
  },
];

export const WorkflowLinks = [
  {
    icon: invoices,
    name: "Invoices",
    desc: "Get paid faster with automatic invoicing, online payments and more",
    link: "#",
  },
  {
    icon: contracts,
    name: "Contracts",
    desc: "Protect your business with full-customizable contract templates. Edit and e-sign hassle free.",
    link: "#",
  },
  {
    icon: formsautomation,
    name: "Forms & Automations",
    desc: "Boost client intake and automate feedback with custom web forms and questionnaires",
    link: "#",
  },
  {
    icon: accounting,
    name: "Accounting",
    desc: "Manage your finances easily with income reports, expense tracking, tax reminders and more",
    link: "#",
  },
  {
    icon: proposals,
    name: "Proposals",
    desc: "Create client-winning proposals with open receipts, custom packages and electronic approvals",
    link: "#",
  },
  {
    icon: clientcrm,
    name: "Client CRM",
    desc: "Add leads, manage existing clients and track projects easily from one place",
    link: "#",
  },
  {
    icon: timetracking,
    name: "Time Tracking",
    desc: "Stay organized with Bonsai's all-in-one time tracker, automated timesheets and billing system",
    link: "#",
  },
  {
    icon: tasktracking,
    name: "Task Tracking",
    desc: "Stress-free task management with project templates and integrated timesheets",
    link: "#",
  },
];

export const TemplatesLinks = [
  {
    name: "Contract Templates",
    icon: contracttemplates,
    links: [
      {
        name: "Free Contract Maker",
        link: "#",
      },
      {
        name: "Social Media Management Contract Template",
        link: "#",
      },
      {
        name: "Graphic Design Contract Template",
        link: "#",
      },
      {
        name: "Digital Marketing Contract Template",
        link: "#",
      },
    ],
    seeAllTemplates: true,
  },
  {
    name: "Proposal Templates",
    icon: proposaltemplates,
    links: [
      {
        name: "Graphic Design Proposal Template",
        link: "#",
        seeAllTemplates: true,
      },
      {
        name: "Business Proposal Template",
        link: "#",
      },
      {
        name: "Brand Ambassador Proposal Template",
        link: "#",
      },
      {
        name: "Data Entry Proposal Letter Template",
        link: "#",
      },
    ],
    seeAllTemplates: true,
  },
  {
    name: "Invoice Templates",
    icon: invoicetemplates,
    links: [
      {
        name: "Social Media Invoice Template",
        link: "#",
      },
      {
        name: "Contractor Invoice Template",
        link: "#",
      },
      {
        name: "Web Design Invoice Template",
        link: "#",
      },
      {
        name: "Influencer Invoice Template",
        link: "#",
      },
    ],
    seeAllTemplates: true,
  },
  {
    name: "Agreement Templates",
    icon: agreementtemplates,
    links: [
      {
        name: "Influencer Agreement Template",
        link: "#",
      },
      {
        name: "Influencer Collaboration Agreement Template",
        link: "#",
      },
      {
        name: "Monthly Retainer Agreement Template",
        link: "#",
      },
      {
        name: "Writer Agreement Template",
        link: "#",
      },
    ],
    seeAllTemplates: true,
  },
  {
    name: "Quote Templates",
    icon: quotetemplates,
    links: [
      {
        name: "Web Design Quotation Template",
        link: "#",
      },
      {
        name: "Interior Design Quotation Template",
        link: "#",
      },
      {
        name: "Digital Marketing Quotation Template",
        link: "#",
      },
      {
        name: "Video Production Quotation Template",
        link: "#",
      },
    ],
    seeAllTemplates: true,
  },
  {
    name: "Scope of Work Templates",
    icon: scopeofworktemplates,
    links: [
      {
        name: "Website Development Scope of Work Template",
        link: "#",
      },
      {
        name: "Digital Marketing Scope of Work Template",
        link: "#",
      },
      {
        name: "Consultant Scope of Work Template",
        link: "#",
      },
      {
        name: "Interior Design Scope of Work Template",
        link: "#",
      },
    ],
    seeAllTemplates: true,
  },
  {
    name: "Brief Templates",
    icon: brieftemplates,
    links: [
      {
        name: "Design Brief Template",
        link: "#",
      },
      {
        name: "Architecture Design Brief",
        link: "#",
      },
      {
        name: "Fashion Design Brief",
        link: "#",
      },
      {
        name: "Creative Brief Template",
        link: "#",
      },
    ],
    seeAllTemplates: false,
  },
];

export const PricingPlan = [
  {
    name: "Starter",
    desc: "Ideal for freelancers and contractors just starting out.",
    amt: {
      monthly: "24",
      yearly: "17",
    },
    points: [
      "All Templates",
      "Unlimited Clients & Projects",
      "Invoicing & Payments",
      "Proposals & Contracts",
      "Tasks & Time Tracking",
      "Client CRM",
      "Expense Tracking",
      "Up to 5 Project Collaborators",
    ],
  },
  {
    name: "Professional",
    desc: "Everything a growing independent business needs to thrive.",
    amt: {
      monthly: "39",
      yearly: "32",
    },
    points: [
      "Everything in Starter plus...",
      "Custom Branding",
      "Forms & Questionnaires",
      "Workflow Automations",
      "Client Portal",
      "QuickBooks Integration",
      "Calendly Integration",
      "Zapier Integration",
      "Up to 15 Project Collaborators",
    ],
  },
  {
    name: "Business",
    desc: "The perfect package for small businesses and agencies.",
    amt: {
      monthly: "79",
      yearly: "52",
    },
    points: [
      "Everything in Starter and Professional plus...",
      "Subcontractor Management",
      "Hiring Agreement Templates (1099 contracts)",
      "Subcontractor Onboarding",
      "Talent Pool",
      "3 Team Seats (additional seats $9/month)",
      "Accountant Access",
      "Connect Multiple Bank Accounts",
      "Unlimited Subcontractors",
      "Unlimited Project Collaborators",
    ],
  },
];

export const AddonData = [
  {
    name: { yearly: "Accounting & Tax Assistant", monthly: "Bonsai Tax" },
    desc: "Manage your freelance finances and always be ready for tax season with easy-to-use accounting and tax tools.",
    amt: {
      monthly: "10",
      yearly: "100",
    },
  },
  {
    name: "Partners",
    desc: "Invite other users for full account access and company management.",
    amt: {
      monthly: "9",
      yearly: "90",
    },
  },
  {
    name: "Collaborators",
    desc: "Invite other users to specific projects for limited access and functionality.",
    amt: {
      monthly: "Free",
      yearly: "Free",
    },
  },
];

export const FAQs = [
  {
    q: "How does the free trial work?",
    a: "When you start your trial with Bonsai you'll receive full, unlimited access to all of Bonsai's Workflow or Workflow Plus Features! You will need to enter your credit card information to begin your trial, but don't worry - we won't charge you anything until the subscription ends! If you wish to cancel at any time during the trial period, you can do so through your Subscriptions Settings Page.",
  },
  {
    q: "Can I change plans anytime?",
    a: `Yes, you can from within your account. If you have already subscribed to a plan, or want to downgrade or upgrade your current one, you can do this by going to your "Settings" and "Subscription".`,
  },
  {
    q: "How do I pause my Bonsai subscription?",
    a: "We totally understand that with the nature of freelancing, work ebbs and flows so you might not always need your Bonsai subscription to remain active! The good news is that you can cancel or pause your monthly subscription at any time without penalty. Once cancelled, you'll be able to continue logging in to access all your documents and even continue to use our free features, like Time Tracking! In order to cancel your subscription, login to your Bonsai account.",
  },
  {
    q: "What is your refund policy?",
    a: "If you contact us within 2 weeks of being charged for your subscription, we will be happy to issue a refund for you!Beyond those 2 weeks, you will need to cancel or modify the subscription from the Subscriptions Tab in Settings to avoid future charges, but refunds will not be issued. This applies to both monthly and annual plans.",
  },
];

export const FooterLinks = [
  {
    name: "Product",
    links: [
      "Proposals",
      "Contracts",
      "Invoicing",
      "Client CRM",
      "Time Tracking",
      "Task Tracking",
      "Forms",
      "Accounting",
      "Bonsai Tax",
      "Bonsai Cash",
      "Pricing",
      "Bonsai Reviews",
    ],
  },
  {
    name: "Free Resources",
    links: [
      "Freelance Resources",
      "Freelance Blog by Bonsai",
      "How to Write a Contract",
      "Online Signature Maker",
      "Self-Employed Taxes Hub",
      "Self-Employed Tax Calculator",
      "Self-Employed Tax Deductions",
    ],
  },
  {
    name: "Templates",
    links: [
      "Invoice Templates",
      "Proposal Templates",
      "Contract Templates",
      "Agreement Templates",
      "Scope of Work Templates",
      "Quote Templates",
      "Credit Note Templates",
      "Estimate Templates",
      "Form Templates",
    ],
  },
  {
    name: "Bonsai",
    links: [
      "About",
      "Careers",
      "Support",
      "LinkedIn",
      "Twitter",
      "Privacy policy",
      "Legal",
      "Affiliates",
      "Write for Us",
      "Comparisons",
    ],
  },
];
