import React from "react";

import * as Style from "./style";

function ItemHeroe({ image, name }) {
  return (
    <Style.itemHeroe>
      <div className="thumbnail">
        <img src={image} alt={name} />
      </div>
      <figcaption>
        <div className="title">
          <p>{name}</p>
        </div>
      </figcaption>
    </Style.itemHeroe>
  );
}

export default ItemHeroe;
