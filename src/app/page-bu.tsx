import Image from "next/image";
import { RemoteData } from "@/components/data";
import { Suspense } from "react";

export default function Home({ params, searchParams }: PageProps<"/">) {
  return (
    <div>
      <div className="max-w-xl">
        <Image
          src="https://cdn.bckstg.app/media/1129/circle-tavern-screenshot.png"
          alt="Circle Tavern"
          width={1920}
          height={1080}
        />
      </div>
      {/* <Suspense fallback={<div>Loading remote data...</div>}>
        <RemoteData />
        <RemoteData page={2} />
      </Suspense> */}
    </div>
  );
}
