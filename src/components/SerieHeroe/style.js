import styled from "styled-components";
import * as C from "../../styles/Constants";

export const itemSerie = styled.li`
  width: 100%;
  margin-bottom: 1rem;

  .thumbnail {
    position: relative;
    width: 100%;
    height: 248px;
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 0 7px 17px -8px rgba(0, 0, 0, 0.8);

    img {
      position: absolute;
      left: 50%;
      top: 50%;
      height: auto;
      width: 100%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
  }

  .title-creators {
    font-size: 1.125rem;
    font-weight: bold;
    margin-top: .5rem;
  }

  .creators {
    font-size: 0.875rem;
    font-weight: bold;
    margin-top: .5rem;
  }

  .description,
  .list {
    margin-top: 0.2rem;
    font-size: 0.75rem;
  }

  @media (min-width: ${C.SM}) {
    .thumbnail{
      height: 204px;
    }
  }

  @media (min-width: ${C.LG}) {
    .thumbnail{
      img{
        width: 100%;
        height: 100%;
      }
    }
  }

  @media (min-width: ${C.XL}) {
    .thumbnail{
      height: 160px;

      img{
        width: 100%;
        height: auto;
      }
    }
  }
`;
