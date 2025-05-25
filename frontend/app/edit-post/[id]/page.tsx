"use client";

import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { useParams, useRouter } from "next/navigation";
import styles from "../../styles/Home.module.css";

const EditPost = () => {
  const params = useParams();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(
        `http://localhost:3002/api/v1/posts/${params.id}`
      );
      const post = await res.json();
      setTitle(post.title);
      setContent(post.content);
    };

    fetchPost();
  }, [params.id]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `http://localhost:3002/api/v1/posts/${params.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, content }),
        }
      );

      if (!res.ok) throw new Error("編集に失敗しました");
      alert("編集成功！");
      router.push("/"); // 投稿後にトップへ遷移
    } catch (err) {
      alert("編集に失敗しました。");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ポスト編集</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>タイトル</label>
        <input
          type="text"
          className={styles.input}
          value={title}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          value={title}
        />
        <label className={styles.label}>本文</label>
        <textarea
          className={styles.textarea}
          value={content}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setContent(e.target.value)
          }
          value={content}
        />
        <button type="submit" className={styles.button}>
          編集を保存
        </button>
      </form>
    </div>
  );
};

export default EditPost;
