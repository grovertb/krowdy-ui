interface IFuncVoid {
  (): void
}

export type ToggleRoleProps = {
  checked: boolean
  onchange: IFuncVoid
  title?: string
  subtitle?: string
  value: string | number
};

declare const ToggleRole: React.ComponentType<ToggleRoleProps>;

export default ToggleRole;