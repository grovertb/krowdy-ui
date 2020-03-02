
import { TopAppBarProps } from '../TopAppBar'

export type RootProps = {
  topAppBarProps: Partial<TopAppBarProps>
}

declare const Root: React.FC<RootProps>;

export default Root;