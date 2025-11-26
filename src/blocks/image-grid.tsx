"use client";
import cx from "classnames";
import BackstageImage from "@/components/backstage-image";
import type { MediaItem } from "@antlur/backstage";

interface ImageGridProps {
  media_ids: MediaItem[];
  title?: string;
  max_columns?: number;
}

export default function ImageGrid({ media_ids, title, max_columns = 3 }: ImageGridProps) {
  const classMap: Record<number, string> = {
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
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

  function getImageMaxWidth() {
    const containerWidth = 1200;
    return containerWidth / max_columns;
  }

  return (
    <div className="p-4 my-2 space-y-6 rounded">
      {title && <div className="text-4xl font-bold text-center uppercase">{title}</div>}
      <div className={`grid gap-4 grid-cols-1 ${gridClass}`}>
        {media_ids.map((media) => (
          <div
            key={media.id}
            className={cx("relative", {
              "aspect-video": process.env.NEXT_PUBLIC_BCKSTG_ACCOUNT_ID !== "da93c137-6f27-40a9-b8e3-6932f8d24528",
              "aspect-square": process.env.NEXT_PUBLIC_BCKSTG_ACCOUNT_ID === "da93c137-6f27-40a9-b8e3-6932f8d24528",
            })}
          >
            <BackstageImage
              image={media}
              width={getImageMaxWidth()}
              height={getImageMaxWidth()}
              className="object-cover w-full h-full"
              alt={media.alt ?? ""}
              fill
            />
          </div>
        ))}
      </div>
    </div>
  );
}
