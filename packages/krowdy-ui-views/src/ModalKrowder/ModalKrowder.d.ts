interface IFuncVoid {
  (): void
}
interface IUser {
  firstName?: string;
  lastName? : string;
  photo?    : string;
}

interface ICollapse {
  title: string;
  component: React.ComponentType
}

export type ModalKrowderProps = {
  user?: IUser;
  onclose?: IFuncVoid
  ondelete?: IFuncVoid
  onconsuspendlose?: IFuncVoid
  open: boolean;
  collapses?: Array<ICollapse>;
};

declare const ModalKrowder: React.ComponentType<ModalKrowderProps>;

export default ModalKrowder;