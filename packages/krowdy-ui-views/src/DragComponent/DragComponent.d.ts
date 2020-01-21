export type QuestionaryProps = {
  addInputComponent: any;
  classes: Object;
  onItemsOrdered: (items: any[]) => void;
};

declare const Questionary: React.ComponentType<QuestionaryProps>;

export default Questionary;