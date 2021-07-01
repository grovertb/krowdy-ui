import React from "react";

export type AuthContextProps = {
  clientId?: string;
  domain?: string;
  redirectUri?: string;
  stateContext?: any;
};

declare const AuthContext: React.ComponentType<AuthContextProps>;

export default AuthContext;