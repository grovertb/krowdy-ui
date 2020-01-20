import { IconProps } from '@material-ui/core/Icon';
import { PropTypes } from '..';

type Props = {}

export type KrowdyIconProps = Omit<IconProps, keyof Props> & Props;

declare const Icon: React.ComponentType<KrowdyIconProps>;

export default Icon;
