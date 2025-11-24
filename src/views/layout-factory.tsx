import { ReactNode } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { client } from "@backstage/client";

interface LayoutFactoryProps {
  children: ReactNode;
  isLocationPage?: boolean;
}

export default async function LayoutFactory({ children, isLocationPage = false }: LayoutFactoryProps) {
  const website = await client.website.getWebsite();
  const locations = await client.locations.getLocations();

  return (
    <>
      <Header navigation={website.header_navigation} website={website} />
      <main id="main">{children}</main>
      <Footer navigation={website.footer_navigation} website={website} />
    </>
  );
}
