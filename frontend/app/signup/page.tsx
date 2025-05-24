"use client";
import SignupForm from "@/components/SignupForm";
import "./page.css";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  // 登録成功時の遷移処理
  const handleSignupSuccess = () => {
    router.push("/signin");
  };

  return (
    <div className="signup-bg">
      {/* 戻るボタン */}
      <button
        className="back-btn"
        onClick={() => router.back()}
        aria-label="戻る"
        style={{
          position: "absolute",
          left: 24,
          top: 24,
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="12" fill="#f3f4f6" />
          <path
            d="M13.5 8l-4 4 4 4"
            stroke="#555"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="signup-card" style={{ marginTop: 60 }}>
        <h2
          className="signup-title"
          style={{
            textAlign: "center",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1.6rem",
            marginBottom: "8px",
          }}
        >
          アカウント登録
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#b5bac1",
            marginBottom: "12px",
            fontSize: "1rem",
          }}
        >
          OSK-BBSへようこそ！
        </p>
        <SignupForm onSuccess={handleSignupSuccess} />
      </div>
    </div>
  );
}