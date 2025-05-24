import SigninFornm from "@/components/SigninFornm";

export default function SigninPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow space-y-6 w-full max-w-md">
        <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 mb-6">
          ログイン
        </h2>
        <SigninFornm />
      </div>
    </div>
  );
}