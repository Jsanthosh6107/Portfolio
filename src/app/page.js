import { homeLayout } from "@/data/homeLayoutContent";
import PagelayoutRenderer from "@/components/PageLayoutRenderer/PageLayoutRenderer";
import Head from "next/head";

export const metadata = {
  title: "JS Portfolio",
  description: "My current Portfolio website",
  alternates: {
    canonical: 'https://jsanthosh.vercel.app',
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
