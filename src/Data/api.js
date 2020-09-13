import axios from "../axios";
import { setPosts } from "./state";

export const getPosts = () => (dispatch) => {
  axios.get("/posts").then((data) => {
    console.log(data.data);
    const posts = data.data;

    dispatch(setPosts(posts));
  });
};
