export type DragComponentProps = {
  addInputComponent: any;
  classes: Object;
  onItemsOrdered: (items: any[]) => void;
};

declare const DragComponent: React.ComponentType<DragComponentProps>;

export default DragComponent;