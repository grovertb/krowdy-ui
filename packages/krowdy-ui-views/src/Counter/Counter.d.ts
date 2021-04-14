interface Classes {
  input: Record<string, string | number>
  root: Record<string, string | number>
}

export type CounterProps = {
  addIcon?: React.ReactNode,
  max?: number,
  min?: number,
  removeIcon?: React.ReactNode,
  onChange?: (event: { target: { name: string, value: number }}) => void,
  name?: string,
  classes?: Classes,
  color?: string,
  disabled?: boolean,
  number?: number
};

declare const Counter: React.ComponentType<CounterProps>

export default Counter