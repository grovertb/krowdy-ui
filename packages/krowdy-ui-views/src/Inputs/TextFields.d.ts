export type Textfields = {
  classes?: object,
  disabled?: boolean,
  instructions?: Function,
  item?: object,
  onDeleteItem?: Function,
  onUpdateItem?: Function,
  onClick?: Function,
  order?: number,
  showInstructions?: boolean,
};

declare const Textfields: React.ComponentType<Textfields>;

export default Textfields;