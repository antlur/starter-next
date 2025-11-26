import type { Route } from "@/views/route-factory";

interface RouteSeoProps {
  route: Route;
}

export function RouteSeo({ route }: RouteSeoProps) {
  const seo = route.meta?.seo;
  const title = seo?.title ?? "";
  const description = seo?.description ?? "";

  return (
    <>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
    </>
  );
}
