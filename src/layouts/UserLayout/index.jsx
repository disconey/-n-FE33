import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import * as S from "./styles";
import Midmenu from "./components/Midmenu";
import MenuMobile from "./components/MenuMobile";
import useScrollToTop from "hooks/useSrcollToTop";

function UserLayout() {
  useScrollToTop();
  return (
    <S.UserLayoutWrapper>
      <S.UserLayoutHeader>
        <Header />
        <Midmenu />
      </S.UserLayoutHeader>

      <S.UserLayoutMobile>
        <MenuMobile />
      </S.UserLayoutMobile>
      <S.MainWrapper>
        <Outlet />
      </S.MainWrapper>
      <Footer />
    </S.UserLayoutWrapper>
  );
}

export default UserLayout;
