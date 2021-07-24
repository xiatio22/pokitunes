const initState = {
  posts: [
    {
      id: "1",
      title: "Squirtle laid an egg",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut ultrices sem. Phasellus hendrerit, orci eu facilisis malesuada, turpis metus maximus sapien, vitae tristique leo enim sit amet leo.",
    },
    {
      id: "2",
      title: "Charmander laid an egg",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut ultrices sem. Phasellus hendrerit, orci eu facilisis malesuada, turpis metus maximus sapien, vitae tristique leo enim sit amet leo.",
    },
    {
      id: "3",
      title: "a Helix Fossil was found",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut ultrices sem. Phasellus hendrerit, orci eu facilisis malesuada, turpis metus maximus sapien, vitae tristique leo enim sit amet leo.",
    },
  ],
};

const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    let newPost = state.posts.filter((post) => action.id !== post.id);
    return {
      ...state,
      posts: newPost,
    };
  }
  return state;
};

export default rootReducer;
