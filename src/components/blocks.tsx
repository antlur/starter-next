import Hero from "@/blocks/hero";
import Paragraph from "@/blocks/paragraph";
import Heading from "@/blocks/heading";
import ImageGrid from "@/blocks/image-grid";
// Gallery requires: npm install lightgallery
// import Gallery from "@/blocks/gallery";
import TextEditor from "@/blocks/text-editor";
import ImageLinkGrid from "@/blocks/image-link-grid";
import Html from "@/blocks/html";
import HeroVideo from "@/blocks/hero-video";
import MediaWithText from "@/blocks/media-with-text";
import Form from "@/blocks/form";
import React from "react";
import type { Block, Website, Menu, Location } from "@antlur/backstage";
import type { LocalBlock } from "@/types/backstage";
import { BlockErrorBoundary } from "./error-boundary";

interface BlocksProps {
  blocks: (Block | LocalBlock)[];
  website?: Website;
  menus?: Menu[];
  locations?: Location[];
}

/**
 * Block component registry
 * Maps block type names to their React components
 *
 * Convention: Use camelCase for block names
 * Legacy snake_case and kebab-case names are supported via normalizeBlockName
 *
 * Optional blocks (require additional packages):
 * - gallery: requires `npm install lightgallery`
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const blockRegistry: Record<string, React.ComponentType<any>> = {
  paragraph: Paragraph,
  hero: Hero,
  heading: Heading,
  imageGrid: ImageGrid,
  form: Form,
  // gallery: Gallery, // Uncomment after: npm install lightgallery
  textEditor: TextEditor,
  heroVideo: HeroVideo,
  imageLinkGrid: ImageLinkGrid,
  html: Html,
  mediaWithText: MediaWithText,
};

/**
 * Normalizes block names from various formats to camelCase
 * Supports: snake_case, kebab-case, and camelCase
 */
function normalizeBlockName(name: string): string {
  // Convert snake_case and kebab-case to camelCase
  return name.replace(/[-_](.)/g, (_, char) => char.toUpperCase()).replace(/^(.)/, (char) => char.toLowerCase());
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getBlockComponent(name: string): React.ComponentType<any> | null {
  const normalizedName = normalizeBlockName(name);
  return blockRegistry[normalizedName] ?? null;
}

function BlockNotFound({ blockName }: { blockName: string }) {
  if (process.env.NODE_ENV === "development") {
    return (
      <div className="p-4 my-2 bg-yellow-50 border border-yellow-200 rounded-md">
        <p className="text-yellow-800 font-medium">Block not found: {blockName}</p>
        <p className="text-yellow-600 text-sm">
          Register this block in <code>src/components/blocks.tsx</code>
        </p>
      </div>
    );
  }
  return null;
}

export default function Blocks({ blocks, website, locations, menus }: BlocksProps) {
  return (
    <>
      {blocks.map((block) => {
        // Support both @antlur/backstage Block (slug) and LocalBlock (block/type)
        const blockType = (block as LocalBlock).block ?? block.slug ?? (block as LocalBlock).type;
        if (!blockType) return null;

        const BlockComponent = getBlockComponent(blockType);

        if (!BlockComponent) {
          return <BlockNotFound key={block.id} blockName={blockType} />;
        }

        return (
          <BlockErrorBoundary key={block.id}>
            <BlockComponent
              {...block.data}
              data={block.data}
              tunes={(block as LocalBlock).tunes}
              website={website}
              menus={menus}
              locations={locations}
            />
          </BlockErrorBoundary>
        );
      })}
    </>
  );
}
