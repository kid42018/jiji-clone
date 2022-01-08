import { createSlice } from '@reduxjs/toolkit'
const userSlice = createSlice({
  name: 'counter',
  initialState: {
      user:false
  },
  reducers: {
      setUser: (state,action) => {
          state.user = action.payload;
      },
  }
})

export const {setUser} = userSlice.actions
export default userSlice.reducer;