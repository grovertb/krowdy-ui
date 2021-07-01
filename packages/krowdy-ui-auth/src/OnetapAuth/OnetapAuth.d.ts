import React from "react";

type AuthContextProps= {
  clientId?: string;
  domain?: string;
  redirectUri?: string;
  stateContext?: any;
}

export type OnetapAuthProps = {
  children?: any;
  AuthContextProps?: AuthContextProps
};

declare const OnetapAuth: React.ComponentType<OnetapAuthProps>;

export default OnetapAuth;