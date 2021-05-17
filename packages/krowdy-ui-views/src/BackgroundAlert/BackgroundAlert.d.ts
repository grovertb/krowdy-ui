

interface BackgroundAlertProps {
  color     : string | undefined;
  anchorEl: null | Object;
  placement: string | undefined;
  open : boolean | false,
  arrow: boolean | false
}

declare const BackgroundAlert: React.ComponentType<BackgroundAlertProps>;

export default BackgroundAlert;