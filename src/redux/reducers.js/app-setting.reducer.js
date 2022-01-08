import { createSlice } from '@reduxjs/toolkit'
const appSettingSlice = createSlice({
  name: 'counter',
  initialState: {
   location:0,
   currentAuthPage:-1
  },
  reducers: {
    getLocation: (state,action) => {
      state.location = action.payload.payload;
      },
    setCurrentAuthPage: (state,action) => {
       state.currentAuthPage = action.payload;
    }
  }
})

export const { getLocation,setCurrentAuthPage} = appSettingSlice.actions
export default appSettingSlice.reducer;