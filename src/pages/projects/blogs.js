import Layout from "@/components/Layout";

export default function BlogsProjectPage() {
  return (
    <Layout>
       <div className=" px-6 relative overflow-hidden" style={{ fontFamily: "Montreal" }}>
        {/* Page Title */}
        <h1 className="lg:text-8xl text-4xl text-[#0E2A8B] text-center my-8" style={{ fontFamily: "Science" }}>
          Blogs
        </h1>
     <p className="flex items-center text-sm lg:text-lg justify-center text-center w-full md:w-[800px] mx-auto ">
  Notes from a designer who codes — and sometimes overthinks.
</p>
</div>
      <section class="w-full flex flex-col items-center justify-center px-6 py-10 gap-6 text-bold"  style={{ fontFamily: 'Montreal' }}>
  <a href="https://darinetag.hashnode.dev/designing-for-every-age-a-generational-ux-revolution" target="_blank" class="group cursor-pointer lg:w-full max-w-5xl bg-[#B10000] text-white transition-all duration-500 overflow-hidden">
    <div class="relative w-full h-full p-10 lg:min-h-[180px] flex items-center justify-center">
     
      <h2 class=" md:text-3xl lg:text- font-light group-hover:opacity-0 transition-opacity duration-300 ease-in-out text-left">Designing for Every Age: A Generational UX Revolution</h2>
      
      <p class="absolute inset-0 p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-lg leading-relaxed text-black bg-white">
        → A bold UX concept that adapts digital interfaces to users' age ranges — visually, cognitively, and emotionally. Introducing Generational Responsive Design: age-aware, human-centered experiences built for trust and inclusivity.
      </p>
    </div>
  </a>

  <a href="https://darinetag.hashnode.dev/making-tech-kind" target="_blank" class="group cursor-pointer w-full max-w-5xl bg-[#F4BF00] text-white transition-all duration-500 overflow-hidden">
    <div class="relative w-full h-full p-10 lg:min-h-[180px] flex items-center justify-center">
      
      <h2 class="md:text-3xl font-light group-hover:opacity-0 transition-opacity duration-300 ease-in-out text-left">Making Tech Kind</h2>
      
      <p class="absolute inset-0 p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-lg leading-relaxed text-black bg-white">
        → A personal story of discovering UI/UX as the heart of technology — where empathy meets function. This piece explores how micro-moments, soft design, and human insight quietly shape better digital experiences, one kind touch at a time.
      </p>
    </div>
  </a>

  <a href="https://darinetag.hashnode.dev/beginner-programmers-in-self-doubt-no-more" target="_blank" class="group cursor-pointer w-full max-w-5xl bg-[#0C2E94] text-white transition-all duration-500 overflow-hidden">
    <div class="relative w-full h-full p-10 lg:min-h-[180px] flex items-center justify-center">
      
      <h2 class=" md:text-3xl font-light group-hover:opacity-0 transition-opacity duration-300 ease-in-out text-left">Beginner Programmers in Self-doubt … No More.</h2>
      
      <p class="absolute inset-0 p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-lg leading-relaxed text-black bg-white">
        → You are not bad at coding; you're new at coding. This piece reframes the beginner journey with compassion, practical advice, and a mindset shift — reminding you that you're not behind... you're just beginning.
      </p>
    </div>
  </a>
</section>

    </Layout>
  );
}
