import React, { useCallback, useState } from "react";

import ModalHero from "../Modal";
import * as Style from "./style";

function ComicHeroe({
  id,
  path,
  extension,
  title,
  issueNumber,
  description,
}) {
  const [showModal, setShowModal] = useState(false);

  const handleShowMore = useCallback(() => {
    setShowModal(true);
  }, []);

  const handleClose = useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <Style.itemComicHero key={id}>
      <div className="book">
        <img src={`${path}.${extension}`} alt={title} />

        <div className="read-more">
          <button onClick={handleShowMore}>Saiba mais</button>
        </div>
      </div>

      <div className="comic-informations">
        <p>{title}</p>
      </div>

      <ModalHero active={showModal} close={handleClose}>
        <div className="image-comic">
          <img src={`${path}.${extension}`} alt={title} />

          {issueNumber !== 0 && (
            <div className="issue">
              <p>#{issueNumber}</p>
            </div>
          )}
        </div>

        <div className="infos">
          <div className="title">
            <p>{title}</p>
          </div>

          {description && (
            <div className="description">
              <h2>Descrição:</h2>
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </div>
          )}
        </div>
      </ModalHero>
    </Style.itemComicHero>
  );
}

export default ComicHeroe;
