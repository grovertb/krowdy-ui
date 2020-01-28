export type DragComponentProps = {
  addInputComponent: React.ReactNode;
  classes: Record<string, string | number>;
  onItemsOrdered: (elementsForDrag: React.ReactNode[]) => void;
};

declare const DragComponent: React.ComponentType<DragComponentProps>;

export default DragComponent;