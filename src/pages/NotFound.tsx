import { Helmet } from "react-helmet-async";
import { metaData } from "@/config";

export default function NotFound() {
  return (
    <section>
      <Helmet>
        <title>404 | {metaData.name}</title>
      </Helmet>
      <h1 className="font-medium text-2xl mb-8 tracking-tight">
        404 - Page not found
      </h1>
      <p className="mb-4">
        Oops! The page you're looking for doesn't seem to exist.
      </p>
    </section>
  );
}
