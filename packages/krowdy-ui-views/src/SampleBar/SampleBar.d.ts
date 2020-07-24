
import { TopAppBarProps } from '../TopAppBar'
import { MainProps } from '../Main';

export type SampleBarProps = {
  topAppBarProps: Partial<TopAppBarProps>
  mainProps: Partial<MainProps>
}

declare const SampleBar: React.FC<SampleBarProps>;

export default SampleBar;