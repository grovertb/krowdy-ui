
interface IMenu {
  icon?: React.ReactNode
  target?: string
  title: string
  // type: string
  url: string
}

interface IUserMenu {
  action?: string
  target?: string
  title: string
  type: string
  url: string
}

interface ICollapse {
  component: React.ReactNode
  title: string;
}

interface ITopMenu {
  color?: string
  target?: string
  title: string
  type: string
  url: string
  variant?: string
}

interface IFuncVoid {
  (): void
}

interface Ilogo {
  alt: string
  source: string
}

export type DashboardProps = {
  menus?: Array<IMenu>
  userMenu?: Array<IUserMenu>
  user?: object
  menuTopLeft?: Array<ITopMenu>
  menuTopRight?: Array<ITopMenu>
  actions?: IFuncVoid
  logo?: Ilogo

};

declare const Dashboard: React.ComponentType<DashboardProps>;

export default Dashboard;