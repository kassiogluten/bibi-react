import styled from "styled-components";
import previewAppImg from "../../assets/previewAppImg.png";
import previewAppImg2 from "../../assets/previewAppImg2.png";

export const HeroContainer = styled.div`
  background: linear-gradient(324.28deg, #31373f 20.91%, #292e34 79.09%);
  width: 100%;
  color: var(--branco);
  padding-top: 120px;
`;

export const HeroSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.5rem 1rem;
  max-width: 1008px;
  margin: 0 auto;

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
      //margin: 0 auto;
      max-width: 45%;
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
  padding: 5rem 1rem 0 1rem;

  h2 {
    font-size: 1.5rem;
    text-align: left;
    margin-top: 0.5rem;
    font-weight: 700;
  }
  title {
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
  margin: 3rem 0 0 0;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    margin: 3rem 1rem;
  }
`;

export const Box = styled.div`
  width: 33%;
  position: relative;
  background: linear-gradient(180deg, #39404a 0%, rgba(57, 64, 74, 0) 100%);
  border-radius: 20px;
  padding: 40px;
  margin: 15px;

  .number {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50px;
    height: 50px;
    left: -15px;
    top: -15px;
    text-align: center;
    font-weight: 900;
    font-size: 1.5rem;

    background: linear-gradient(91.81deg, #f89938 4.24%, #f26a3b 99.64%);
    border-radius: 10px;
  }
  p {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  @media (max-width: 700px) {
    width: 100%;
    margin: 1rem 0 1rem 0;
  }
`;

export const ColContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Col1 = styled.div`
  position: relative;
  width: 45%;

  h1,
  h4 {
    text-align: left;
  }

  h4 {
    font-size: 0.75rem;
    font-weight: 400;
    margin: 0.5rem 0;
  }

  h1 {
    position: relative;
    margin: 2rem 90px 0 0;
    font-weight: 400;
    z-index: 2;

    strong {
      font-weight: 700;
    }
  }

  .linha2 {
    height: 18px;
    width: 205px;
    right: 100px;
    bottom: 35px;
  }
  .linha3 {
    height: 18px;
    width: 335px;
    left: -5px;
    bottom: -3px;
  }
  @media (max-width: 1200px) {
    .linha2,
    .linha3 {
      display: none;
    }
  }
  
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const Col2 = styled.div`
  position: relative;
  background-image: url(${previewAppImg2});
  height: 600px;
  width: 55%;
  background-position: 50%;
  background-size: 150%;
  background-repeat: no-repeat;
  overflow: visible;

  @media (max-width: 700px) {
    width: 100%;
    height: 600px;
    background-position: 50%;
    background-size: 180%;
  }
`;