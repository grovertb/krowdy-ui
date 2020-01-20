export type HeaderTaskProps = {
  arrowBackIcon: Node,
  checkbox: boolean,
  checked: boolean,
  classes: object,
  contentButton: any,
  disableActiveTask: boolean,
  disabledSave: boolean,
  disabledSelectCandidates: boolean,
  disabledTitleTask: boolean,
  disabledUpdateTask: boolean,
  _id: string,
  isDraft: boolean,
  numberCandidates: number,
  onChange: Function,
  onChangeTitleTask: Function,
  onClickActiveTask: Function,
  onClickArrowBackIcon: Function,
  onClickSave: Function,
  onClickSelectCandidates: Function,
  onClickUpdateTask: Function,
  onKeyUpTitleTask: Function,
  showButtonsRight: boolean,
  showInputName: boolean,
  stageIndex: number,
  titleHeader: string,
  titleTask: string,
  valueTitleTask: any
};

declare const HeaderTask: React.ComponentType<HeaderTaskProps>;

export default HeaderTask;