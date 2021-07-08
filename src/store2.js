import { configureStore, getDefaultMiddleware ,createAction,createReducer} from "@reduxjs/toolkit";

// Creates an action creator
const loginSuccess = createAction("LOGIN_SUCCESS");
const fetchLinksRequest = createAction("FETCH_LINKS_REQUEST");
const fetchLinksSuccess = createAction("FETCH_LINKS_SUCCESS");
const loginFailed = createAction("LOGIN_FAILED");


const middleware = [
  ...getDefaultMiddleware(),
  /*YOUR CUSTOM MIDDLEWARES HERE*/
];

// AUTH STATE
const authState = {
  token: "",
  error: "",
};

const authReducer = createReducer(authState, {
    [loginSuccess]: (state, action) => {
      state.token = action.payload;
    },
    [loginFailed]: (state, action) => {
      state.error = action.payload;
    },
  });

// function authReducer(state = authState, action) {
//   // DO STUFF
//   return state;
// }

const store2 = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware,
});

export default store2;