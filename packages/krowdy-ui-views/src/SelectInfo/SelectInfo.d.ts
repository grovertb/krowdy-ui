export type SelectInfoProps = {
  disabled?: boolean;
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  src?: string;
  subtitle?: string;
  title?: string;
  width?: number;
  classes?: {
    color?: string;
    popper?: string;
    primary?: string;
    secondary?: string;
  };
  clickAndClose?: boolean;
}

declare const SelectInfo: React.ComponentType<SelectInfoProps>;

export default SelectInfo;