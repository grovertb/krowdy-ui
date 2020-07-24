interface SubOption {
  key: string;
  label: string;
  checked: boolean;
}
interface Option {
  key: string;
  label: string;
  checked: boolean;
  subOptions: SubOption[];
}
type IFuncOnChange = (newOptions: Option[]) => void
interface Classes {
  containerPaper: Record<string, string>;
}

export type MultiCheckBoxProps = {
  classes?: Classes;
  label?: string;
  options: Option[];
  onChange?: IFuncOnChange;
};

declare const MultiCheckBox: React.ComponentType<MultiCheckBoxProps>;

export default MultiCheckBox;