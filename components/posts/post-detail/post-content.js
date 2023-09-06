import ReactMarkdown from "react-markdown";
import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import Image from "next/image";

const PostContent = (props) => {
  const { post } = props;
  console.log(post);
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderes = {
    // img(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${post.image}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image
              src={`${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      {/* {DUMMY_POSTS.content} */}
      <ReactMarkdown components={customRenderes}>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
