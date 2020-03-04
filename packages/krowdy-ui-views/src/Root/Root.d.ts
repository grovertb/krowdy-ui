
import { TopAppBarProps } from '../TopAppBar'
import { MainProps } from '../Main';

export type RootProps = {
  topAppBarProps: Partial<TopAppBarProps>
  mainProps: Partial<MainProps>
}

declare const Root: React.FC<RootProps>;

export default Root;