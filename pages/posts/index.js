import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/posts-util";
import Head from "next/head";
import { Fragment } from "react";

const AllPostsPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>All Blog Posts</title>
        <meta
          name="description"
          content="All programming related blog posts are here"
        />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
};

export default AllPostsPage;

export const getStaticProps = () => {
  const allPosts = getAllPosts();
  return { props: { posts: allPosts } };
};
