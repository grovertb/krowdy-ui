
export type SearchProps = {
  onChange: any,
  onKeyDown: any,
  placeholder: string,
  searchIcon: Node,
  value: string
};

declare const Search: React.ComponentType<SearchProps>;

export default Search;