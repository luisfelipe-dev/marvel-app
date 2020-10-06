import styled from "styled-components";
import * as C from "../../styles/Constants";

export const ModalContent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 99;

  display: ${(props) => (props.active ? "flex" : "none")};
  align-items: center;
  justify-content: center;

  padding: 15px;

  .modal-close {
    position: absolute;
    right: 0;
    top: 0;

    button {
      padding: 10px;
      border: 0;
      background: transparent;
      cursor: pointer;
      outline: 0;

      color: ${C.marvelRed};
    }
  }

  .modal-main {
    position: relative;
    background: white;
    border-radius: 8px;
    padding: 20px;

    background: white;
    border-radius: 8px;

    padding: 20px;

    width: 100%;
    height: auto;
    max-height: 500px;
    overflow: hidden;
    overflow-y: scroll;

    .image-comic {
      width: 200px;
      margin: 0 auto;
      text-align: center;
      position: relative;
      margin-top: 2rem;

      img {
        max-width: 100%;
        height: auto;
      }

      .issue {
        position: absolute;
        top: -6px;
        right: -11px;

        p {
          width: 40px;
          height: 40px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;
          color: white;
          background: ${C.marvelRed};
        }
      }
    }

    .title {
      width: 100%;
      margin-top: 1rem;

      p {
        font-weight: bold;
        font-size: 1.125rem;
      }
    }

    .description {
      width: 100%;

      h2 {
        font-size: 1.125rem;
        color: ${C.marvelRed};
        margin-bottom: 1rem;
      }
    }
  }

  @media (min-width: ${C.SM}) {
    .modal-main {
      max-height: 700px;
      overflow-y: hidden;
    }
  }

  @media (min-width: ${C.MD}) {
    .modal-main {
      max-width: 600px;
      display: flex;
      flex-wrap:wrap;

      .image-comic{
        width: 30%;
        margin-top: 0;
        margin-bottom: 1rem;

        img{
          max-width: 100%;
          height: auto;
        }
      }

      .infos{
        width: 70%;
        padding-left: 1rem;
        padding-right: 1rem;
      }
    }
  }
`;
