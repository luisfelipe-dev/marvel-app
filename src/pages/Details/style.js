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

          &:first-child {
            margin-right: 5%;
          }

          &:last-child {
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

          &:first-child {
            margin-right: 5%;
          }

          &:last-child {
            margin-left: 5%;
          }
        }
      }
    }
  }
`;

export const ContentHero = styled.div`
  width: 100%;

  padding: 2rem 0;

  .comics-container {
    width: 100%;

    .title {
      width: 100%;
      margin-bottom: 2rem;

      display: flex;
      align-items: center;

      color: ${C.marvelGrey};

      h2 {
        font-size: 2.25rem;
        margin-left: 15px;
      }
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 1rem;
    }

    ul {
      vertical-align: middle;

      padding-left: 0;
      list-style: none;

      & > li {
        display: inline-block;
        margin-bottom: 2rem;
      }

      .book {
        cursor: pointer;
        display: block;
        width: 100%;
        max-width: 150px;
        height: 220px;
        position: relative;
        background: white;
        z-index: 1;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1),
          0 9px 20px 0 rgba(0, 0, 0, 0.25);
        overflow: hidden;
        -webkit-transition: box-shadow 0.3s linear;
        transition: box-shadow 0.3s linear;
        margin: 0 auto;

        img {
          width: inherit;
          height: inherit;
          -webkit-transform-origin: 0 50%;
          transform-origin: 0 50%;
          -webkit-transform: rotateY(0);
          transform: rotateY(0);
          -webkit-transition: all 0.45s ease;
          transition: all 0.45s ease;
        }

        &,
        & img,
        &::after,
        &::before {
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
        }

        &::after,
        &::before {
          content: "";
          display: block;
          width: inherit;
          height: inherit;
          position: absolute;
          z-index: -1;
          top: 0;
          background: white;
          border: 1px solid #d9d9d9;
        }

        &::before {
          left: -3px;
        }

        &::after {
          left: -6px;
        }

        &:hover {
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25),
            0 9px 20px 0 rgba(0, 0, 0, 0.45);

          img {
            -webkit-transform: rotateY(-25deg);
            transform: rotateY(-25deg);
            box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.2);
          }
        }
      }

      .comic-informations {
        width: 100%;
        margin-top: 1rem;
        text-align: center;
      }
    }
  }
`;
