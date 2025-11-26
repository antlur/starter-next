import { client } from "@backstage/client";
import { Route } from "@/views/route-factory";

export async function getResolvedRoute(path: string): Promise<Route | null> {
  "use cache";
  return await client.routes.resolve<Route>(path).catch(() => null);
}

export function makeRoutePath(slugs: string[] | undefined): string {
  if (!slugs || slugs.length === 0) {
    return "/";
  }
  return "/" + slugs.join("/");
}
