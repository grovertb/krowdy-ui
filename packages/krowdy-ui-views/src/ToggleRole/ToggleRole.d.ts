interface IFuncVoid {
  (active: boolean): void
}

export type ToggleRoleProps = {
  checked: boolean
  disabled?: boolean
  onChange: IFuncVoid
  title?: string
  name: string
  subtitle?: string
  value: string | number
};

declare const ToggleRole: React.ComponentType<ToggleRoleProps>;

export default ToggleRole;