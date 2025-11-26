/**
 * Gallery Block
 *
 * REQUIRES: npm install lightgallery
 *
 * Once installed, uncomment the lightgallery imports and the LightGallery component below.
 * Also uncomment the gallery entry in src/components/blocks.tsx
 */
"use client";
// Uncomment after: npm install lightgallery
// import LightGallery from "lightgallery/react";
// import "lightgallery/css/lightgallery.css";
// import "lightgallery/css/lg-zoom.css";
// import "lightgallery/css/lg-thumbnail.css";
import BackstageImage from "@/components/backstage-image";
import type { MediaItem } from "@antlur/backstage";

interface GalleryProps {
  media_ids: MediaItem[];
  title?: string;
  max_columns?: number;
}

export default function Gallery({ media_ids, title, max_columns = 3 }: GalleryProps) {
  max_columns ??= 3;

  const classMap: Record<number, string> = {
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "lg:grid-cols-4",
    5: "lg:grid-cols-5",
    6: "lg:grid-cols-6",
    7: "lg:grid-cols-7",
    8: "lg:grid-cols-8",
    9: "lg:grid-cols-9",
    10: "lg:grid-cols-10",
    11: "lg:grid-cols-11",
    12: "lg:grid-cols-12",
  };

  const gridClass = classMap[max_columns] || "lg:grid-cols-3";

  const getImageMaxWidth = () => {
    const containerWidth = 1200;
    return containerWidth / (max_columns ?? 3);
  };

  return (
    <div className="container-breakout">
      <div className="max-w-5xl p-4 mx-auto my-2 space-y-6 rounded">
        {title && <div className="text-4xl font-bold text-center uppercase">{title}</div>}
        <div className={`grid gap-2 md:gap-4 ${gridClass}`}>
          {media_ids.map((media) => (
            <div
              key={media.id}
              className="relative block aspect-square"
              onClick={() => {
                document.getElementById(`grid-item_${media.id}`)?.click();
              }}
            >
              <BackstageImage
                src={media.url}
                width={getImageMaxWidth()}
                height={getImageMaxWidth()}
                className="object-cover w-full h-full"
                alt={media.alt ?? ""}
                fill
              />
            </div>
          ))}
        </div>
        {/* 
          Uncomment after: npm install lightgallery
          <div className="hidden">
            <LightGallery startClass={`grid gap-4 grid-cols-1 ${gridClass}`} getCaptionFromTitleOrAlt={false}>
              {media_ids.map((media) => (
                <a key={media.id} id={`grid-item_${media.id}`} className="relative block aspect-4/3" href={media.url}>
                  <BackstageImage
                    src={media.url}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                    alt={media.alt ?? ""}
                    fill
                  />
                </a>
              ))}
            </LightGallery>
          </div>
        */}
      </div>
    </div>
  );
}
