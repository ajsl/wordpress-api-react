import Post from "../Components/Post";

import { connect } from "react-redux";

const mapStateToProps = state => {

    return { posts: state.posts }
};

export default connect(mapStateToProps)(Post);
