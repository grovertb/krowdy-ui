
interface BackgroundAlertProps {
  color?     : string;
  anchorEl?:  null | Element | ((element: Element) => Element);
  placement?: string;
  arrow?: boolean;
}

declare const BackgroundAlert: React.ComponentType<BackgroundAlertProps>;

export default BackgroundAlert;