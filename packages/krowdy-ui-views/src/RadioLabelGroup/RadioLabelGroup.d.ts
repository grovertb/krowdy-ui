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

type IItem = {
  label: string,
  value: any
}

export type RadioLabelGroupProps = {
  classes?: Classes,
  isRow?: boolean,
  items: Array<IItem>,
  name?: string,
  value?: any,
  onChange?: (event: React.ChangeEventHandler) => void
};

declare const RadioLabelGroup: React.ComponentType<RadioLabelGroupProps>;

export default RadioLabelGroup;