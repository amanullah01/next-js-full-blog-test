import classes from "./post-grid.module.css";
import PostItem from "./post-item";

const PostGrid = (props) => {
  const { posts } = props;
  return (
    <ul className={classes.grid}>
      {posts.map((item) => (
        <PostItem key={item.slug} post={item} />
      ))}
    </ul>
  );
};

export default PostGrid;
