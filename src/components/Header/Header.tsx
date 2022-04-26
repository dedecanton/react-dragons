import React, { useContext, useState } from "react";

import {
  HeaderButton,
  HeaderContainer,
  HeaderStyled,
  Image,
  Logo,
  LogoutButton,
} from "./Header.style";
import LogoImage from "../../assets/logo.svg";
import { AuthContext } from "../../contexts/auth-context";

function Header() {
  const { logout } = useContext(AuthContext);
  
  const onLogout = async () => {
    logout()
  }

  // change header style on scroll
  const [headerstyle, setHeaderstyle] = useState<string>('expanded');
  window.onscroll = () => {
    if (window.scrollY > 20) {
      setHeaderstyle('condensed');
    } else {
      setHeaderstyle('false');
    }
  };

  return (
    <HeaderStyled headerstyle={headerstyle}>
      <HeaderContainer>
        <Logo>
          <Image src={LogoImage} alt="Dragon Logo" />
        </Logo>
        <HeaderButton headerstyle={headerstyle} to="/dragon/add">
          Adicionar dragão
        </HeaderButton>
        <LogoutButton headerstyle={headerstyle} onClick={onLogout}>
          Sair
        </LogoutButton>
      </HeaderContainer>
    </HeaderStyled>
  );
}

export default Header;
