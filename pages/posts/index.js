import AllPosts from "@/components/posts/all-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-next-js-1",
    title: "Getting Started With Next Js",
    date: "2023-06-29",
    image: "getting-started-with-next-js.png",
    excerpt: "NextJs is the React framework for production.",
  },
  {
    slug: "getting-started-with-next-js-2",
    title: "Getting Started With Next Js2",
    date: "2023-06-29",
    image: "getting-started-with-next-js.png",
    excerpt: "NextJs is the React framework for production.",
  },
  {
    slug: "getting-started-with-next-js-3",
    title: "Getting Started With Next Js",
    date: "2023-06-29",
    image: "getting-started-with-next-js.png",
    excerpt: "NextJs is the React framework for production.",
  },
  {
    slug: "getting-started-with-next-js-4",
    title: "Getting Started With Next Js",
    date: "2023-06-29",
    image: "getting-started-with-next-js.png",
    excerpt: "NextJs is the React framework for production.",
  },
];

const AllPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
