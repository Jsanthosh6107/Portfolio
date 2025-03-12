import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { BackgroundWaves} from "@/components/svgs";

export const metadata = {
  title: 'JS Portfolio',
  description: 'My current Portfolio website',
  openGraph: {
    title: 'JS Portfolio',
    description: 'My current Portfolio website',
    url: 'https://jsanthosh.vercel.app',
    siteName: 'JS Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JS Portfolio',
    description: 'My current Portfolio website',
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "JS Portfolio",
  "url": "https://jsanthosh.vercel.app",
};


export const navbarData = [
  {
    data: {
      navList: [
        { text: "home", url: "#" },
        { text: "about", url: "#" },
        { text: "contact", url: "#" },
        { text: "clients", url: "/#clients" },
        { text: "benefits", url: "/#benefits" },
      ],
    },
  },
];

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="theme-color" content="#E0E0E0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <BackgroundWaves />
        <Navbar navList={navbarData[0].data.navList} />
        {children}
      </body>
    </html>
  );
}
