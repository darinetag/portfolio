// pages/projects/chatgpt-featured.js
import ProjectExample from "@/components/ProjectExample";

export default function ChatgptFeatured() {
  const examples = [
    {
      heading: "Featured Chats v1",
      description: "Early sketches and idea of featuring chats by starring.",
      image: "/projects/chagpt-feature.png",
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
