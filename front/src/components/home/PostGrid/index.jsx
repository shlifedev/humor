import { PostCard } from "../PostCard";
import scss from "./index.module.scss";
export function PostGrid({ posts }) {
  return (
    <div className={scss.grid} aria-label="포스트">
      {posts.map((x) => {
        return <PostCard key={x.id} post={x}></PostCard>;
      })}
    </div>
  );
}
