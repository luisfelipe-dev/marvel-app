import styled from "styled-components";
import * as C from "../../styles/Constants";

export const listHeroes = styled.div`
  width: 100%;
  margin: 2rem 0;

  display: flex;
  align-items: center;
  min-height: 70vh;

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (min-width: ${C.MD}) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: ${C.LG}) {
    .grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (min-width: ${C.XL}) {
    .grid {
      grid-template-columns: repeat(5, 1fr);
    }
  }
`;
