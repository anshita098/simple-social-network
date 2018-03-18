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
        2: {
          id: 2,
          src: 'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201709101434',
          likes: 0,
        },
        3: {
          id: 3,
          src: 'data:image/png;base64,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',
          likes: 0,
        }
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
          {Object.values(this.state.posts).map(({ likes, title, src, id }) => (
            <li key={id}>
              {title}
              {likes}
              <img src={src} />
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
