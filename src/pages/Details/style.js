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

    div {
      width: 100%;
    }

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

      padding: 5rem 0;

      display: flex;
      flex-direction: column;
      justify-content: center;
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
        align-items: center;

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

  .flex{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`;

export const ComicsContainer = styled.div`
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

  ul {
    vertical-align: middle;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    padding-left: 0;
    list-style: none;
  }

  @media (min-width: ${C.MD}) {
    ul {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (min-width: ${C.LG}) {
    width: calc(50% - 15px);
    margin-right: 15px;

    ul {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: ${C.XL}) {
    width: calc(60% - 15px);

    ul {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export const SeriesContainer = styled.div`
  width: 100%;

  .title {
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;

    display: flex;
    align-items: center;

    color: ${C.marvelGrey};

    h2 {
      font-size: 2.25rem;
      margin-left: 15px;
    }
  }

  ul {
    vertical-align: middle;

    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;

    padding-left: 0;
    list-style: none;
  }

  @media (min-width: ${C.SM}) {
    ul {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: ${C.LG}) {
    width: calc(50% - 15px);
    margin-left: 15px;

    .title{
      margin-top: 0;
    }
  }

  @media (min-width: ${C.XL}) {
    width: calc(35% - 20px);
    margin-left: 20px;
  }
`;
