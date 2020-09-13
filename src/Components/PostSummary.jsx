import React, { Component, Fragment } from "react";
import {Button} from "semantic-ui-react";
import {Link} from "react-router-dom";

class PostSummary extends Component {
  constructor(props) {
    super(props);


  }



  render() {
    const { post } = this.props;
    console.log(post.title.rendered); 
    return (
      <Fragment>
        <div>
          <h1 dangerouslySetInnerHTML = {{__html: post.title.rendered}} />
          <Button as={Link} to={`/post/${post.id}`}> Veiw Post</Button>

        </div>
      </Fragment>
    );
  }
}

export default PostSummary;
