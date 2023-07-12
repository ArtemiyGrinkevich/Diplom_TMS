
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../../models/models";

interface PostState {
  loading: boolean;
  error: string;
  count:any;
  posts: IPost[];
}

interface PostPayload {
    posts : IPost[];
    count : any
}

const initialState: PostState = {
  loading: false,
  count:0,
  error: "",
  posts: [],
};

const postSlice = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {
    fetching: (state) => {
      state.loading = true;
    },
    fetchSuccess: (state, action: PayloadAction<PostPayload>) => {
      state.loading = false;
      state.posts = action.payload.posts;
      state.count = action.payload.count;
      state.error = ''
    },
    fetchError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetching, fetchSuccess, fetchError } = postSlice.actions;
export default postSlice.reducer;