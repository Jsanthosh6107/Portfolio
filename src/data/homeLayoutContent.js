import { NextIcon, NodeJsIcon, PythonIcon, CSSIcon, HTMLIcon, JavascriptIcon, ReactIcon, TailwindIcon, VercelIcon, ViteIcon } from "@/components/svgs";

export const homeLayout = [
  {
    type: "HeroFace",
    data: {
      heroImage: { src: "/images/Me4.jpg", alt: "Me", width: 500, height: 500 },
      heroSpanTitle: "Building Scalable",
      heroTitle: "Solutions with Absolute Precision",
      heroDescription: "In a landscape full of shifting trends, I stay focused on delivering digital solutions that are robust, efficient, and built to last.",
      heroButton: "Let's Connect",
    }
  },
  {
    type: "Tiles",
    data: {
      tilesHeader: "Broad Technical Expertise",
      tilesTitle: "The Tools Behind My Digital Creations",
      tiles: [
        {
          svg: <NextIcon />,
          title: "Frontend Excellence",
          description: "I transform ideas into high-performance, engaging interfaces using React, Next.js, and WordPress, ensuring responsive design and seamless user experiences."
        },
        {
          svg: <NodeJsIcon />,
          title: "Backend Mastery",
          description: "I build robust server-side systems using PHP, Node.js, and Python, focusing on efficiency, concurrency, and seamless data flow."
        },
        {
          svg: <PythonIcon />,
          title: "Algorithmic Innovation",
          description: "I create custom software, automation tools, and AI-powered applications that go beyond standard development methods, providing advanced computational capabilities."
        }
      ]
    }
  },
  {
    type: "CurrentWorks",
    data: {
      header: "What I'm Doing Right Now",
      currentWorkProjects: [
        {
          image: { src: "/images/ARS.png", alt: "ARS", width: 500, height: 500 },
          title: "ARS Awareness",
          description: "A satirical web interface that explores the grim realities of acute radiation syndrome with a deceptively innocent design.",
          bulletContent: [
            "Built with pure vanilla HTML/CSS/JS as a proof of mastery of the fundamentals.",
            "A 6 page website created for a university exam, it have every pillar of web design.",
            "Run with vanilla code, it's a testament of my skills to turn even vanilla code into quality."
          ],
          icons: [
            { text: "CSS", icon: <CSSIcon /> },
            { text: "HTML", icon: <HTMLIcon /> },
            { text: "Javascript", icon: <JavascriptIcon /> },
            { text: "Vercel", icon: <VercelIcon /> },
          ],
        },
        {
          image: { src: "/images/SamsPressureWashing.jpg", alt: "Sams Pressure Washing", width: 500, height: 500 },
          title: "Sam’s Pressure Washing",
          description: "A well-structured digital presence for a local entrepreneur, giving their brand a professional online edge through UI/UX design.",
          bulletContent: [
            "A React website created for a local business in my hometown.",
            "Requested as a simple yet modern online presence, this website delivers.",
            "As my first paid website, I like to turn to this to see how far I've come."
          ],
          icons: [
            { text: "React", icon: <ReactIcon /> },
            { text: "Javascript", icon: <JavascriptIcon /> },
            { text: "Tailwind CSS", icon: <TailwindIcon /> },
            { text: "Vercel", icon: <VercelIcon /> },
            { text: "Vite", icon: <ViteIcon /> },
          ],
        },
        {
          image: { src: "/images/PortfolioWebsite.png", alt: "Portfolio Website", width: 500, height: 500 },
          title: "Portfolio Website",
          description: "A personal site that highlights my technical range, blended with personal insights and modern development practices.",
          bulletContent: [
            "My current best work consisting of my best tools and skills",
            "Created with industry standard tools and practices for Next.js and React",
            "Optimized to near perfection for SEO and Speed"
          ],
          icons: [
            { text: "Next.js", icon: <NextIcon /> },
            { text: "React", icon: <ReactIcon /> },
            { text: "Javascript", icon: <JavascriptIcon /> },
            { text: "Vercel", icon: <VercelIcon /> },
            { text: "Tailwind CSS", icon: <TailwindIcon /> },
          ],
        },
      ]
    }
  },
  {
    type: "TilesProjects",
    data: {
      tilesHeader: "My Current Projects and Goals",
      tilesTitle: "What I'm Up To Right Now",
      tiles: [
        {
          image: { src: "/images/ARS.png", alt: "ARS", width: 500, height: 500 },
          title: "Content Creation",
          description: "I'm actively building a YouTube channel to document my learning journey, while presenting it in an informative, useful format to other developers at the same stage as me. "
        },
        {
          image: { src: "/images/SamsPressureWashing.jpg", alt: "Sams Pressure Washing", width: 500, height: 500 },
          title: "Backend Mastery",
          description: "I'm diving deeper into Node.js and Next.js with a SQL database to create a fully functional full-stack website. I'll take the skills I learn there and implement them into this website."
        },
        {
          image: { src: "/images/PortfolioWebsite.png", alt: "Portfolio Website", width: 500, height: 500 },
          title: "Python Automation",
          description: "I'm leveraging Python to automate a YouTube content pipeline, running multiple channels with daily uploads and minimal manual work."
        },
      ]
    }
  },
  {
    type: "Footer",
    data: {
      buttonText: "Back To Top",
      callToAction: "Thank You for Visiting",
      links: [
        { text: "YouTube", url: "#" },
        { text: "LinkedIn", url: "#" },
      ],
      copyright: "Joshua Santhosh"
    }
  }
];

