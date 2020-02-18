type filterFront = {
  label?: String
  key?: String
  value?: []
  operator?: String
  children?: filterFront[]
}

export default function formatFilters(filters: filterFront[]): filterFront[];
