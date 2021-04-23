import { useState } from "react";
import { ImMenu3 } from "react-icons/im";
import logoImg from "../../assets/logo.svg";
import appStoreImg from "../../assets/appstore.png";
import playStoreImg from "../../assets/playstore.png";

import Gradient from "rgt";
import {
  HeaderContainer,
  Menu,
  HeaderNav,
  HeroSection,
  BoxTexto,
  BoxImagem,
  MainContainer,
  MainContent,
  Line,
  Boxes,
  Box,
} from "./styles";

export function Header() {
  const [menuMobile, setMenuMobile] = useState(false);
  return (
    <>
      <HeaderContainer onClick={() => menuMobile && setMenuMobile(false)}>
        <HeaderNav>
          <img src={logoImg} alt="Logo Bibi Mototaxi" />
          <Menu className={menuMobile && "active"}>
            <li>
              <a href="#asd">Como funciona</a>
            </li>
            <li>
              <a href="#asd">Benefícios</a>
            </li>
            <li>
              <a href="#asd">Cidades</a>
            </li>
            <li>
              <a href="#asd">Indique e ganhe</a>
            </li>
            <li>
              <a href="#asd">Baixar App</a>
            </li>
            <li>
              <a href="#asd">Perguntas frequentes</a>
            </li>
          </Menu>

          <ImMenu3
            className="icone-menu-mobile"
            size="3rem"
            color="var(--branco)"
            onClick={() =>
              !menuMobile ? setMenuMobile(true) : setMenuMobile(false)
            }
          />
        </HeaderNav>
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
      </HeaderContainer>
      <MainContainer>
        <MainContent>
          <Line />
          <h1>Como funciona?</h1>
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
                Baixe nosso aplicativo em seu smartphone, você pode baixar{" "}
                <strong>clicando aqui</strong> ou buscando na Google Play
                (Android) ou na App Store (iOS).
              </span>
            </Box>
            <Box>
              <div className="number">03</div>
              <p>Pronto! Agora é só curtir</p>
              <span>
                Baixe nosso aplicativo em seu smartphone, você pode baixar{" "}
                <strong>clicando aqui</strong> ou buscando na Google Play
                (Android) ou na App Store (iOS).
              </span>
            </Box>
          </Boxes>
        </MainContent>
      </MainContainer>
    </>
  );
}
