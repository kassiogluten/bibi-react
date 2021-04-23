import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(324.28deg, #31373f 20.91%, #292e34 79.09%);
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
  color: var(--branco);
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  height: 120px;
  max-width: 1216px;
  margin: 0 auto;
  border-bottom: 1px solid var(--secundariaCinza);

  img {
    height: 3.75rem;
  }

  .icone-menu-mobile {
    display: none;
  }

  @media (max-width: 900px) {
    img {
      margin: 0 auto;
    }
    .icone-menu-mobile {
      display: block;
      cursor: pointer;
      transition: fill 300ms ease;

      &:hover {
        fill: var(--laranja);
      }
    }
  }
`;

export const Menu = styled.ul`
  list-style: none;

  li {
    display: inline;

    a {
      padding: 2rem 1rem;
      color: var(--branco);
      font-size: 0.875rem;
      font-weight: 600;
      text-decoration: none;
      transition: color 300ms ease;

      &:hover {
        color: var(--laranja);
      }
    }
  }

  @media (max-width: 900px) {
    padding: 1rem 0;
    position: fixed;
    left: 50%;
    top: 2rem;
    background-color: var(--laranja);
    transform: translateX(-50%);
    //height:90vh;
    width: 90vw;
    border-radius: 10px;
    opacity: 0;
    /* display: none; */
    /* visibility: hidden; */
    transform: translateX(100%);
    transition: transform 200ms ease-in;

    &.active {
      opacity: 1;
      /* display: block; */
      /* visibility:visible; */
      transform: translateX(-50%);
    }

    li {
      display: block;
      a {
        display: block;
        padding: 20px;

        &:hover {
          color: var(--secundariaCinza);
          border-radius: 10px;
        }
      }
    }
  }
`;

export const HeroSection = styled.div`
  display: flex;
  max-width: 1008px;
  margin: 0 auto;

  justify-content: space-between;
  align-items: flex-start;

  padding: 0.5rem 1rem;
  text-align: left;
  .boxTexto {
    width: 50%;
    margin: 7rem 0;

    h1 {
      font-size: 3.25rem;
      font-weight: 400;
      span {
        font-weight: 700;
      }
    }
    p {
      margin: 3rem 0;
      font-size: 0.825rem;
      line-height: 1.25rem;
      width: 85%;
    }
    img {
      margin-right: 1rem;
    }
  }
  .boxImagem {
    width: 50%;
  }
`;
//export const boxTexto = styled.div``;
//export const boxImagem = styled.div``;
