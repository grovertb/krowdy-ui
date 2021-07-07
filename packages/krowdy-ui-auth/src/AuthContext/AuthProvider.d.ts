import React from 'react'

export type AuthContextProps = {
  clientId?: string;
  domain?: string;
  redirectUri?: string;
  stateContext?: any;
  storage?: string;
  baseUrl: string;
  urlLogin?: string;
  theme?: unknown
};

declare var AuthContext: React.ComponentType<AuthContextProps>;

export default AuthContext
