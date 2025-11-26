import { defineBlockSchema as defineSchema, defineField } from "@antlur/backstage/studio";

export default defineSchema({
  fields: [
    defineField({
      name: "Title",
      slug: "title",
      type: "text",
    }),
    defineField({
      name: "Subtitle",
      slug: "subtitle",
      type: "text",
    }),
    defineField({
      name: "Background Image",
      slug: "backgroundImage",
      type: "image",
    }),
    defineField({
      name: "CTA Text",
      slug: "ctaText",
      type: "text",
    }),
    defineField({
      name: "CTA Link",
      slug: "ctaLink",
      type: "text",
    }),
  ],
});
