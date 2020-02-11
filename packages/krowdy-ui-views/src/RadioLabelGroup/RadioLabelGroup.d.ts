import React from 'react'

interface Classes {
  label: Record<string, string>,
  boxContainer: Record<string, string>,
  isVert: Record<string, string>,
  isRow: Record<string, string>, 
  noLine: Record<string, string>,
  outlined: Record<string, string>,
  outlinedVert: Record<string, string>,
  outlinedRow: Record<string, string>, 
}


type IFuncOnChange = (event: React.ChangeEventHandler) => void
type IItem = {
  label: string,
  value: any
}


export type RadioLabelGroupProps = {
  classes?: Classes,
  isRow?: boolean,
  items: IItem[],
  name?: string,
  value?: any,
  onChange?: IFuncOnChange
};

declare const RadioLabelGroup: React.ComponentType<RadioLabelGroupProps>;

export default RadioLabelGroup;