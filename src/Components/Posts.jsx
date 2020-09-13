import React, { Component, Fragment } from 'react'

import PostSummary from "./PostSummary"; 

class Posts extends Component {
    componentDidMount() {
        this.props.onLoad();
    }


    render () {
        const { posts } = this.props
        if(posts){

            let createMarkup = () => {
                return {
                    __html: (posts[0].content.rendered)
                }
            }
            
            return(
                // <Fragment>
                //     <div dangerouslySetInnerHTML={ createMarkup() }/>
                // </Fragment>

                <Fragment>
                    { posts.map(postSummary => (
                        <PostSummary key={ postSummary.id } post = {postSummary}/> 
                    ))}
                </Fragment>
            )
        }else{
            return(
                <Fragment>
                    <h1>
                        Loading....
                    </h1>
                </Fragment>
            )
        }

    }
}

export default Posts;