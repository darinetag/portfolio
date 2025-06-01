import Website from "@/components/Website";

const examples = [
  {
    id: "landingpage",
    image: "/website/landingpagebm1.png", 
    images: "/website/stickyone.png",
    imagess: "/website/landingpages.png"
  },
  {
    id: "navbar",
    image: "/website/navbarbm2.png",
    images: "/website/sticky2.png",
     imagess: "/website/navbars.png"
  },
 {
    id: "about us",
    image: "/website/aboutusbm2.png",
     images: "/website/sticky3.png",
     imagess: "/website/aboutuss.png"
  },
 {
    id: "careers",
    image: "/website/careers22.png",
     images: "/website/sticky4.png",
     imagess: "/website/careerss.png"
  },
 {
    id: "blogs",
    image: "/website/blogs22.png",
     images: "/website/sticky5.png",
     imagess: "/website/blogss.png"
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
