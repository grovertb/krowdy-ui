interface Classes {
  bar: Record<string, string>,
  mark:Record<string, string>,
  root: Record<string, string>
}


interface Mark {
  _id      : string | number,
  firstName?: string,
  lastName?: string,
  photo?: string,
  value: number
}



export type SampleBarProps = {
  classes?: Classes,
  mark?   : Mark,
  marks?:Mark[],
  template?: string
}

declare const SampleBar: React.FC<SampleBarProps>;

export default SampleBar;