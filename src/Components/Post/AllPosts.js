import { usePostsContext } from "../../Contexts/PostsContext";
import Post from "./Post";

export default function AllPosts(){
    const {posts} = usePostsContext();

    if (!posts) {
        return <span style={{ color: "white" }}>Loading...</span>;
      }
      if (posts?.length === 0) {
        return <span style={{ color: "white" }}>There is no post yet.</span>;
      }
      return posts.map((post, index) => <Post key={index} post={post} />);
}