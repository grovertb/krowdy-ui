interface onChange {

}
export type CounterProps = {
  addIcon: Node,
  classes: object,
  disabled: boolean,
  max: number,
  min: number,
  onChange: Function,
  removeIcon: Node,
  number: number
};

declare const Counter: React.ComponentType<CounterProps>;

export default Counter;