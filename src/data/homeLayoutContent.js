import { NextIcon, NodeJsIcon, PythonIcon, MountainIcon } from "@/components/svgs";

export const homeLayout = [
  {
    type: "HeroFace",
    data: {
      heroImage: { src: "/images/Me4.jpg", alt: "Me", width: 500, height: 500 },
      heroTitle: "👋 Hey, I'm Josh",
      heroDescription: "Welcome to my site! I keep everything I'm working on here"
    }
  },
  {
    type: "Tiles",
    data: {
      tilesHeader: "FullStack Mastery",
      tilesTitle: "Here's a quick summary of my skills",
      tiles: [
        { svg: <NextIcon />, title: "Frontend", description: "React, Next.js, WordPress" },
        { svg: <NodeJsIcon />, title: "Backend", description: "PHP, NodeJS, Python" },
        { svg: <PythonIcon />, title: "Software", description: "Plugin, Automation, AI Leverage" }
      ]
    }
  },
  {
    type: "ImageTextTwo",
    data: {
      ITTitle: "What's my life like?",
      ITSubTitle: "Ambition . Purpose . Goals",
      SVGImage: <MountainIcon />,
      Title: "What's driving me everyday",
      Description: "I'm constantly moving forward, with a goal of purpose driven results. Every day is a chance for me to learn something new, to create something useful, and to achieve something greater than yesterday.",
      ButtonText: "What am I up to?"
    }
  },
  {
    type: "TilesProjects",
    data: {
      tilesHeader: "Some of what I've done",
      tilesTitle: "Live Projects you can check out",
      tiles: [
        { image: { src: "/images/ARS.png", alt: "Image description 1", width: 500, height: 500 } , title: "Tile 1 Title", description: "Tile 1 description." },
        { image: { src: "/images/ARS.png", alt: "Image description 1", width: 500, height: 500 } , title: "Tile 1 Title", description: "Tile 1 description." },
        { image: { src: "/images/ARS.png", alt: "Image description 1", width: 500, height: 500 } , title: "Tile 1 Title", description: "Tile 1 description." },
      ]
    }
  },
  {
    type: "Footer",
    data: {
      buttonText: "Back to Top",
      callToAction: "Thanks for stopping by!",
      links: [
        { text: "Youtube", url: "#" },
        { text: "Linkedin", url: "#" },
        //{ text: "Link 3", url: "#" }
      ],
      copyright: "Joshua Santhosh"
    }
  }
  
  
];
