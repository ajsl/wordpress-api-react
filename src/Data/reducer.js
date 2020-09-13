const setPosts = (state, {posts, id}) => {
    return {
        ...state,
        posts: posts,
    };
};

const reducer = (state, action) => {
    // switch (action.type) {
    //     case "setPosts": return setPosts(state, action);
    // }

    return setPosts(state, action)
}

export default reducer; 