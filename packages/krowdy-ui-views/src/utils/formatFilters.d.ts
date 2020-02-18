type filterFront = {
  label?: String
  key?: String
  value?: []
  filterType?: String
  operator?: String
  children?: filterFront[]
}

export default function formatFilters(filters: filterFront[]): [];
