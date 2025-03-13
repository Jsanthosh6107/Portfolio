import { NextIcon, NodeJsIcon, PythonIcon, MountainIcon } from "@/components/svgs";

export const homeLayout = [
  {
    type: "HeroFace",
    data: {
      heroImage: { src: "/images/Me4.jpg", alt: "Me", width: 500, height: 500 },
      heroSpanTitle: "Sculpting Scalable",
      heroTitle: "Paradigms with Unrelenting Precision",
      heroDescription: "In an era saturated with transient methodologies and ephemeral trends, I embody an unyielding commitment to engineering digital solutions that are not only architecturally resilient but also meticulously optimized for longevity, efficiency, and aesthetic sophistication.",
      heroButton: "Engage with Me",
    }
  },
  {
    type: "Tiles",
    data: {
      tilesHeader: "Comprehensive Technological Mastery",
      tilesTitle: "The Arsenal Behind My Digital Magnum Opuses",
      tiles: [
        { svg: <NextIcon />, title: "Frontend Eminence", description: "Translating abstract concepts into dynamic, high-performance digital experiences using React, Next.js, and WordPress—ensuring fluidity, responsiveness, and a frictionless user interface." },
        { svg: <NodeJsIcon />, title: "Backend Supremacy", description: "Engineering sophisticated server-side architectures with PHP, Node.js, and Python—prioritizing efficiency, concurrency, and seamless data orchestration." },
        { svg: <PythonIcon />, title: "Algorithmic Ingenuity", description: "Pioneering bespoke software solutions, automation protocols, and AI-integrated applications that transcend conventional development paradigms—ushering in a new echelon of computational efficacy." }
      ]
    }
  },
  {
    type: "TilesProjects",
    data: {
      tilesHeader: "Chronicles of Digital Excellence",
      tilesTitle: "Concrete Manifestations of My Technical Skills",
      tiles: [
        { image: { src: "/images/ARS.png", alt: "ARS", width: 500, height: 500 } , title: "ARS Awareness", description: "An intricately crafted satirical web interface delineating the macabre realities of acute radiation syndrome—juxtaposing morbid existentialism with an ironically jovial visual aesthetic." },
        { image: { src: "/images/SamsPressureWashing.jpg", alt: "Sams Pressure Washing", width: 500, height: 500 } , title: "Sam’s Pressure Washing", description: "A meticulously structured digital presence engineered for a local entrepreneur—imbuing his brand with an authoritative online footprint through precision-crafted UI/UX design." },
        { image: { src: "/images/PortfolioWebsite.png", alt: "Portfolio Website", width: 500, height: 500 } , title: "Portfolio Website", description: "An autobiographical digital opus encapsulating the breadth of my technological dexterity, interwoven with personal insights and avant-garde development methodologies." },
      ]
    }
  },
  {
    type: "Footer",
    data: {
      buttonText: "Ascend to Apex",
      callToAction: "Gratitude for Your Intellectual Sojourn",
      links: [
        { text: "YouTube", url: "#" },
        { text: "LinkedIn", url: "#" },
      ],
      copyright: "Joshua Santhosh"
    }
  }
  
];
