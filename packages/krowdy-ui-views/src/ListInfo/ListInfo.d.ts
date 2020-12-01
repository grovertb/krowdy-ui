type List = {
  _id: string,
  icon?: React.ReactNode;
  src?: string;
  subtitle?   : string;
  title?: string;
}

export type ListInfoProps = {
  classes?: {
    header?: string;
    container?: string;
  };
  header?: React.ReactNode;
  hover?: boolean;
  list?: List[],
  selectedId?: string;
  onChange?: (id: string) => (e: React.ChangeEvent<HTMLInputElement>) => void;
}

declare const ListInfo: React.ComponentType<ListInfoProps>;

export default ListInfo;