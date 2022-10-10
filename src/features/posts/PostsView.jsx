import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "./postsSlice";

const PostsView = () => {
  const { posts, isLoading, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);
  return (
    <div>
      <h2>Get All Posts</h2>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error.message}</h3>}
      <section>
        {posts &&
          posts.map((post) => {
            return (
              <article key={post.id}>
                <small>{post.id}</small>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default PostsView;
