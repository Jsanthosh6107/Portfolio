import { homeLayout } from "@/data/homeLayoutContent";
import PagelayoutRenderer from "@/components/PageLayoutRenderer/PageLayoutRenderer";
import Head from "next/head";

export const metadata = {
  title: "SEO Optimized Modern Websites At Industry Standards",
  description: "Upgrade to a modern website for performance, accessibility, and growth",
  alternates: {
    canonical: 'https://jacksontechagency.com',
  }
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <PagelayoutRenderer layout={homeLayout} />
    </>
  );
}
