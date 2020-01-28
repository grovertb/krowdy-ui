// export { default } from '@material-ui/core/Typography';
// export * from '@material-ui/core/Typography';

import { TypographyProps } from '@material-ui/core/Typography';
import { Variant } from '@material-ui/core/styles/createTypography';
import { PropTypes } from '..';

type PropsTypography = {
  color?: 'initial' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error' | 'body' | 'info';
  variant?: Variant | 'srOnly' | 'inherit' | 'display1' | 'display2' | 'body3' | 'info1' | 'info2';
}

export type KrowdyTypographyProps = Omit<TypographyProps, keyof PropsTypography> & PropsTypography;

declare const Typography: React.ComponentType<KrowdyTypographyProps>;

export default Typography;