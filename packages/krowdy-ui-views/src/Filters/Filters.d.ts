interface Classes {
  backIcon: Record<string, string>,
  root: Record<string, string>,
  titleContainer: Record<string, string>
}

type FilterGroup = {
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
type Filter = {
  key: string,
  label: string,
  operator: string,
  value: string | number | string[] | number[]
}

type CategoryItem = {
  _id: string
  label: string
}

export interface FiltersProps {
  classes?: Classes,
  filterGroups: [FilterGroup],
  filters: [Filter],
  headerHomeComponent: React.ReactNode,
  onChangeFilters: (filters: Filter[]) => void,
  hasNextPage?: boolean,
  isNextPageLoading?: boolean,
  loadMoreCategoryItems: (filterType: string) => void,
  title: string,
  categoryItems: [CategoryItem]
} 

declare const Filters: React.ComponentType<FiltersProps>;

export default Filters;