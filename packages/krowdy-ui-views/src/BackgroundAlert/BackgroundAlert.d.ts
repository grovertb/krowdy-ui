
type Colors =  'default'| 'inherit'| 'primary'| 'secondary'| 'krowdy'| 'error' 

interface BackgroundAlertProps {
  color?     : Colors;
  anchorEl?:  null | Element | ((element: Element) => Element);
  placement?: string;
  arrow?: boolean;
  className?: string
}

declare const BackgroundAlert: React.ComponentType<BackgroundAlertProps>;

export default BackgroundAlert;