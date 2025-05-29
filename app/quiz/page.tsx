import Link from "next/link";

export default function QuizPage() {
  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">快速考试</h1>
      <p className="mt-4">
        快速检测你对消防体能知识的掌握情况。题型为单选题，提交后立即反馈分数。
      </p>

      <Link href="/" className="text-blue-600 underline mt-8 block">
        ← 返回首页
      </Link>
    </main>
  );
}
