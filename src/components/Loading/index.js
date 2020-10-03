import React from "react";

import * as Style from "./style";

function Loading({ active }) {
  return (
    <Style.Loading active={active} className={active ? "fadeIn" : "fadeOut"}>
      <div className="loading-icon"></div>
    </Style.Loading>
  );
}

export default Loading;
