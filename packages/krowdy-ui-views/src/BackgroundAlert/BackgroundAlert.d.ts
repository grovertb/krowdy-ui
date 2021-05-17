

interface BackgroundAlertProps {
  color     : string | undefined;
  anchorEl: null | Object;
  placement: string | undefined;
  arrow: boolean | false
}

declare const BackgroundAlert: React.ComponentType<BackgroundAlertProps>;

export default BackgroundAlert;