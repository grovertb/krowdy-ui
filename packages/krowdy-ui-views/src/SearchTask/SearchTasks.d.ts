export type FilterTasks = {
  classes?: object,
  content?: string,
  firtsList?: object[],
  iconOnSeeker?: object,
  onClickInItem?: Function,
  propsInput?: object,
  propsListItemsToFirstList?: object,
  propsListItemsToSecondList?: object,
  propsLists?: object,
  secondList?: object[],
  selected?: string
};

declare const Header: React.ComponentType<FilterTasks>;

export default Header;