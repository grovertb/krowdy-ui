interface classes {
  input: Record<string, string | number>
  root: Record<string, string | number>
}
type IFunOnChange = (number: number) => void

export type CounterProps = {
  addIcon: React.ReactNode;
  classes: classes,
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