import { useState } from "react";
import { ImMenu3 } from "react-icons/im";
import logoImg from "../../assets/logo.svg";

import { HeaderContainer, Menu, HeaderNav } from "./styles";

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
      </HeaderContainer>
    </>
  );
}
