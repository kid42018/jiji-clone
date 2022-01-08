import {configureStore } from "@reduxjs/toolkit";
import appSettingReducer from "./reducers.js/app-setting.reducer";
import catagorieReducer from "./reducers.js/catagorie.reducer";
import userReducer from "./reducers.js/user.reducer";
export default configureStore({
    reducer: {
      catagorie:catagorieReducer,
      appSetting:appSettingReducer,
      user:userReducer
    }
  })