import type { LayoutComponentProps } from "@antlur/backstage/studio";
import schema from "./schema";

export default function DefaultLayout(props: LayoutComponentProps<typeof schema>) {
  return <div>{props.children}</div>;
}
