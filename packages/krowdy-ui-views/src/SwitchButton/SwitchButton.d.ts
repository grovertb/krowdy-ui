
export type SwitchButtonProps = {
  onChange: any,
  onKeyDown: any,
  placeholder: string,
  searchIcon: Node,
  value: string
};

declare const SwitchButton: React.ComponentType<SwitchButtonProps>;

export default SwitchButton;