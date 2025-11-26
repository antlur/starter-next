import { defineLayoutSchema, defineField } from "@antlur/backstage/studio";

export default defineLayoutSchema({
  fields: [
    defineField({
      name: "Header Navigation",
      slug: "headerNavigation",
      type: "navigation_select",
    }),
    defineField({
      name: "Featured Image",
      slug: "featuredImage",
      type: "media",
    }),
  ],
});
