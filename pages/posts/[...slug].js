import PostContent from "@/components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "@/lib/posts-util";

const PostDetails = (props) => {
  return <PostContent post={props.post} />;
};

export const getStaticProps = (context) => {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug);
  return { props: { post: postData }, revalidate: 600 };
};

export const getStaticPaths = () => {
  const postFiles = getPostsFiles();
  const slugs = postFiles.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    // paths: slugs.map((slug) => ({ params: { slug: slug } })),
    paths: [],
    fallback: "blocking",
  };
};

export default PostDetails;
