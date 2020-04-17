interface IMenu {
  icon?: React.ReactNode
  target?: string
  title: string
  url?: string
  options?: Array<IMenu>
  expanded?: boolean
  disabled?: boolean
  onClick?: () => void
}

interface OptionBottom {
  icon?: React.ReactNode
  onClick?: () => void
  title: string
}

export type MainProps = {
  menus?: Array<IMenu>
  optionBottom?: OptionBottom
  isOpenDrawer?: boolean
  component?: React.ElementType
};

declare const Main: React.ComponentType<MainProps>;

export default Main;