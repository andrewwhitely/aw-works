import { Helmet } from "react-helmet-async";
import { metaData } from "@/config";

export default function Home() {
  return (
    <section>
      <Helmet>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:image" content={metaData.ogImage} />
        <meta property="og:url" content={metaData.baseUrl} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="prose prose-neutral">
        <p className="text-2xl font-medium tracking-tight text-[#111111]">
          Software Engineer. Technologist. Chronic hobbyist.
        </p>
        <p className="text-[#111111]">
          Building things that you can't wait to use, not dread having to.
        </p>
      </div>
    </section>
  );
}
