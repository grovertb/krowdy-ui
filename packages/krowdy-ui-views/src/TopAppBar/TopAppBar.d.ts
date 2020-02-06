import { PropTypes } from '@krowdy-ui/core'

interface Ilogo {
  alt: string
  source: string
}

interface Iuser {
  firstName: string
  lastName: string
  photo: string
}

export type TopAppBarProps = {
  color?: PropTypes.Color;
  logo?: Ilogo;
  user?: Iuser;
  onHandleLogout?: ()    => void
  onHandleToggleDrawer?: () => void
};

declare const TopAppBar: React.ComponentType<TopAppBarProps>;

export default TopAppBar;