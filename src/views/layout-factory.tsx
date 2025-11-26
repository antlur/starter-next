import { ReactNode } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { client } from "@backstage/client";
import type { Page } from "@antlur/backstage";

interface LayoutFactoryProps {
  children: ReactNode;
  page?: Page;
}

export default async function LayoutFactory({ children }: LayoutFactoryProps) {
  const website = await client.website.getWebsite();

  return (
    <>
      <Header navigation={website.header_navigation} website={website} />
      <main id="main">{children}</main>
      <Footer navigation={website.footer_navigation} website={website} />
    </>
  );
}
