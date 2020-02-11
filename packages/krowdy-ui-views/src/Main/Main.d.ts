interface IMenu {
  icon?: React.ReactNode
  target?: string
  title: string
  url: string
}

export type MainProps = {
  menus?: Array<IMenu>
  isOpen?: boolean
};

declare const Main: React.ComponentType<MainProps>;

export default Main;