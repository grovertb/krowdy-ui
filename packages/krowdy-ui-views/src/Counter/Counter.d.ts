interface Classes {
  input: Record<string, string | number>
  root: Record<string, string | number>
}
type IFunOnChange = (number: number) => void

export type CounterProps = {
  name: string,
  addIcon: React.ReactNode,
  classes: Classes,
  color: string,
  disabled: boolean,
  max: number,
  min: number,
  onChange: IFunOnChange,
  removeIcon: React.ReactNode,
  number: number
};

declare const Counter: React.ComponentType<CounterProps>;

export default Counter;