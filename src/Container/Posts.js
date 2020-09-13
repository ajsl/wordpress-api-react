import { getPosts } from "../Data/api";
import Posts from "../Components/Posts";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const matchDispatchToProps = (dispatch) => {
  console.log("getting posts");
  return {
    onLoad: () => dispatch(getPosts()),
  };
};

export default connect(mapStateToProps, matchDispatchToProps)(Posts);
