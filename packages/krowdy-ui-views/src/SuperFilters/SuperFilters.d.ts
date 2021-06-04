import { PaperProps as CorePaperProps } from '@krowdy-ui/core/Paper'
import { KrowdyButtonProps } from '@krowdy-ui/core/Button'

interface Classes {
  backIcon?: string;
  root?: string;
  titleContainer?: string
}

// Supported filter types
type FilterType = 'string' | 'number' | 'date' | 'category';

type Filter = {
  _id: string;
  key: string;
  label: string;
  type: FilterType | string
}

type FilterGroup = {
  _id: string;
  children: Filter[];
  label: string
}

// Applied filter
type AppliedFilter = {
  _id?: string;
  key: string;
  label?: string;
  operator: string;
  operatorLabel?: string;
  optionIndex?: number;
  type: FilterType | string;
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

type DataUserFlow = {
  'data-userflow': string;
}
type ChildProps = {
  PaperProps: CorePaperProps | DataUserFlow;
  AddFiltersButtonProps: KrowdyButtonProps | DataUserFlow
}

type FilterTypeType = {
  _id: string;
  createdAt: string;
  initialValue: {
      first?: string | null;
      second?: string | null;
  } | never[];
  options: {
      _id: string;
      label: string;
      numberOfInputs: number;
      operator: string;
  }[];
  type: string;
  updatedAt: string;
}
export interface FiltersProps {
  childProps: ChildProps;
  classes?: Classes;
  filterGroups: FilterGroup[];
  filters: AppliedFilter[];
  uniqueFilter: boolean;
  headerHomeComponent?: React.ReactNode;
  listWidth?: number;
  onChangeFilters: (appliedFilters: AppliedFilter[]) => void;
  hasNextPage?: boolean;
  loadMoreCategoryItems: (categoryKey: string) => void;
  onSelectCategoryFilter: (categoryKey: string, values: any[]) => void;
  title: string;
  categoryItems: CategoryItem[];
  onChangeFilterCandidate?: (candidateGroupFilterType: 'included' | 'excluded', candidateValues: CandidateValue[]) => void;
  excludedCandidates?: CandidateValue[];
  includedCandidates?: CandidateValue[];
  viewDefault?: string;
  filterTypes?: FilterTypeType[];
}

declare const Filters: React.ComponentType<FiltersProps>;

export default Filters
