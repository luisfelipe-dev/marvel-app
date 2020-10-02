import React, { useCallback } from "react";
import debounce from "lodash/debounce";
import * as Style from "./style";

import useCharacters from "../../hooks/useCharacters";

function SearchHeroe() {
  const { setSearch } = useCharacters();

  const handleSearch = useCallback((e) => {
    const value = e.target.value;
    let debouncedFn;
    if (!debouncedFn) {
      debouncedFn = debounce(() => {
        if (value.length >= 3) {
          setSearch(value);
        }
        if (value.length === 0) {
          setSearch();
        }
      }, 1000);

      debouncedFn();
    }
  }, [setSearch]);
  return (
    <Style.Search>
      <input
        type="search"
        name="search"
        placeholder="Procure seu herói favorito."
        onChange={handleSearch}
      />
    </Style.Search>
  );
}

export default SearchHeroe;
