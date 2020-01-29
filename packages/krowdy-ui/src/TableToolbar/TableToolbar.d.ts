import { KrowdyTypographyProps } from '../Typography';
import { InputProps } from '../Input';
import { SvgIconProps } from '../SvgIcon';

export type TableToolbarProps = {
  action?: React.ReactNode;
  onHandleSearch?: (search: string) => void
  title?: string
  titleProps?: Partial<KrowdyTypographyProps>
  searchIcon?: React.ComponentType
  withSearch?: boolean
}

declare const TableToolbar: React.ComponentType<TableToolbarProps>;

export default TableToolbar;