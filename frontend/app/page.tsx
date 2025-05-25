import Link from "next/link";
import styles from "./styles/Home.module.css";
import DeleteButton from "./deletebutton";

type Post = {
  id: string;
  title: string;
  content: string;
};

export default async function Home() {
  const res = await fetch("http://backend:3000/api/v1/posts");
  const posts: Post[] = await res.json();

  const handleDelete = async (postId: string) => {
    try {
      const response = await fetch(
        `http://backend:3000/api/v1/posts/${postId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete");
      }

      alert("削除に成功しました！");
      location.reload();
    } catch (error) {
      alert("削除に失敗しました。");
    }
  };

  return (
    <div className={styles.homeContainer}>
      <h2 className={styles.title}>OSK-BBS-APP</h2>
      <Link href="/create-post" className={styles.createButton}>
        Create new Post
      </Link>
      <div>
        {posts.slice(0, 5).map((post) => (
          <div key={post.id} className={styles.postCard}>
            <Link href={`/posts/${post.id}`} className={styles.postCardBox}>
              <h2 className={styles.postCardTitle}>{post.title}</h2>
            </Link>
            <p className={styles.postCardContent}>{post.content}</p>
            <div className={styles.tagContainer}>
              {post.tags &&
                post.tags.map((tag, idx) => (
                  <span key={idx} className={styles.tag}>
                    {tag}
                  </span>
                ))}
            </div>

            <Link href={`/edit-post/${post.id}`}>
              <button className={styles.editButton}>Edit</button>
            </Link>

            <DeleteButton postId={post.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
