import Layout from "@/components/Layout";

export default function BlogsProjectPage() {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl font-bold text-[#BC0700] mb-4">Blogs</h1>
        <p className="text-gray-700 max-w-xl">
          Here's a collection of websites I've designed, developed, or reimagined with a focus on delightful user experience and strong branding.
        </p>
      </div>
    </Layout>
  );
}
