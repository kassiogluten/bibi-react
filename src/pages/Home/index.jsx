import appStoreImg from "../../assets/appstore.png";
import playStoreImg from "../../assets/playstore.png";

import Gradient from "rgt";
import {
  HeroSection,
  BoxTexto,
  BoxImagem,
  MainContainer,
  MainContent,
  Line,
  Boxes,
  Box,
  HeroContainer,
  ColContainer,
  Col1,
  Col2,
} from "./styles";
export function Home() {
  return (
    <>
      <HeroContainer>
        <HeroSection>
          <BoxTexto>
            <h1>
              Corridas de forma{" "}
              <span>
                <Gradient dir="left-to-right" from="#F89938" to="#F26A3B">
                  fácil, prática e segura
                </Gradient>
              </span>
              .
            </h1>
            <p>
              Agora ficou mais fácil, seguro e rápido solicitar um mototaxista.
              Buscamos sempre encontrar um perto de você, eliminando a demora e
              aumentando a facilidade e agilidade.
            </p>
            <img src={appStoreImg} alt="Bibi App Store" />
            <img src={playStoreImg} alt="Bibi Play Store" />
          </BoxTexto>
          <BoxImagem />
        </HeroSection>
      </HeroContainer>
      <MainContainer>
        <MainContent>
          <Line />
          <h2>Como funciona?</h2>
          <Boxes>
            <Box>
              <div className="number">01</div>
              <p>Baixe nosso app</p>
              <span>
                Baixe nosso aplicativo em seu smartphone, você pode baixar{" "}
                <strong>clicando aqui</strong> ou buscando na Google Play
                (Android) ou na App Store (iOS).
              </span>
            </Box>
            <Box>
              <div className="number">02</div>
              <p>Faça seu cadastro</p>
              <span>
                Realize o seu cadastro preenchendo seus dados. Se preferir, você
                também pode realizar o cadastramento rápido pelo Facebook,
                Google (Android) ou Apple (iOS).
              </span>
            </Box>
            <Box>
              <div className="number">03</div>
              <p>Pronto! Agora é só curtir</p>
              <span>
                Depois de concluir seu cadastro você já pode realizar pedidos de
                corrida.
              </span>
            </Box>
          </Boxes>
        </MainContent>
        <MainContent>
          <ColContainer>
            <Col1>
              <Line />
              <Line />
              <h4>Por que usar Bibi Mototáxi?</h4>
              <h1>
                Quem vai de Bibi tem um time completo:{" "}
                <strong>fácil, rápido, seguro e econômico.</strong>
              </h1>
              <Line className="linha2" />
              <Line className="linha3" />
            </Col1>
            <Col2 />
          </ColContainer>
        </MainContent>
      </MainContainer>
    </>
  );
}
