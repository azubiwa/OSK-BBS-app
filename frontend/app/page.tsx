import Link from "next/link";
import styles from "./styles/Home.module.css";

type Post = {
  id: number;
  title: string;
  content: string;
};

export default async function Home() {
  const res = await fetch("http://backend:3000/api/v1/posts");
  const posts: Post[] = await res.json();

  return (
    <div className={styles.homeContainer}>
      <h2>OSK-BBS-APP</h2>
      <Link href="/create-post" className={styles.createButton}>
        Create new Post
      </Link>
      <div>
        {posts.slice(0, 5).map((post) => (
          <div key={post.id} className={styles.postCard}>
            <Link href={`/posts/${post.id}`} className={styles.postCardBox}>
              <h2>{post.title}</h2>
            </Link>
            <p>{post.content}</p>
            <button className={styles.editButton}>Edit</button>
            <button className={styles.deleteButton}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
