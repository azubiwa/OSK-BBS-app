"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import "./page.css"; // 同じディレクトリ内のCSSを読み込む
import TagSelector from "../tag-selector";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

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
          tags: selectedTags,
        }),
      });

      if (!res.ok) throw new Error("投稿に失敗しました");
      alert("投稿成功！");
    } catch (err) {
      alert("投稿に失敗しました。");
    }
  };

  return (
    <div className="container">
      <h1 className="title">ポスト新規登録</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">タイトル</label>
        <input
          type="text"
          className="input"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
        <label className="label">本文</label>
        <textarea
          className="textarea"
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setContent(e.target.value)
          }
        />
        <TagSelector
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />
        <button type="submit" className="button">
          投稿
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
