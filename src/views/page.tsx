import Container from "@/components/container";
import Blocks from "@/components/blocks";
import { client } from "@backstage/client";

interface PageProps {
  page: any;
}

export default async function Page({ page }: PageProps) {
  const website = await client.website.getWebsite();
  const locations = await client.locations.getLocations();
  const menus = await client.menus.getMenus();

  return (
    <div
      style={{
        backgroundColor: page.settings?.background_color,
      }}
    >
      <Container>
        {/* <Blocks blocks={page.blocks} website={website} locations={locations} menus={menus} /> */}
      </Container>
    </div>
  );
}
