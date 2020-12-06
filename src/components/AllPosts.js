import React, {Component} from 'react';
import Post from './post'

class AllPosts extends Component {
    state ={posts : []}
    oneSelectPost = (id) => {
    let {posts} =this.state
    let find = posts.find(value => value.id === id)
    this.setState({chosenOnePost: find})

    }

    render() {
        let {posts, chosenOnePost} = this.state
        return (
            <div>
                {
                    posts.map((post) => <Post item={post} oneSelectPost={this.oneSelectPost} key={post.id} />)
                }
                {
                    chosenOnePost && <h2><Post item={chosenOnePost} isBtn={true}/></h2>
                }
            </div>
        );
    }
    componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(value => value.json())
			.then(posts => {
				this.setState({posts});
			});
	}
}

export default AllPosts;