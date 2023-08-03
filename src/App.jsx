import { Routes, Route } from "react-router-dom";

import UserLayout from "layouts/UserLayout";

import HomePage from "pages/user/Home";

import { ROUTES } from "constants/routes";
import LoginPage from "pages/user/Login";
import RegisterPage from "pages/user/Register";
import PersonalPage from "pages/user/Personal";
import AccountInfo from "layouts/UserLayout/components/RightPersonal/AccountInfo";
import PaymentPage from "layouts/UserLayout/components/RightPersonal/Payment";
import GeneralInfo from "layouts/UserLayout/components/RightPersonal/GeneralInfo";
import DetailCard from "pages/user/DetailCard";
import ChapterPage from "pages/user/Chapter";
import FilterSearchPage from "pages/user/Filter";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { getUserInfoRequest } from "redux/slicers/auth.slice";
import FollowComics from "layouts/UserLayout/components/RightPersonal/FollowComics";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      const tokenData = jwtDecode(accessToken);
      dispatch(
        getUserInfoRequest({
          id: parseInt(tokenData.sub),
        })
      );
    }
  }, []);
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route path={ROUTES.USER.HOME} element={<HomePage />} />
        <Route path={ROUTES.DETAIL_CARD} element={<DetailCard />} />
        <Route
          path={ROUTES.FITLER_SEARCH_PAGE}
          element={<FilterSearchPage />}
        />
        <Route path={ROUTES.CHAPTER_PAGE} element={<ChapterPage />} />
      </Route>
      <Route element={<PersonalPage />}>
        <Route path={ROUTES.PERSONAL.ACCOUNTINFO} element={<AccountInfo />} />
        <Route path={ROUTES.PERSONAL.PAYMENT} element={<PaymentPage />} />
        <Route path={ROUTES.PERSONAL.GENERALINFO} element={<GeneralInfo />} />
        <Route path={ROUTES.PERSONAL.FOLLOW} element={<FollowComics />} />
      </Route>
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default App;
