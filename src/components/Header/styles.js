import styled from "styled-components";
import previewAppImg from "../../assets/previewAppImg.png";

export const HeaderContainer = styled.div`
  background: linear-gradient(324.28deg, #31373f 20.91%, #292e34 79.09%);
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
      &:nth-child(even) {
        background-color: rgba(0, 0, 0, 0.03);
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

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const BoxTexto = styled.div`
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

  @media (max-width: 900px) {
    width: 100%;
    margin: 1rem 0;
    padding: 2rem;

    p {
      width: 100%;
    }

    img {
      margin: 0 auto;
    }
  }
`;

export const BoxImagem = styled.div`
  background-image: url(${previewAppImg});
  height: 800px;
  width: 50%;

  @media (max-width: 900px) {
    width: 100%;
    height: 600px;
    background-position: 30% 15%;
    background-size: 100%;
  }

  @media (max-width: 700px) {
    width: 100%;
    height: 600px;
    background-position: 30% 15%;
    background-size: 140%;
  }
`;

export const MainContainer = styled.div`
  background: var(--terciariaCinza);
  width: 100%;
  color: var(--branco);
  margin-top: -170px;

  @media (max-width: 900px) {
    margin-top: 0;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  max-width: 1216px;
  margin: 0 auto;
  border-bottom: 1px solid var(--secundariaCinza);
  padding: 5rem 1rem;

  h1 {
    font-size: 1.5rem;
    text-align: left;
    margin-top: 0.5rem;
    font-weight: 700;
  }
`;

export const Line = styled.div`
  position: absolute;
  width: 60px;
  height: 2px;
  background: linear-gradient(91.81deg, #f89938 4.24%, #f26a3b 99.64%);
`;

export const Boxes = styled.div`
  text-align: left;
  display: flex;
  margin: 3rem 0;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Box = styled.div`
position: relative;
  background: linear-gradient(180deg, #39404a 0%, rgba(57, 64, 74, 0) 100%);
  border-radius: 20px;
  padding: 40px;
  margin: 15px;

  .number {
    position: absolute;
    width: 50px;
    height: 50px;
    left: -15px;
    top: -15px;
    text-align:center;
    padding-top:.9rem;
    font-weight:700;

    /* Terceriaria/Degradê/02 */

    background: linear-gradient(91.81deg, #f89938 4.24%, #f26a3b 99.64%);
    border-radius: 10px;
  }
  p{
    font-size:1.5rem;
    margin-bottom:1rem;
    font-weight:600;
  }
`;
