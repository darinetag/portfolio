// pages/projects/chatgpt-featured.js
import ProjectExample from "@/components/ProjectExample";

export default function ChatgptFeatured() {
  const examples = [
    {
      heading: "Featured Chats",
      description: "As someone who carefully prompts ChatGPT for different tasks, I often revisit the same 3–4 conversations. But finding them? isn't easy, I would still need to scroll through all the chats. So I asked myself: What if we could “feature” chats the same way we pin messages or star notes?",
      image: "/projects/chagpt-featured.png",
    },
    {
      heading: "Improved Pin System",
      description: "Introduced ability to pin and reorder chats.",
      image: "/projects/chatgpt-example2.png",
    },
    {
      heading: "Final Visual Style",
      description: "Final concept and layout tested with users.",
      image: "/projects/chatgpt-example3.png",
    },
  ];

  return (
    <ProjectExample
      title="Case Studies"
      subtitle="ChatGPT"
      examples={examples}
    />
  );
}
