"use client";
import { useState } from "react";

type SignupFormProps = {
  onSuccess?: () => void;
};

export default function SignupForm({ onSuccess }: SignupFormProps) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // ここでAPIにusernameも送信する
    // await fetch(...);
    if (onSuccess) onSuccess(); // 登録成功時に呼び出し
  };

  return (
    <div
      style={{
        background: "#313338",
        borderRadius: "8px",
        padding: "32px 24px",
        maxWidth: "350px",
        margin: "40px auto",
        boxShadow: "0 2px 16px rgba(0,0,0,0.3)",
      }}
    >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ユーザー名"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "16px",
            borderRadius: "5px",
            border: "none",
            background: "#232428",
            color: "#fff",
            fontSize: "16px",
            outline: "none",
          }}
        />
        <input
          type="email"
          placeholder="メールアドレス"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "16px",
            borderRadius: "5px",
            border: "none",
            background: "#232428",
            color: "#fff",
            fontSize: "16px",
            outline: "none",
          }}
        />
        <input
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "5px",
            border: "none",
            background: "#232428",
            color: "#fff",
            fontSize: "16px",
            outline: "none",
          }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "5px",
            border: "none",
            background: "#5865F2",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "16px",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
        >
          登録
        </button>
      </form>
    </div>
  );
}