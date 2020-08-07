export interface Filter {
  expanded?: boolean;
  _id?: string;
  children?: Filter[];
  key: string;
  operator: string;
  label?: string;
  type: string;
  optionIndex?: number;
  operatorLabel?: string;
  value?: string | any;
  reference?: any;
}
export interface Candidate { 
  _id?: number; 
  email: any; 
  firstName: any; 
  lastName?: string 
}

export interface CategoryItem {
  _id  : string;
  count?: number;
  label: string;
}

export interface Event  { 
  stopPropagation: () => void 
}