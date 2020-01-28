import type { KrowdyIconProps } from "@krowdy-ui/core/Icon";
export type CounterProps = {
  addIcon: React.ComponentType<KrowdyIconProps>;
  classes: object,
  color: string,
  disabled: boolean,
  max: number,
  min: number,
  onChange: Function,
  removeIcon: React.ComponentType<KrowdyIconProps>;
  number: number
};

declare const Counter: React.ComponentType<CounterProps>;

export default Counter;