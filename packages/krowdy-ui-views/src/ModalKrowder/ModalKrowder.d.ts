interface IFuncVoid {
  (): void
}
interface IUser {
  email?: string;
  firstName?: string;
  lastName? : string;
  photo?    : string;
  phone?    : string;
}

interface ICollapse {
  component: React.ReactNode
  title: string;
}

export type ModalKrowderProps = {
  user?: IUser;
  onclose?: IFuncVoid
  ondelete?: IFuncVoid
  onsuspend?: IFuncVoid
  onconsuspendlose?: IFuncVoid
  open: boolean;
  collapses?: Array<ICollapse>;
};

declare const ModalKrowder: React.ComponentType<ModalKrowderProps>;

export default ModalKrowder;