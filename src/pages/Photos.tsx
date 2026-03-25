import { Helmet } from "react-helmet-async";
import { metaData } from "@/config";

const photos: { src: string; alt: string }[] = [
  { src: "", alt: "" },
  { src: "", alt: "" },
  { src: "", alt: "" },
  { src: "", alt: "" },
  { src: "", alt: "" },
  { src: "", alt: "" },
];

export default function Photos() {
  return (
    <section>
      <Helmet>
        <title>Photos | {metaData.name}</title>
        <meta name="description" content="Film photography." />
      </Helmet>
      <p className="text-sm text-[#666666] mb-8">
        Shot on Fujifilm GS645S, Yashica T4, and Fujifilm X100VI.
      </p>
      <div className="grid grid-cols-2 gap-3">
        {photos.map((photo, index) =>
          photo.src ? (
            <img
              key={index}
              src={photo.src}
              alt={photo.alt}
              className="w-full aspect-[3/2] object-cover bg-[#e0e0e0]"
            />
          ) : (
            <div key={index} className="w-full aspect-[3/2] bg-[#e0e0e0]" />
          ),
        )}
      </div>
    </section>
  );
}
