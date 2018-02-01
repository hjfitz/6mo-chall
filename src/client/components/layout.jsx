import React from 'react';

import { TopNav } from './partial';

export default props => (
  <div className="layout">
    <TopNav {...props} />
    {props.children}
  </div>
);
