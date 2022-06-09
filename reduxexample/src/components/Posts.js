import { Component } from 'react';

// Q: why did he use a class? why did he move the export default to the bottom?
class Posts extends Component { //Q: why is my component extending 'component' 
  constructor(props) { //Q: what is this
    super(props);   //Q: wth is this
    this.state = {  //Q: how does 'this' work
      posts: [] //creating an array that is empty by default Q:Why is this necessary?
    }
  }

  //componentWillMount is a lifecyle method Q: what is a life cycle method
  componentWillMount() { //runs when the component mounts Q: what does it mean to mount
    console.log(this)
    fetch('https://jsonplaceholder.typicode.com/posts') //Fetch is a network process where a request is made to a remote server to retrieve or submit a resource. This returns a promise Q:What is a promise? How would this be done w axios?
      .then(rzdghs => rzdghs.json()) //map result to json Q:how does .json work? how does it know to map the result, since my function name is arbitrary
      .then(daasdf => this.setState({ posts: daasdf })); //need to figure out these arrows Q: how does 'this' work
  }


  render() {
    const postItems = this.state.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
          <h1>Posts</h1> 
          { postItems }
      </div>
    )
  }
}


export default Posts;

//video: https://www.youtube.com/watch?v=93p3LxR9xfM&t