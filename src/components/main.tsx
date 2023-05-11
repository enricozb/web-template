import { h } from "preact";
import type { ComponentChildren } from "preact";

const Main = (props: Props) => {
  return (
    <main>
      {props.children}
    </main>
  );
};

interface Props {
  children: ComponentChildren;
}

export default Main;
