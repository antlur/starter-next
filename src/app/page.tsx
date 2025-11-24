import Image from "next/image";
import { RemoteData } from "@/components/data";
import { Suspense } from "react";

export default function Home({ params, searchParams }: PageProps<"/">) {
  return (
    <div>
      <style>
        {`
        code {
          background-color: #f5f5f5;
          padding: 0.2em 0.4em;
          border-radius: 4px;
        }
      `}
      </style>
      <section className="flex flex-col items-center justify-center gap-4 p-8">
        <h1 className="text-3xl font-bold">Congrats on your new site!</h1>
        <p>
          This is the default starter for <a href="https://antlur.co">Antlur</a>. You can start editing this page by
          modifying <code>src/app/page.tsx</code>.
        </p>
        <p>
          If the project is exclusively using Backstage routes, change <code>src/app/[...slugs]/page.tsx</code> to{" "}
          <code>src/app/[[...slugs]]/page.tsx</code>.
        </p>
      </section>
      {/* <Suspense fallback={<div>Loading remote data...</div>}>
        <RemoteData />
        <RemoteData page={2} />
      </Suspense> */}
    </div>
  );
}
