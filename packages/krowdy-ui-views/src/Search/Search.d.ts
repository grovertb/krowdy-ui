import KrowdyIcon from '@material-ui/icons'
interface searchIcon {

}

export type SearchProps = {
  classes: object,
  // searchIcon: React.ComponentType<KrowdyIconProps/>,
  type: string,
};

declare const Search: React.ComponentType<SearchProps>;

export default Search;