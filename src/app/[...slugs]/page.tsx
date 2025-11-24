"use cache";
import { notFound } from "next/navigation";
import { client } from "@backstage/client";
import { Route, RouteFactory } from "@/views/route-factory";

export async function generateStaticParams() {
  const routes = await client.website.routes();

  // split the url into an array of slugs
  const arrayOfUrlParts = routes.map((route) => route.split("/").filter(Boolean));

  return arrayOfUrlParts.map((urlParts) => ({
    slugs: urlParts,
  }));
}

async function getResolvedRoute(path: string): Promise<Route | null> {
  "use cache";
  return await client.routes.resolve<Route>(path).catch(() => null);
}

function makeRoutePath(slugs: string[] | undefined): string {
  if (!slugs || slugs.length === 0) {
    return "/";
  }
  return "/" + slugs.join("/");
}

export default async function AppPage(props: PageProps<"/[...slugs]">) {
  const { slugs } = await props.params;
  const path = makeRoutePath(slugs);
  const route = await getResolvedRoute(path);

  if (!route) {
    return notFound();
  }

  return <RouteFactory route={route} />;
}
