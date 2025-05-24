"use client";
import { useState } from "react";

export default function SigninFornm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      // 認証APIのエンドポイント例
      const res = await fetch("http://localhost:3002/api/v1/sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session: { email, password } }),
      });

      if (res.ok) {
        // 認証成功時に遷移
        window.location.href = "http://localhost:3001";
      } else {
        // 認証失敗時
        const data = await res.json();
        setError(data.message || "ログインに失敗しました");
      }
    } catch (err) {
      setError("通信エラーが発生しました");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="signin-form">
      <input
        type="email"
        placeholder="メールアドレス"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        className="signin-input"
      />
      <input
        type="password"
        placeholder="パスワード"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        className="signin-input"
      />
      {error && (
        <div style={{ color: "#fa777c", marginBottom: "8px", textAlign: "center" }}>
          {error}
        </div>
      )}
      <button type="submit" className="signin-button">
        ログイン
      </button>
    </form>
  );
}