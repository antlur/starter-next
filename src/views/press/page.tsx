import { notFound } from "next/navigation";
import LayoutFactory from "@/views/layout-factory";
import { client } from "@backstage/client";

export default async function Press() {
  const articles = await client.press.getPress();

  if (!articles || articles?.length === 0) {
    return notFound();
  }

  return (
    <LayoutFactory>
      <div className="relative max-w-3xl px-6 mx-auto lg:px-0">
        <div className="pt-12 pb-24">
          <div className="space-y-20">
            <div className="flex flex-col space-y-4">
              <h1 className="text-4xl font-bold underline decoration-tertiary underline-offset-4">In the Press</h1>

              <div className="pt-12 space-y-6">
                {articles.map((article) => {
                  return (
                    <div key={article.id} className="flex flex-col p-4 space-y-2 border rounded border-gold">
                      <h2 className="text-2xl font-bold">
                        <a href={article.url} target="_blank" rel="noreferrer">
                          {article.title}
                        </a>
                      </h2>
                      <div className="flex space-x-2">
                        <p className="text-sm">{article.published_at}</p>
                        <p className="text-sm">{article.source}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutFactory>
  );
}
