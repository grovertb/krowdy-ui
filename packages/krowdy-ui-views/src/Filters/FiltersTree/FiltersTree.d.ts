type TreeItem = {

}

export type FiltersTreeProps = {
  treeData: TreeItem[],
  onChange: (event: any) => void
};

declare const FiltersTree: React.ComponentType<FiltersTreeProps>;

export default FiltersTree;