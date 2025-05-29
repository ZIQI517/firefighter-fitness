import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#fff7ec] p-8">
      <h1 className="text-3xl font-bold mb-10 text-red-600 text-center">
        消防体能知识与实践
      </h1>

      <div className="space-y-4 w-full max-w-sm">
        <Link
          href="/overview"
          className="block text-center bg-red-500 text-white py-3 rounded-xl hover:bg-red-600 transition"
        >
          1️⃣ 课程概述
        </Link>
        <Link
          href="/learn"
          className="block text-center bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition"
        >
          2️⃣ 理论学习
        </Link>
        <Link
          href="/videos"
          className="block text-center bg-yellow-500 text-white py-3 rounded-xl hover:bg-yellow-600 transition"
        >
          3️⃣ 视频学习
        </Link>
        <Link
          href="/quiz"
          className="block text-center bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition"
        >
          4️⃣ 快速考试
        </Link>
      </div>
    </main>
  );
}
