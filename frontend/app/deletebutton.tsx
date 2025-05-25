"use client";

import styles from "./styles/Home.module.css";
import { useTransition } from "react";

type Props = {
  postId: string;
};

export default function DeleteButton({ postId }: Props) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:3002/api/v1/posts/${postId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("削除に失敗しました");
      }

      alert("削除に成功しました！");
      location.reload(); // ← 再読み込みで反映
    } catch (err) {
      alert("削除に失敗しました。");
    }
  };

  return (
    <button
      onClick={() => startTransition(handleDelete)}
      disabled={isPending}
      className={styles.deleteButton}
    >
      {isPending ? "削除中..." : "Delete"}
    </button>
  );
}
