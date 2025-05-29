import UxWriting from "@/components/UxWriting";

export default function UxProject() {
const examples = [
  {
    id: "email", 
    image: "/uxwriting/email.png",
    images: "/uxwriting/email2.png"
  },
  {
    id: "google",
    image: "/uxwriting/google.png",
    images: "/uxwriting/google2.png"
  },
  {
    id: "summarization",
    image: "/uxwriting/summarizationbefore.png",
    images: "/uxwriting/summarization2.png"
  },
  {
    id: "texttospeech",
    image: "/uxwriting/texttospeech.png",
    images: "/uxwriting/texttospeech2.png"
  }
];


  return (
    <UxWriting
      title="UX Writing"
      subtitle="Before"
      subtitles="After"
      description="UX writing is the art of using clear, concise language in digital products to guide users effortlessly. It reduces cognitive load, removes friction, and helps people focus on exactly what they came to do — nothing more, nothing less."
      examples={examples}
    />
  );
}
