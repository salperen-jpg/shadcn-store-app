import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./feature/theme/themeSlice";
import cartReducer from "./feature/cart/cartSlice";
import userReducer from "./feature/user/userSlice";
// ...

export const store = configureStore({
  reducer: {
    themeState: themeReducer,
    cartState: cartReducer,
    userState: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ReduxStore = {
  getState: () => RootState;
  dispatch: AppDispatch;
};
