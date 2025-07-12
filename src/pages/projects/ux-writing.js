import UxWriting from "@/components/UxWriting";

export default function UxProject() {
  const examples = [
    {
      id: "email", 
      beforeImage: "/uxwriting/email.png",
      afterImage: "/uxwriting/email2.png"
    },
    {
      id: "google",
      beforeImage: "/uxwriting/google.png",
      afterImage: "/uxwriting/google2.png"
    },
    {
      id: "summarization",
     
      beforeImage: "/uxwriting/summarizationbefore.png",
      afterImage: "/uxwriting/summarization2.png"
    },
    {
      id: "texttospeech",
     
      beforeImage: "/uxwriting/texttospeech.png",
      afterImage: "/uxwriting/texttospeech2.png"
    }
  ];

  return (
    <UxWriting
      title="UX Writing"
      description="UX writing is the art of using clear, concise language in digital products to guide users effortlessly. It reduces cognitive load, removes friction, and helps people focus on exactly what they came to do — nothing more, nothing less."
      examples={examples}
    />
  );
}
