import { PropTypes } from '@krowdy-ui/core';

interface BackgroundAlertProps {
  color?     : PropTypes.Color;
  anchorEl?:  null | Element;
  placement?: string;
  arrow?: boolean;
  className?: string
}

declare const BackgroundAlert: React.ComponentType<BackgroundAlertProps>;

export default BackgroundAlert;