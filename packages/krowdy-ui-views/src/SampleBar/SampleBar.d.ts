import { ComponentType } from "react";

interface Classes {
  bar: string;
  mark: string;
  root: string;
}


interface Mark {
  _id      : string | number,
  firstName?: string,
  lastName?: string,
  photo?: string,
  value: number
}

type IFuncTemplate = (mark: Mark) => string

type IFuncCustomLabel = (index: number) => number | string

export type SampleBarProps = {
  classes?: Classes,
  mark?   : Mark,
  marks?:Mark[],
  template?: IFuncTemplate,
  IconComponent?: ComponentType,
  customLabel?: IFuncCustomLabel
}

declare const SampleBar: React.FC<SampleBarProps>;

export default SampleBar;