import React from 'react'

export type OnetapAuthProps = {
  // onClose?: Function;
  // onAfterLogin?: Function;
  children?: any
};

declare var OnetapAuth: React.ComponentType<OnetapAuthProps>;

export default OnetapAuth
