import SigninFornm from "@/components/SigninFornm";
import "./page.css";

export default function SigninPage() {
  return (
    <div className="signin-bg">
      <div className="signin-card">
        <h2 className="signin-title">ログイン</h2>
        <SigninFornm />
      </div>
    </div>
  );
}