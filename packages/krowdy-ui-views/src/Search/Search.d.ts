interface classes {
  icon: Record<string, string | number>
  inputBase: Record<string, string | number>
  paper: Record<string, string | number>
  paperBottom: Record<string, string | number>
}
export type SearchProps = {
  classes: classes,
  searchIcon: React.ReactNode,
  type: string,
};

declare const Search: React.ComponentType<SearchProps>;

export default Search;