export type SwitchButtonProps = {
  index: number,
  onChange: Function,
  selected: number
};

declare const SwitchButton: React.ComponentType<SwitchButtonProps>;

export default SwitchButton;