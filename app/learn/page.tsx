import Link from "next/link";

export default function LearnPage() {
  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">理论学习</h1>
      <p className="mt-4">
        包括消防员所需的基础解剖、生理、能量系统、训练原理、恢复与营养等知识模块。
      </p>

      <Link href="/" className="text-blue-600 underline mt-8 block">
        ← 返回首页
      </Link>
    </main>
  );
}
