import React, { useMemo } from "react";

import * as Style from "./style";

function SerieHeroe({ title, description, path, extension, creators }) {
  const formattedCreators = useMemo(
    () =>
      creators
        .slice(0, 3)
        .map((creator) => creator.name)
        .join(", "),
    [creators]
  );

  return (
    <Style.itemSerie>
      <div className="thumbnail">
        <img src={`${path}.${extension}`} alt={title} />
      </div>
      <p className="title-creators">{title}</p>
      <p className="description">{description}</p>
      <p className="creators">Criadores:</p>
      <p className="list">{formattedCreators}</p>
    </Style.itemSerie>
  );
}

export default SerieHeroe;
