import { TextFieldClassKey, TextFieldProps } from '@material-ui/core'

interface Classes {
  root: string;
  container: string;
  content: string;
  avatar: string;
  personIcon: string;
  list: string;
}

export type ReferentInputProps = TextFieldProps & {
  classes?: TextFieldClassKey & Classes;
  filled?: boolean; 
  unPadding?: boolean;
};


declare const ReferentInput: React.ComponentType<ReferentInputProps>;

export default ReferentInput;