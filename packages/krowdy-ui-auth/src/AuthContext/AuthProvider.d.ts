import React from 'react'

type SocialNetworkProps = {
  clientId?: string;
  clientSecret?: string;
  redirectUri?: string;
  scope?: string;
  state?: string
}

type SocialProps = {
  google?: SocialNetworkProps;
  linkedin?: SocialNetworkProps;
}

export type AuthContextProps = {
  social?: SocialProps,
  stateContext?: any;
  storage?: string;
  baseUrl: string;
  urlLogin?: string;
  theme?: unknown;
  referrer?: string;
  clientSecret?: string
};

declare var AuthContext: React.ComponentType<AuthContextProps>;

export default AuthContext
