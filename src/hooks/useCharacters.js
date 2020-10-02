import {useContext} from 'react';

import {CharactersContext} from '../context/charactersContext';

const useCharacters = () =>{
  const context = useContext(CharactersContext);

  if(!context){
    throw new Error('useCharacter must be used within an CharactersProvider.')
  }

  return context;
}

export default useCharacters;