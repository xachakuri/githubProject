import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const LS_FAV_KEY = "rfk";

interface Repository {
  url: string;
  name: string;
  id: number;
}

interface GithubState {
  favourites: Repository[];
}

const initialState: GithubState = {
  favourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? "[]"),
};

export const githubSlice = createSlice({
  name: "githubFavourites",
  initialState,
  reducers: {
    addFavourite(state, action: PayloadAction<Repository>) {
      state.favourites.push(action.payload);
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites));
    },
    removeFavourite(state, action: PayloadAction<number>) {
      state.favourites = state.favourites.filter(
        (f) => f.id !== action.payload
      );
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites));
    },
  },
});

export const githubActions = githubSlice.actions;
export const githubReducer = githubSlice.reducer;
