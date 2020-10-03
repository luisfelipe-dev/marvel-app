import React from "react";

import * as Style from "./style";

function Loading({ active }) {
  return (
    <Style.Loading active={active}>
      <div className="loading-icon"></div>
    </Style.Loading>
  );
}

export default Loading;
