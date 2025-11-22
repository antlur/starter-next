declare module "*.svg" {
  import type { ComponentType, SVGProps } from "react";
  const Component: ComponentType<SVGProps<SVGSVGElement>>;
  export default Component;
}

declare module "*.svg?url" {
  const url: string;
  export default url;
}

declare module "*.svg?inline" {
  const svg: string;
  export default svg;
}
