
import { AppDispatch } from "../index";
import { fetchError, fetchSuccess, fetching } from "../slices/postSlice";
import axios from "axios";
import { IPost } from "../../models/models";

export const fetchPosts = (page=1, count=10) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(fetching());
      const response = await axios.get<IPost[]>(
        "https://jsonplaceholder.typicode.com/posts",{params:{page,count}}
      );
      dispatch(fetchSuccess({
        posts:response.data,
        count:response.data
      }));
      
    } catch (error: any) {
      dispatch(fetchError(error.message));
    }
  };
};