import Link from "next/link";

export default function OverviewPage() {
  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">课程概述</h1>
      <p className="mt-4">
        本课程专为职业消防员设计，涵盖体能评估、训练理论与实践方法，帮助参训者全面提升体能管理能力。
      </p>

      <Link href="/" className="text-blue-600 underline mt-8 block">
        ← 返回首页
      </Link>
    </main>
  );
}
