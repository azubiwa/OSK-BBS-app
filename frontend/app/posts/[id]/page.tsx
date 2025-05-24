import styles from "../../styles/Post.module.css";

type Post = {
  id: number;
  title: string;
  body: string;
};

type Props = {
  params: {
    id: string;
  };
};

export default async function PostPage({ params }: Props) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post: Post = await res.json();

  return (
    <div className={styles.container}>
      <div className={styles.title}>{post.title}</div>
      <div className={styles.date}>{post.created_at}</div>
      <p className={styles.content}>{post.content}</p>
    </div>
  );
}

export async function generateStaticParams() {
  const res = await fetch("https://localhost:3001/api/v1/posts");
  const posts: Post[] = await res.json();

  return posts.slice(0, 5).map((post) => ({
    id: post.id.toString(),
  }));
}
