import type { Page as IPage } from "@antlur/backstage";
import LayoutFactory from "./layout-factory";
import Page from "./page";

interface PageFactoryProps {
  page: IPage;
}

export default async function PageFactory({ page }: PageFactoryProps) {
  return (
    <LayoutFactory page={page}>
      <Page page={page} />
    </LayoutFactory>
  );
}
