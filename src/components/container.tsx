import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Container(props: Props) {
  return <div className="px-6 mx-auto max-w-7xl">{props.children}</div>;
}
