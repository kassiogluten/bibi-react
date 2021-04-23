import react, { useRef, useState } from "react";
import { ImMenu3 } from "react-icons/im";
import logoImg from "../../assets/logo.svg";
import appStoreImg from "../../assets/appstore.png";
import playStoreImg from "../../assets/playstore.png";
import previewAppImg from "../../assets/previewAppImg.png";
import Gradient from "rgt";
import {
  Container,
  Menu,
  Navigation,
  HeroSection,
  boxTexto,
  boxImagem,
} from "./styles";

export function Header() {
  const [menuMobile, setMenuMobile] = useState(false);
  return (
    <Container onClick={() => menuMobile && setMenuMobile(false)}>
      <Navigation>
        <img src={logoImg} alt="Logo Bibi Mototaxi" />
        <Menu className={menuMobile && "active"}>
          <li>
            <a href="#">Como funciona</a>
          </li>
          <li>
            <a href="#">Benefícios</a>
          </li>
          <li>
            <a href="#">Cidades</a>
          </li>
          <li>
            <a href="#">Indique e ganhe</a>
          </li>
          <li>
            <a href="#">Baixar App</a>
          </li>
          <li>
            <a href="#">Perguntas frequentes</a>
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
      </Navigation>
      <HeroSection>
        <div className="boxTexto">
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
        </div>
        <div className="boxImagem">
          <img src={previewAppImg} alt="App Bibi" />
        </div>
      </HeroSection>
    </Container>
  );
}
