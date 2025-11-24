import { Route } from "@/views/route-factory";

export function RouteSeo({ route }: { route: Route }) {
  const title = route.meta?.seo?.title;
  const description = route.meta?.seo?.description;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
    </>
  );
}
