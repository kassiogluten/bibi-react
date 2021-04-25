import { useState } from "react";
import { ImCross, ImMenu3 } from "react-icons/im";
import logoImg from "../../assets/logo.svg";

import { HeaderContainer, Menu, HeaderNav } from "./styles";

export function Header() {
  const [menuMobile, setMenuMobile] = useState(false);
  return (
    <>
      <HeaderContainer>
        <HeaderNav>
          <img src={logoImg} alt="Logo Bibi Mototaxi" />
          <Menu
            onClick={() => menuMobile && setMenuMobile(false)}
            className={menuMobile && "active"}
          >
            {menuMobile && (
              <ImCross
                style={{ position: "fixed", top: 50, right: 30 }}
                size="1.25rem"
                color="var(--branco)"
                onClick={() => setMenuMobile(false)}
              />
            )}
            <li>
              <a href="#bibi">Como funciona</a>
            </li>
            <li>
              <a href="#bibi">Benefícios</a>
            </li>
            <li>
              <a href="#bibi">Cidades</a>
            </li>
            <li>
              <a href="#bibi">Indique e ganhe</a>
            </li>
            <li>
              <a href="#bibi">Baixar App</a>
            </li>
            <li>
              <a href="#bibi">Perguntas frequentes</a>
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
