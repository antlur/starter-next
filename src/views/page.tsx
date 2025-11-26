import Container from "@/components/container";
// import Blocks from "@/components/blocks";
import { client } from "@backstage/client";
import type { Page as PageType } from "@antlur/backstage";

interface PageProps {
  page: PageType;
}

export default async function Page({ page }: PageProps) {
  // These are available for blocks when enabled
  // const website = await client.website.getWebsite();
  // const locations = await client.locations.getLocations();
  // const menus = await client.menus.getMenus();

  return (
    <div
      style={{
        backgroundColor: page.settings?.background_color,
      }}
    >
      <Container>
        {/*
          Blocks rendering is disabled by default.
          To enable, install required block dependencies:
            npm install react-responsive-carousel lightgallery
          
          Then uncomment the imports and Blocks component below:
          
          import Blocks from "@/components/blocks";
          
          <Blocks
            blocks={page.blocks}
            website={website}
            locations={locations}
            menus={menus}
          />
        */}
        <div className="py-8">
          <h1 className="text-3xl font-bold">{page.title}</h1>
        </div>
      </Container>
    </div>
  );
}
