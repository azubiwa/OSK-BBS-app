"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import styles from "../styles/Home.module.css";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3002/api/v1/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
        }),
      });

      if (!res.ok) throw new Error("投稿に失敗しました");
      alert("投稿成功！");
    } catch (err) {
      alert("投稿に失敗しました。");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ポスト新規登録</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>タイトル</label>
        <input
          type="text"
          className={styles.input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
        <label className={styles.label}>本文</label>
        <textarea
          className={styles.textarea}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setContent(e.target.value)
          }
        />
        <button type="submit" className={styles.button}>
          投稿
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
