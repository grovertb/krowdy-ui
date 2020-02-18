type IFuncVoid = () => void
interface IUser {
  email?: string
  firstName?: string
  lastName?: string
  photo?: string
  phone?: string
}

interface ICollapse {
  component: React.ReactNode
  title: string
}

export type ModalKrowderProps = {
  user?: IUser;
  onclose?: IFuncVoid
  open: boolean
  onChangeCollapse?: IFuncVoid
  action?: React.ReactNode
  headerContent?: React.ReactNode
  collapses?: Array<ICollapse>
  minWidth?: string
}

declare const ModalKrowder: React.ComponentType<ModalKrowderProps>

export default ModalKrowder