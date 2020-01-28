import type { KrowdyIconProps } from "@krowdy-ui/core/Icon";
export type SearchProps = {
  classes: object,
  searchIcon: React.ComponentType<KrowdyIconProps>,
  type: string,
};

declare const Search: React.ComponentType<SearchProps>;

export default Search;