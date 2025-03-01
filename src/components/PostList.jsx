import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListData } from "../store/post-list";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  const [fetching, setFetching] = useState(false);

  const controller = new AbortController();
  const signal = controller.signal;

  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });

    return () => {
      // controller.abort();
    };
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {postList.length === 0 && !fetching && <WelcomeMessage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
