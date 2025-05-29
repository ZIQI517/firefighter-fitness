import Link from "next/link";

export default function VideosPage() {
  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">视频学习</h1>
      <p className="mt-4">
        本页展示教学视频内容，包含动作标准讲解、力量训练演示、测试方法说明等实操资料。
      </p>

      <Link href="/" className="text-blue-600 underline mt-8 block">
        ← 返回首页
      </Link>
    </main>
  );
}
