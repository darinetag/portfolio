import VisualShowcase from "@/components/visuals"; // update the path if your folder is different

const examples = [
  {
      behanceEmbed: "https://www.behance.net/embed/project/210803221?ilo0=1",
    images: "https://www.behance.net/embed/project/210803221?ilo0=1",
    heading: "Banner Design",
    description: "A vibrant, dynamic visual for an ad campaign.",
  },
  {
    image: "/path/to/banner2.jpg",
    heading: "Event Poster",
    description: "Minimalist poster with bold primary color blocking.",
  },
  {
    image: "/path/to/banner3.jpg",
    images: "/path/to/banner3b.jpg",
    heading: "Brand Identity",
    description: "Logo and branding suite for a startup.",
  },
  // Add more objects as you wish!
];

export default function VisualGalleryPage() {
  return (
    <VisualShowcase
    
      title="Visual Gallery"
      subtitle="Project"
      description="Browse my latest pieces of visual art, banners, and creative designs, all inspired by bold color and composition."
      examples={examples}
    />
  );
}
