import React from 'react'
import { AuthContextProps } from '../AuthContext'

export type OnetapAuthProps = {
  children?: any;
  AuthContextProps?: AuthContextProps
};

declare var OnetapAuth: React.ComponentType<OnetapAuthProps>;

export default OnetapAuth
