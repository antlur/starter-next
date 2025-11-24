"use client";
import Link from "next/link";
import BackstageImage from "../components/backstage-image";

export default function ImageLinkGrid({ title, max_columns = 3, items = [] }) {
  const classMap = {
    1: "lg:grid-cols-1",
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
    const containerWidth = 600;
    return containerWidth / max_columns;
  }

  return (
    <div className="p-6 space-y-6 rounded">
      {title && <div className="text-4xl font-bold text-center uppercase">{title}</div>}
      <div className={`grid gap-4 grid-cols-1 ${gridClass}`}>
        {items.map((item, index) => {
          return (
            <Link key={`items-${index}`} href={item.link} className="relative">
              <BackstageImage image={item.image} maxWidth={getImageMaxWidth()} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
