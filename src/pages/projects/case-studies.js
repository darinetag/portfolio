import Layout from "@/components/Layout";

export default function CaseProjectPage() {
  return (
    <Layout>
      <div className="min-h-screen text-center px-6 relative overflow-hidden" style={{ fontFamily: 'Montreal' }}>
        <h1 className="text-5xl font-bold text-[#FBC408] mb-4" style={{ fontFamily: 'Science' }}>Case Studies</h1>
        <h2 className="text-4xl mb-4 ml-4">ChatGPT Featured Chats</h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-8">
          As someone who carefully prompts ChatGPT for different tasks, I often revisit the same 3–4 conversations.
          But finding them? Isn't easy. I would still need to scroll through all the chats.
          So I asked myself: What if we could “feature” chats the same way we pin messages or star notes?
        </p>

        {/* GIF background */}
        <div className="relative w-full h-[250px] mt-30">
          <img
            src="/piet.gif"
            alt="gif"
            className="absolute top-22 left-0 w-full h-full object-cover z-0"
          />

          {/* Foreground image */}
          <div className="relative z-10 flex justify-center items-center h-full">
            <img
              src="/projects/chagpt-featured.png"
              alt="screenshot"
              className="w-1/2 object-contain"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
