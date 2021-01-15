interface Classes {
  backIcon: Record<string, string>,
  root: Record<string, string>,
  titleContainer: Record<string, string>
}

// Supported filter types
type FilterType = 'string' | 'number' | 'date' | 'category'

type Filter = {
  _id: string,
  key: string,
  label: string,
  type: FilterType
}

type FilterGroup = {
  _id: string,
  children: Filter[],
  label: string
}

// Applied filter
type AppliedFilter = {
  _id: string;
  key: string;
  label: string;
  operator: string;
  operatorLabel: string;
  optionIndex  : number; 
  type         : FilterType;
  value?: string | number | any[]
}

type CategoryItem = {
  _id: string;
  label: string
}

type CandidateValue = {
  _id: string | number;
  label: string
}
export interface FiltersProps {
  classes?: Classes;
  filterGroups: FilterGroup[];
  filters: AppliedFilter[];
  uniqueFilter: boolean;
  headerHomeComponent?: React.ReactNode;
  listWidth?: number;
  onChangeFilters: (appliedFilters: AppliedFilter[]) => void;
  hasNextPage?: boolean;
  loadMoreCategoryItems: (categoryKey: string) => void;
  onSelectCategoryFilter: (categoryKey: string) => void;
  title: string;
  categoryItems: CategoryItem[];
  onChangeFilterCandidate: (candidateGroupFilterType: 'included' | 'excluded', candidateValues: CandidateValue[]) => void;
  excludedCandidates: CandidateValue[];
  includedCandidates: CandidateValue[];
} 

declare const Filters: React.ComponentType<FiltersProps>;

export default Filters;