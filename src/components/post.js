import React, {Component} from 'react';

class Post extends Component {
    render() {
        let{item, oneSelectPost, isBtn} = this.props
        return (
            <div>
                {item.title} -- {item.body}


                {!isBtn && <button onClick={() => oneSelectPost(item.id)}>klick</button>}

            </div>
        );
    }
}

export default Post;