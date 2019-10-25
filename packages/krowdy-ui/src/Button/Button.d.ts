import * as React from 'react';

import { ButtonProps } from '@material-ui/core/Button';
import { PropTypes } from '..';

export type KrowdyButtonProps = ButtonProps & {
  color?: PropTypes.Color;
};

// export type TouchRippleClassKey =
//   | 'root'
//   | 'ripple'
//   | 'rippleVisible'
//   | 'ripplePulsate'
//   | 'child'
//   | 'childLeaving'
//   | 'childPulsate';

declare const Buttons: React.ComponentType<KrowdyButtonProps>;

export default Buttons;
// export type KrowdyButtonTypeMap<
//   P = {},
//   D extends React.ElementType = 'button'
// > = ButtonTypeMap<{
//   props: P & {
//     color: PropTypes.Color
//     // active?: boolean;
//     // direction?: 'asc' | 'desc';
//     // hideSortIcon?: boolean;
//     // IconComponent?: React.ComponentType<SvgIconProps>;
//   };
//   // defaultComponent: D;
//   // classKey: TableSortLabelClassKey;
// }>;

// declare const Button: React.ComponentType<KrowdyButtonTypeMap>;

// export default Button;
