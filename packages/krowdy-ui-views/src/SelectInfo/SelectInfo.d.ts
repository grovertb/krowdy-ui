export type SelectInfoProps = {
  disabled?: boolean,
  icon?: React.ReactNode,
  rightIcon?: React.ReactNode,
  src?: string,
  subtitle?: string,
  title?: string,
  width?: number
}

declare const SelectInfo: React.ComponentType<SelectInfoProps>;

export default SelectInfo;