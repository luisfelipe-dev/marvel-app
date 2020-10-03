import React from "react";
import { Link } from "react-router-dom";

import * as Style from "./style";

function ItemHeroe({ image, name, link }) {
  return (
    <Style.itemHeroe>
      <Link to={link}>
        <div className="thumbnail">
          <img src={image} alt={name} />
        </div>
        <figcaption>
          <div className="title">
            <span>{name}</span>
          </div>
        </figcaption>
      </Link>
    </Style.itemHeroe>
  );
}

export default ItemHeroe;
