import Website from "@/components/Website";

const examples = [
  {
    id: "landingpage",
    image: "/website/landingpagebm1.png", // Make sure this path matches your public folder structure
  },
  {
    id: "navbar",
    image: "/website/navbarbm2.png",
  },
 {
    id: "about us",
    image: "/website/aboutusbm2.png",
  },
 {
    id: "careers",
    image: "/website/careers22.png",
  },
 {
    id: "blogs",
    image: "/website/blogs22.png",
  },
 
];

export default function ProjectExamplePage() {
  return (
    <Website
      title="Website"
      subtitle="Landing Page"
      description="Designed a full website from start to finish, and coded the visual part"
      examples={examples}
    />
  );
}
