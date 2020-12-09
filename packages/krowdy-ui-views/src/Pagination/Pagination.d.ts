import React from 'react'
interface Classes {
  color: Record<string, string | number>
  icon: Record<string, string | number>
  input: Record<string, string | number>
  inputSelect: Record<string, string | number>
  label: Record<string, string | number>
  rootLeftIcon: Record<string, string | number>
  rootMenuItem: Record<string, string | number>
  rootRightIcon: Record<string, string | number>
  rootTextfield: Record<string, string | number>
  select: Record<string, string | number>
  selectIcon: Record<string, string | number>
  selectMenu: Record<string, string | number>
  selectedMenuItem: Record<string, string | number>
  slash: Record<string, string | number>
}
type IFuncLimit = (event: React.ChangeEventHandler) => void
type IFunInputPages = (event: React.ChangeEventHandler) => void
type IFunBackPage = (event: React.MouseEventHandler) => void
type IFunNextPage = (event: React.MouseEventHandler) => void
type IFunKeyInputPages = (event: React.KeyboardEventHandler) => void

export type PaginationProps = {
  classes?: Classes,
  limits?: number[],
  onChangeInputPages?: IFunInputPages,
  onChangeSelect?: IFuncLimit,
  onClickBackPage?: IFunBackPage,
  onClickNextPage?: IFunNextPage,
  onKeyDownInputPages?: IFunKeyInputPages,
  totalPages?: number,
  valueInputPages?: number,
  valueLimitSelect?: number
};

declare const Pagination: React.ComponentType<PaginationProps>;

export default Pagination;