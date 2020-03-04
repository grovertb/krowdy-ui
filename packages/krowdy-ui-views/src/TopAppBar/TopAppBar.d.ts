import { PropTypes } from '@krowdy-ui/core'

interface IApp {
  title: string
  url: string
}

interface Ilogo {
  alt: string
  source: string
}

interface Iuser {
  firstName: string
  lastName: string
  photo?: string
}

interface ITopMenu {
  color?: string
  target?: string
  title: string
  type?: string
  url?: string
  variant?: string
}

interface IUserMenu {
  target?: string
  title: string
  type: string
  url: string
}

export type TopAppBarProps = {
  apps?: Array<ITopMenu>,
  color?: PropTypes.Color;
  logo?: Ilogo;
  menuTopLeft?: Array<ITopMenu>,
  menuTopRight?: Array<ITopMenu>,
  onHandleLogout?: ()    => void
  onHandleToggleDrawer?: () => void
  user?: Iuser;
  userMenu?: Array<IUserMenu>
};

declare const TopAppBar: React.ComponentType<TopAppBarProps>;

export default TopAppBar;