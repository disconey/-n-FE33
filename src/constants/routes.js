export const ROUTES = {
  USER: {
    HOME: "/",
    PRODUCT_LIST: "/products",
    PRODUCT_DETAIL: "/products/:id",
  },
  ADMIN: {
    DASHBOARD: "/admin/dashboard",
  },
  LOGIN: "/login",
  REGISTER: "/register",
  PERSONAL: {
    ACCOUNTINFO: "/personal/accountinfo",
    PAYMENT: "/personal/payment",
    GENERALINFO: "/personal/generalinfo",
    FOLLOW: "/personal/followcomics",
  },
  DETAIL_CARD: "/comics/:id",
  CHAPTER_PAGE: "/comics/:comicId/chapter/:chapterId",
  FITLER_SEARCH_PAGE: "/comics",
};
