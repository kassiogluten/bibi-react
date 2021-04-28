import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: absolute;
  //background: linear-gradient(324.28deg, #31373f 20.91%, #292e34 79.09%);
  width: 100%;
  overflow-x: hidden;
  color: var(--branco);
`;

export const HeaderNav = styled.div`
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
  position: relative;

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
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 0;
    position: fixed;
    left: -100vw;
    top: 0;
    background-color: rgba(41, 46, 52, 0.75);
    backdrop-filter: blur(10px);
    height: 100vh;
    width: 100vw;
    //height: calc(95vh - 140px);
    border-radius: 10px;
    opacity: 0;
    /* display: none; */
    /* visibility: hidden; */
    transition: opacity 350ms ease;
    z-index: 10;

    &.active {
      opacity: 1;
      left: 0;
      /* display: block; */
      /* visibility:visible; */
    }

    li {
      display: block;
      a {
        display: block;
        padding: 20px;
        font-size: 1rem;
        font-weight: 600;

        &:hover {
          color: var(--laranja);
          border-radius: 10px;
        }
      }
      &:nth-child(even) {
        background-color: rgba(0, 0, 0, 0.03);
      }
    }
  }
`;
