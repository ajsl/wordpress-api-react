import React, { Component, Fragment } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: this.props.posts,
    };

    //       const post = useSelector((state) =>
    //   state.posts.find((post) => post.id === id)
    // );
  }

  render() {
    let createMarkup = (content) => {
      return {
        __html: content,
      };
    };


    
    if (this.state.posts) {
      let id = this.props.match.params.id;
      const posts = this.state.posts;
      let singlePost = posts.filter(post => post.id === +id);

      if (!singlePost) {
        return <h1>Post not found</h1>;
      }

      return (
        <Fragment>
          <section>
            <div
              dangerouslySetInnerHTML={createMarkup(
                singlePost[0].content.rendered
              )}
            />
            <h1>post id: {id}</h1>
          </section>
        </Fragment>
      );
      //   return <Redirect to="/" />;
    } else {
      console.log("no post");
      return (
      <h1>Post not found</h1>
      )
    }
  }
}

export default Post;
