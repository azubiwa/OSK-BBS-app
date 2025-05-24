"use client";
import { useState } from "react";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    alert(`登録: ${email}`);
  };

  return (
    <div>
      <h1>アカウント登録</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="メールアドレス"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">登録</button>
      </form>
    </div>
  );
}