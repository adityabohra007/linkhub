import { configureStore } from "@reduxjs/toolkit";
// import headerReducer, { HeaderSlice } from './features/headerSlice'
// import cartDrawerReducer, { cartDrawer } from './features/cartdrawerSlice';
// import SideBarDrawerReducer, { SideBarDrawer } from './features/SidebarsSlice';
import { authApi } from "./api/authApi";
// import { graphInstaApi } from './api/insta';
// import { productApi } from './api/product';
// import { shoppingCart } from './api/shopping-cart';
import { auth } from "./features/auth";
import { linkApi } from "./api/linkApi";
import { linkHanger } from "./api/linkHanger";
// import authReducer from '@/features/authSlice'
// import cartReducer, { cart } from "@/features/cartSlice"
// import loaderReducer from '@/features/loaderSlice'
// import { OrderTracking } from './api/OrderTracking';
// import { pageData } from './api/pages';
export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: auth.reducer,
    [linkApi.reducerPath]: linkApi.reducer,
    [linkHanger.reducerPath]: linkHanger.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      linkApi.middleware,
      linkHanger.middleware
    ),
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
