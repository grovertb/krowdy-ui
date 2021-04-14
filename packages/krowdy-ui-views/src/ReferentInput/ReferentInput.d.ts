import { TextFieldClassKey, TextFieldProps } from '@material-ui/core'

interface Classes {
  filled: string;
  unPadding: string;
  unPaddingInput: string;
}

export type ReferentInputProps = TextFieldProps & {
  classes?: TextFieldClassKey & Classes;
  filled?: boolean; 
  unPadding?: boolean;
};


declare const ReferentInput: React.ComponentType<ReferentInputProps>;

export default ReferentInput;