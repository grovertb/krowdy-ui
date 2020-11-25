interface Classes {
  root: string;
  container: string;
  content: string;
  avatar: string;
  personIcon: string;
  list: string;
}

export type ReferentProps = {
  classes?: Classes;
  children?: React.ReactNode;
  photo?: string;
  header?: string | React.ReactNode;
};

declare const Referent: React.ComponentType<ReferentProps>;

export default Referent;