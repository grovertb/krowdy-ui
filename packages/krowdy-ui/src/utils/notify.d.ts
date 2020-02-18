type INotify = (
  message: string,
  options?: Partial<{ time: number }>,
) => void

export interface Notify {
  success: INotify
  warning: INotify
  error: INotify
}

declare const notify: Notify;
export default notify;
