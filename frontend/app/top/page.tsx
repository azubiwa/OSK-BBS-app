"use client";
import { useRouter } from "next/navigation";
import "./page.css";

export default function Home() {
  const router = useRouter();

  return (
    <div className="container">
      <h1 className="title">ようこそ！</h1>
      <button
        className="btn btn-signup"
        onClick={() => router.push("/signup")}
      >
        アカウント登録
      </button>
      <button
        className="btn btn-signin"
        onClick={() => router.push("/signin")}
      >
        ログイン
      </button>
    </div>
  );
}