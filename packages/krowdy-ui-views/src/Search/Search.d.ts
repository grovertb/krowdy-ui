interface Classes {
  icon: Record<string, string | number>
  inputBase: Record<string, string | number>
  paper: Record<string, string | number>
  paperBottom: Record<string, string | number>
}
export type SearchProps = {
  classes?: Classes;
  searchIcon?: React.ReactNode;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value?: string;
};

declare const Search: React.ComponentType<SearchProps>;

export default Search;