import { notFound } from "next/navigation";
import { client } from "@backstage/client";
import PageFactory from "@/views/page-factory";
import { cookies } from "next/headers";
import { Page } from "@antlur/backstage";
import { Route, RouteFactory } from "@/views/route-factory";

// true is important for revalidatePath()
export const dynamicParams = false;

// Default revalidation time (1 year in seconds)
// export const revalidate = 31536000;

export async function generateStaticParams() {
  const routes = await client.website.routes();

  // split the url into an array of slugs
  const arrayOfUrlParts = routes.map((route) => route.split("/").filter(Boolean));

  return arrayOfUrlParts.map((urlParts) => ({
    slugs: urlParts,
  }));
}

export default async function AppPage(props: PageProps<"/[...slugs]">) {
  const params = await props.params;
  const slugs = params.slugs;
  let path = "/";
  if (slugs && slugs.length > 0) {
    path += slugs.join("/");
  }

  let route;

  try {
    route = await client.get<Route>(`/routes/resolve?path=${path}`);
  } catch (error) {
    console.error("Error fetching route:", error);
  }

  if (!route) {
    return notFound();
  }

  // return (
  //   <div>
  //     <pre>{JSON.stringify(route, null, 2)}</pre>
  //   </div>
  // );

  return <RouteFactory route={route} />;
}
