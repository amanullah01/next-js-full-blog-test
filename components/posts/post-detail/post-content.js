import classes from "./post-content.module.css";
import PostHeader from "./post-header";

const DUMMY_POSTS = {
  slug: "getting-started-with-next-js-1",
  title: "Getting Started With Next Js",
  date: "2023-06-29",
  image: "getting-started-with-next-js.png",
  content: "# This is a first post",
};

const PostContent = (props) => {
  const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POSTS.title} image={imagePath} />
      {DUMMY_POSTS.content}
    </article>
  );
};

export default PostContent;
