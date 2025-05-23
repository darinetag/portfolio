import Layout from "@/components/Layout";

export default function CaseProjectPage() {
  return (
    <Layout>
      <div className="min-h-screen text-center px-6 " style={{ fontFamily: 'Montreal' }}>
        <h1 className="text-5xl font-bold text-[#FBC408] mb-4" style={{ fontFamily: 'Science' }}>Case Studies</h1>
        <h2 className="text-4xl mb-4 ml-4 ">Chatgpt Featured Chats</h2>
        <p className="text-gray-700 max-w-xl">
As someone who carefully prompts ChatGPT for different tasks, I often revisit the same 3–4 conversations. But finding them? isn't easy, I would still need to scroll through all the chats. So I asked myself: What if we could “feature” chats the same way we pin messages or star notes? Introducing “Featured Chats” .        </p>
      </div>
    </Layout>
  );
}
