type IFuncOnChange = (index: number) => void
export type SwitchButtonProps = {
  index: number,
  onChange: IFuncOnChange,
  selected: number
};

declare const SwitchButton: React.ComponentType<SwitchButtonProps>;

export default SwitchButton;