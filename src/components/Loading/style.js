import styled from "styled-components";
import * as C from "../../styles/Constants";

export const Loading = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  align-items: center;
  display: ${(props) => (props.active ? "flex" : "none")};
  justify-content: center;
  overflow: hidden;
  z-index: 999;
  background: rgba(255, 255, 255, 0.9);

  width: 100%;
  height: 100vh;


  .loading-icon {
    &:after {
      animation: spin 0.5s infinite linear;
      border: 2px solid ${C.marvelRed};
      border-radius: 290486px;
      border-right-color: transparent;
      border-top-color: transparent;
      content: "";
      display: block;
      height: 1em;
      position: relative;
      width: 1em;
      position: absolute;
      top: calc(50% - 1.5em);
      left: calc(50% - 1.5em);
      width: 3em;
      height: 3em;
      border-width: 0.25em;
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
