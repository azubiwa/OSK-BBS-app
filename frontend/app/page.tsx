import Head from "next/head";
import Link from "next/link";
import styles from "./styles/Post.module.css";

type Props = {
  posts: Post[];
};

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <>
      <Head>
        <title>OSK-BBS-app</title>
        <meta name="description" content="掲示板アプリです" />
      </Head>

      <div className={styles.homeContainer}>
        <h2>OSK-BBS-APP</h2>
        <Link href="/create-post" className={styles.createButton}>
          Create new Post
        </Link>
        <div>
          {posts.map((post: Post) => (
            <div key={post.id} className={styles.postCard}>
              <Link href={`posts/${post.id}`} className={styles.postCardBox}>
                <h2>{post.title}</h2>
              </Link>
              <p>{post.content}</p>
              <button className={styles.editButton}>Edit</button>
              <button className={styles.deleteButton}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
