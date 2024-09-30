import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Chisom Prince",
  initials: "CP",
  url: "https://chisomprince.techingin.com",
  location: "Lagos, NG",
  locationLink: "https://www.google.com/maps/place/lagos",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Active on Twitter.",
  summary:
    'In January 2024, I founded TechinginLTD, a software development company in Nigeria (RC 7449899). Our flagship product, [RevampedCV](https://revampedcv.com/?target="_blank"), is an AI-powered resume builder that has generated over 2,000 resumes, helping job seekers effectively present their skills. We are also developing [VideofussionAI](https://videofusionai.com/), an AI-driven video creation platform that transforms text prompts into professional videos, making content creation accessible for everyone.',
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Nest.js",
    "Express.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Mongodb",
    "AWS cloud",
    "Docker",
    "AI and Machine Learning",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "chisomprince@techingin.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Chisomprince",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/chisom-moses-3a9b7315b/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/ChisomPrince10",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Techingin",
      href: "#",
      badges: [],
      location: "Lagos, Nigeria",
      title: "Founder",
      logoUrl: "#",
      start: "January 2019",
      end: "April 2019",
      description:
        "In 2024, I founded TechinginLTD, a software development company based in Nigeria (RC 7449899). Our flagship product, RevampedCV, an AI-powered resume builder, has already generated over 2,000 resumes, helping job seekers present their skills and experiences more effectively.",
    },
    {
      company: "Exalt Application",
      href: "https://www.linkedin.com/company/exalt-churches-app/posts/?feedView=all",
      badges: [],
      location: "Remote, NG",
      title: "Lead Backend Engineer",
      logoUrl: "exalt-logo.jpeg",
      start: "January 2018",
      end: "April 2018",
      description:
        "played a pivotal role in strengthening the backend infrastructure of our applications. AWS deployment and deveops",
    },
    {
      company: "Storebounty inc.",
      href: "https://www.storebounty.com",
      badges: [],
      location: "Remote",
      title: "Frontend Engineer",
      logoUrl: "/storebounty-logo.png",
      start: "April 2021",
      end: "August 2023",
      description:
        "My work included developing tools for customer engagement and marketing campaigns, helping businesses increase their reach and sales through efficient, easy-to-use solutions. I focused on B2B integrations that streamlined workflows and enhanced user experience, contributing to the growth of the company’s client base.",
    },
    {
      company: "Apexloaded LTD",
      href: "https://apexloaded.com",
      badges: [],
      location: "Enugu, Nigeria",
      title: "Fullstack Software Engineer",
      logoUrl: "/apex-logo.webp",
      start: "Sep 2020",
      end: "April 2021",
      description:
        "Built fullstack app in Javacript using MERN stack, and blockchain solutions using solidity.",
    },
    {
      company: "Upwork",
      href: "https://www.upwork.com",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/upwork-logo.jpg",
      start: "April 2020",
      end: "April 2021",
      description:
        "Built fully featued website in Javacript using MERN stack and Laravel for clients.",
    },
  ],
  education: [
    {
      school: "ALX Africa / Udacity",
      href: "https://www.alxafrica.com/programme/aws-cloud-computing/",
      degree: "AWS Cloud Computing",
      logoUrl: "/alx-logo.svg",
      start: "April, 2023",
      end: "June, 2023",
    },
    {
      school: "University of Nigeria",
      href: "https://unn.edu.ng/",
      degree: "Bachelor's Degree of Banking and Finance (BCS)",
      logoUrl: "/unn-logo.png",
      start: "2016",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "VideofussionAI",
      href: "https://videofusionai.com",
      dates: "September 2024 - Present",
      active: true,
      description:
        "AI-powered video creation platform. This project uses natural language processing and machine learning algorithms to transform user prompts into high-quality video content.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Remotion",
        "FFMPEG",
        "AWS",
      ],
      links: [
        {
          type: "Website",
          href: "https://videofusionai.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://techingin.com/website/Screenshot-landscape.png",
      video: "",
    },
    {
      title: "Revamped CV",
      href: "https://revampedcv.com/",
      dates: "Jan 2023 - Present",
      active: true,
      description:
        "Launched RevampedCV, which helped over 2,000 job seekers improve their resumes.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Paypal",
        "Shadcn UI",
        "NestJS",
        "AWS Lambda",
      ],
      links: [
        {
          type: "Website",
          href: "https://revampedcv.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/revampedcv.jpg",
      video: "",
    },
    {
      title: "Storebounty Admin",
      href: "https://admin.storebounty.com",
      dates: "April 2021 - August 2023",
      active: true,
      description:
        "Built user-friendly e-commerce solutions for small and large businesses, Integrated real-time chat between merchants and customers.",
      technologies: [
        "React.js",
        "Typescript",
        "TailwindCSS",
        "Payment Gateways",
        "Roles and Authorization",
      ],
      links: [
        {
          type: "Website",
          href: "https://admin.storebounty.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/storebounty.jpg",
      video: "",
    },
    {
      title: "Lobeylfoundation",
      href: "https://www.lobeylfoundation.com/",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "A charity and donation website, includes reoccuring donation and payment integrations",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.lobeylfoundation.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/lobeylfoundation.jpg",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "NextJS Boilerplate",
      dates: "September 23rd - 24th, 2024",
      location: "Lagos, Nigeria",
      description:
        "NextJS Boilerplate with full authentication, roles and permission",
      image: "",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Chisomprince/nextjs-boilerplate",
        },
      ],
    },
  ],
} as const;
