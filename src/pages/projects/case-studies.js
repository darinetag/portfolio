// pages/projects/chatgpt-featured.js
import ProjectExample from "@/components/ProjectExample";

export default function ChatgptFeatured() {
  const examples = [
    {
      heading:  "Search Functionality",
            description: "On Nov 14, I suggested adding a search feature to ChatGPT to find past conversations more easily. By Dec 4, it was live. No reply from the team, but seeing the idea implemented felt like a small UX win — proof that I’m thinking like a designer spotting the gap before it was filled",
      image: "/projects/search.png",

    },
    {
      heading: "Featured Chats",
      description: "As someone who carefully prompts ChatGPT for different tasks, I often revisit the same 3–4 conversations. But finding them? isn't easy, I would still need to scroll through all the chats. So I asked myself: What if we could “feature” chats the same way we pin messages or star notes?",
            image: "/projects/chagpt-featured.png",

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
