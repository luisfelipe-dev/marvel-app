import styled from "styled-components";
import * as C from "../../styles/Constants";

export const HeaderIntern = styled.header`
  width: 100%;
  color: #fff;
  background: ${C.marvelGrey};

  .logo-marvel {
    width: 100%;
    height: 80px;
    border-bottom: 1px solid rgba(255,255,255,.3);

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .utils {
    width: 100%;
    height: 50px;

    display: flex;
    align-items: center;

    .flex {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
`;
