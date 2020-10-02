import React, {useCallback} from 'react';
import useCharacters from "../../hooks/useCharacters";


function Pagination() {

  const {setPageHeroe} = useCharacters()

  const handleNext = useCallback(() => setPageHeroe(page => Number(page) + 10),[setPageHeroe])

  const handlePrevious = useCallback(() => setPageHeroe(page => Number(page) - 10),[setPageHeroe])

  return (
    <div>
      <button onClick={handlePrevious}>Anterior</button>
      <button onClick={handleNext}>Próximo</button>
    </div>
  );
}

export default Pagination;