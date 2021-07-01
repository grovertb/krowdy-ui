import React from 'react'

export type OnetapAuthProps = {
  clientId?: string;
  isModal?: boolean;
  // onClose?: Function;
  // onAfterLogin?: Function;
  domain?: string;
  redirectUri?: string;
  children?: any
};

declare var OnetapAuth: React.ComponentType<OnetapAuthProps>;

export default OnetapAuth
