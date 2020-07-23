interface Classes {
  containerPaper: Record<string, string>;
}

export type MultiCheckBoxProps = {
  classes?: Classes;
  // options: , 
  // onChange = () => {} , 
  // label
};

declare const MultiCheckBox: React.ComponentType<MultiCheckBoxProps>;

export default MultiCheckBox;