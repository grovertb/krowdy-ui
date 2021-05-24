import { SlideProps } from "@material-ui/core";
import { HTMLAttributes, ReactNode } from "react";


export type HideOnScrollProps = {
  direction?: SlideProps['direction'];
} & HTMLAttributes<HTMLDivElement>;

declare const HideOnScroll: React.ComponentType<HideOnScrollProps>;

export default HideOnScroll;