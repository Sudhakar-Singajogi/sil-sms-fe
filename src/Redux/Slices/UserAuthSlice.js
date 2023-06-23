import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const UserAuth = createSlice({
  name: "UserAuth",
  initialState: {
    school: {},
    user: {
      pending: true,
      data: {},
      error: "",
    },
    tokens: {
      accessToken: "",
      refreshToken: "",
    },
    accessibleFeatures: [],
  },
  reducers: {
    setLogout: (state, action) => {
        console.log('hey log out from here');
      state.school = {};
      state.user = {
        pending: true,
        data: {},
        error: "",
      };
      state.tokens = {
        accessToken: "",
        refreshToken: "",
      };
      state.accessibleFeatures =  [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.user = [];
        state.school = {};
        state.tokens = {
          accessToken: "",
          refreshToken: "",
        };
        state.accessibleFeatures = [];
        state.user.error = "";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        const school = {
          schoolId: action.payload.user.schoolId,
          ...action.payload.user.school,
        };
        state.school = school;
        state.tokens = {
          accessToken: action.payload.accessToken,
          refreshToken: action.payload.refreshToken,
        };
        state.accessibleFeatures = action.payload.accessibleFeatures;
        state.user.error = "";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.user = [];
        state.tokens = {
          accessToken: "",
          refreshToken: "",
        };
        state.accessibleFeatures = [];
        state.user.error = action.payload;
      });
  },
});

export default UserAuth.reducer;

export const { setLogout } = UserAuth.actions;

export const loginUser = createAsyncThunk("user/login", async (data) => {
  const url = "http://localhost:8080/api/users/login";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const responseData = await response.json(); // Parse the response body as JSON
  //   console.log("response is:", responseData);
  return responseData;
});


/*
export const setLogout = createAsyncThunk('user/logout', async(state, action) => {
return {
    school: {},
    user: {
      pending: true,
      data: {},
      error: "",
    },
    tokens: {
      accessToken: "",
      refreshToken: "",
    },
    accessibleFeatures: [],
  }
})
*/
