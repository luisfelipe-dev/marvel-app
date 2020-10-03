import styled from "styled-components";
import * as C from "../../styles/Constants";

export const HeaderPhoto = styled.div`
  width: 100%;

  background-size: cover;

  padding-top: 2rem;
  padding-bottom: 2rem;

  .flex {
    display: flex;
    flex-wrap: wrap;
  }

  .photo-hero {
    width: 100%;
    text-align: center;

    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      box-shadow: 0px 2px 8px rgba(255, 255, 255, 0.4);
    }
  }

  .info-hero {
    width: 100%;
    margin-top: 2rem;
    color: white;
    text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);

    h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    p {
      margin-bottom: 1rem;
    }

    .personal {
      width: 100%;
      margin-top: 2rem;
      padding: 0 5px;

      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .item-personal {
        width: 46%;
        border: 2px solid #fff;
        border-radius: 5px;
        padding: 15px;

        text-align: center;

        position: relative;

        p {
          padding: 0;
          margin: 0;
        }

        span {
          position: absolute;
          top: -11px;
          right: -11px;

          font-size: 0.875rem;
          background: ${C.marvelRed};

          display: flex;
          align-items: center;
          justify-content: center;

          width: 30px;
          height: 30px;
          margin: 0 auto;
          border-radius: 50%;
        }
      }
    }
  }

  @media (min-width: ${C.MD}) {
    .photo-hero {
      width: 40%;

      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 220px;
        height: 220px;
      }
    }

    .info-hero {
      width: 60%;
      margin-top: 0;
    }
  }

  @media (min-width: ${C.LG}) {
    .info-hero {
      width: calc(60% - 5%);

      .personal {
        justify-content: flex-start;
        .item-personal {
          width: 30%;

          &:first-child{
            margin-right: 5%;
          }

          &:last-child{
            margin-left: 5%;
          }
        }
      }
    }
  }

  @media (min-width: ${C.XL}) {
    .info-hero {
      width: calc(60% - 17%);

      .personal {
        justify-content: flex-start;
        .item-personal {
          width: 30%;

          &:first-child{
            margin-right: 5%;
          }

          &:last-child{
            margin-left: 5%;
          }
        }
      }
    }
  }
`;
