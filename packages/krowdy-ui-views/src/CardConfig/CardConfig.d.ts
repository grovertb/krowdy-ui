export type CardConfigProps = {
  action?   : React.ReactNode;
  className?: string;
  icon      : React.ReactNode;
  subtitle? : string;
  title?    : string;
};

declare const CardConfig: React.ComponentType<CardConfigProps>;

export default CardConfig;