interface Classes {
  backIcon: Record<string, string>,
  root: Record<string, string>,
  titleContainer: Record<string, string>
}

interface FilterGroup {
  _id: string,
  children: [{
    _id: string,
    key: string,
    label: string,
    typeFilter: string
  }],
  label: string
}

// Applied filter
interface Filter {
  key: string,
  label: string,
  operator: string,
  value: string | number | string[] | number[]
}

export interface FiltersProps {
  classes?: Classes,
  filterGroups: [FilterGroup],
  filters: [Filter],
  headerHomeComponent: React.ReactNode,
  onClickApply: (filter: Filter) => void,
  onDeleteFilter: (filter: Filter) => void,
  title: string,
} 

declare const Filters: React.ComponentType<FiltersProps>;

export default Filters;