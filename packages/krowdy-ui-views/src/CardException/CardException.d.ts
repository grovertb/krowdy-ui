interface IFunc {
  (): void
}

interface ISuggestion {
  id: string
  name: string
}

export type CardExceptionProps = {
  area?: string
  candidate?: string
  company?: string
  dateTime?: string
  group?: string
  recruiter?: string
  krowder?: string
  statusException?: string
  resolved?: string
  title?: string
  krowderSelected?: string
  actions?: boolean
  listStyle?: string
  type: number
  suggestion?: Array<ISuggestion>
  onArchived?: IFunc
  onResolved?: IFunc
  onSendPull?: IFunc
  onUnlockTask?: IFunc
};

declare const CardException: React.ComponentType<CardExceptionProps>;

export default CardException;