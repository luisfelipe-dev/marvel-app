import React from "react";
import useCharacters from "../../hooks/useCharacters";

import * as Style from "./style";

function Pagination() {
  const {
    handleNextPage,
    handlePreviousPage,
    pageHeroe,
    setPageHeroe,
    lastPage,
  } = useCharacters();

  return (
    <Style.Steps>
      <button
        className={`prev ${pageHeroe <= 1 ? "disable" : ""}`}
        onClick={handlePreviousPage}
      >
        Anterior
      </button>

      <div>
        <button onClick={() => setPageHeroe(1)}>...</button>
        {pageHeroe > 3 && (
          <button onClick={() => setPageHeroe(pageHeroe - 3)}>
            {pageHeroe - 3}
          </button>
        )}
        {pageHeroe > 2 && (
          <button onClick={() => setPageHeroe(pageHeroe - 2)}>
            {pageHeroe - 2}
          </button>
        )}
        {pageHeroe > 1 && (
          <button onClick={() => setPageHeroe(pageHeroe - 1)}>
            {pageHeroe - 1}
          </button>
        )}

        <button className="active">{pageHeroe}</button>

        {pageHeroe < lastPage && (
          <button onClick={() => setPageHeroe(pageHeroe + 1)}>
            {pageHeroe + 1}
          </button>
        )}
        {pageHeroe + 1 < lastPage && (
          <button onClick={() => setPageHeroe(pageHeroe + 2)}>
            {pageHeroe + 2}
          </button>
        )}
        {pageHeroe + 2 < lastPage && (
          <button onClick={() => setPageHeroe(pageHeroe + 3)}>
            {pageHeroe + 3}
          </button>
        )}
        <button onClick={() => setPageHeroe(lastPage)}>...</button>
      </div>

      <button
        className={`next ${lastPage === pageHeroe ? "disable" : ""}`}
        onClick={handleNextPage}
      >
        Próximo
      </button>
    </Style.Steps>
  );
}

export default Pagination;
