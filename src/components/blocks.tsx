import Hero from "@/blocks/hero";
import Paragraph from "@/blocks/paragraph";
import Heading from "@/blocks/heading";
import ImageGrid from "@/blocks/image-grid";
import Gallery from "@/blocks/gallery";
import TextEditor from "@/blocks/text-editor";
import ImageLinkGrid from "@/blocks/image-link-grid";
import Html from "@/blocks/html";
import HeroVideo from "@/blocks/hero-video";
import MediaWithText from "@/blocks/media-with-text";
import Form from "@/blocks/form";
import React from "react";

interface Block {
  id: string;
  block: string; // block type
  type?: string; // block type
  data: object;
  tunes?: object;
}

interface BlocksProps {
  blocks: Block[];
  website: any;
  menus: any;
  locations: any;
}

export default function Blocks({ blocks, website, locations, menus }: BlocksProps) {
  return (
    <>
      {blocks.map((block, index) => {
        const Block = getBlockComponent(block.block ?? block.type);
        if (!Block) return null;
        return (
          <Block
            key={block.id}
            {...block.data}
            data={block.data}
            tunes={block.tunes}
            website={website}
            menus={menus}
            locations={locations}
          />
        );
      })}
    </>
  );
}

function getBlockComponent(name: string) {
  const TempComponent = () => <div>Block {name} not found</div>;
  const map: { [key: string]: React.FC<any> } = {
    paragraph: Paragraph,
    hero: Hero,
    heading: Heading,
    imageGrid: ImageGrid,
    form: Form,
    gallery: Gallery,
    textEditor: TextEditor,
    "hero-video": HeroVideo,
    image_link_grid: ImageLinkGrid,
    html: Html,
    media_with_text: MediaWithText,
  };

  return map[name] ?? TempComponent;
}
