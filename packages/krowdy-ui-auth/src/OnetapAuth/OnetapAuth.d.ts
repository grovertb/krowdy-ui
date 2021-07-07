import React from 'react'

type AuthContextProps= {
  clientId?: string;
  domain?: string;
  redirectUri?: string;
  stateContext?: any;
  baseUrl: string;
  urlLogin?: string;
  theme?: unknown
}

export type OnetapAuthProps = {
  children?: any;
  AuthContextProps?: AuthContextProps
};

declare var OnetapAuth: React.ComponentType<OnetapAuthProps>;

export default OnetapAuth
