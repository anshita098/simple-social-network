import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',

      posts: {
        1: {
          id: 1,
          title: 'this is first post',
          likes: 0,
        },
      },
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.updateLike = this.updateLike.bind(this);
  }

  onChange(e) {
    const value = e.target.value;
    this.setState({
      title: value,
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const id = Date.now();
    this.setState({
      title: '',
      posts: {
        ...this.state.posts,
        [id]: {
          id,
          title: this.state.title,
          likes: 0,
        }
      },
    })
  }

  updateLike(id) {
    const post = this.state.posts[id];
    const like = post.likes;
    this.setState({
      posts: {
        ...this.state.posts,
        [id]: {
          id,
          ...post,
          likes: like + 1,
        }
      }
    })
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <ul>
          {Object.values(this.state.posts).map(({ likes, title, id }) => (
            <li key={id}>
              {title}
              {likes}
              <button
                onClick={() => this.updateLike(id)}
              >like</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
