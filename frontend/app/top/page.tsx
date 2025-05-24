"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow space-y-6 w-full max-w-xs">
        <h1 className="text-2xl font-bold text-center mb-6">ようこそ！</h1>
        <button
          className="w-full py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-500 mb-4"
          onClick={() => router.push("/signup")}
        >
          アカウント登録
        </button>
        <button
          className="w-full py-2 px-4 bg-gray-600 text-white rounded hover:bg-gray-500"
          onClick={() => router.push("/signin")}
        >
          ログイン
        </button>
      </div>
    </div>
  );
}