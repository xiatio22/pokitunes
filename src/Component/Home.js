import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pokeball from "../pokeball.png";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    console.log(this.props);
    const { posts } = this.props;
    const postItems = posts.length ? (
      posts.map((post) => {
        return (
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt="pokemon" />
            <div className="card-content">
              <Link to={"/" + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No Posts to display</div>
    );

    return (
      <div>
        <div className="container home">
          <h4 className="center">Home</h4>
          {postItems}
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStatetoProps)(Home);
