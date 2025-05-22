import Layout from "@/components/Layout";
import Head from 'next/head';

export default function Home() {
  return (
    <Layout>
       <Head>
        <title>Darine Tag</title>
        <meta name="description" content="My creative portfolio" />
      </Head>
      <section className="relative h-screen">
        
<img src="/moi.gif" alt="My Image" className="w-150 h-140 rounded-lg absolute top-10 right-10 z-10" />
        <h1 style={{ fontFamily: 'Science' }} className="font-science text-8xl text-[#0E2A8B] absolute top-55 left-8">Darine Tag</h1>
       
<div className="w-76 h-76 bg-[#BC0700] border-10 border-black absolute top-0 right-0 hover:bg-white transition duration-300 ease-in-out"></div>
<div className="w-24 h-52 bg-[#0E2A8B] border-10 border-black absolute top-74 right-0 hover:bg-white transition duration-300 ease-in-out"></div>
<div style={{ fontFamily: 'Montreal' }} className="w-256 h-65 bg-[#FBC408] border-10 border-black absolute top-85 left-0 hover:bg-white transition duration-300 ease-in-out"> 
   <h1  className="pl-6 pt-7 text-2xl">Making Tech Kind</h1>
   <p  className="pl-5 p-4 text-xl w-230">As someone who is very much passionate about learning, I have managed to gather a good amount of skillsets that not only allowed me to be versatile and a quick problem solver but moreover it helped me become extremely adaptable to new things and a good communicator with people from different backgrounds. I bring creativity and appeal to digital solutions. </p>
</div>
      </section>
            <section>
              <h1 style={{ fontFamily: 'Science' }} className="font-science text-8xl text-[#0E2A8B] flex items-center justify-center ">Skills</h1> </section>
  <section className="p-2 bg-black mt-20 ">
  <div className="grid grid-cols-12 gap-2  text-xl text-center " style={{ fontFamily: 'Montreal' }}>
    {/* First row */}
<div className="col-span-3 bg-white text-black p-2 flex items-center justify-center hover:bg-white transition duration-300 ease-in-out">Web Design</div>
    <div className="col-span-6 h-14 bg-black text-white p-2 flex items-center justify-center hover:bg-white hover:text-black transition duration-300 ease-in-out">HTML CSS Javascript GitHub Git</div>
    <div className="col-span-3 h-14 bg-yellow-400 text-black p-2 flex items-center justify-center hover:bg-white transition duration-300 ease-in-out">Next.js</div>

    {/* Second row */}
    <div className="col-span-1 h-42 bg-red-700 p-2 hover:bg-white transition duration-300 ease-in-out"></div>
    <div className="col-span-2 h-42 bg-white text-black p-2 flex items-center justify-center hover:bg-white transition duration-300 ease-in-out">Visual Design</div>
    <div className="col-span-3 h-42 bg-[#0E2A8B] text-white p-2 flex items-center justify-center hover:bg-white hover:text-black transition duration-300 ease-in-out">Figma</div>
    <div className="col-span-3 h-42 bg-red-700 text-black p-2 flex items-center justify-center hover:bg-white hover:text-black transition duration-300 ease-in-out">Translation</div>
    <div className="col-span-3 h-42 bg-white text-black p-2 flex items-center justify-center hover:bg-white transition duration-300 ease-in-out">WordPress</div>

    {/* Third row */}
    <div className="col-span-2 hover:bg-white transition duration-300 ease-in-out"></div>
    <div className="col-span-2 h-14 bg-yellow-400 text-black p-2 flex items-center justify-center hover:bg-white transition duration-300 ease-in-out">UX Writing</div>
    <div className="col-span-3 h-14 bg-red-700 text-black p-2 flex items-center justify-center hover:bg-white hover:text-black transition duration-300 ease-in-out">Proofreading</div>
    <div className="col-span-3 h-14 bg-white text-black p-2 flex items-center justify-center hover:bg-white transition duration-300 ease-in-out">Framer</div>

    {/* Fourth row */}
    <div className="col-span-2 h-14 bg-[#0E2A8B] text-white p-2 flex items-center justify-center hover:bg-white hover:text-black transition duration-300 ease-in-out">Typography</div>
    <div className="col-span-2 h-14 bg-red-700 text-black p-2 flex items-center justify-center hover:bg-white hover:text-black transition duration-300 ease-in-out">Color Theory</div>
    <div className="col-span-2 h-14 bg-white text-black p-2 flex items-center justify-center hover:bg-white transition duration-300 ease-in-out">Layout</div>
    <div className="col-span-1 h-14 bg-[#0E2A8B] p-2 flex items-center justify-center hover:bg-white transition duration-300 ease-in-out"></div>
    <div className="col-span-3 h-14 bg-white text-black p-2 flex items-center justify-center hover:bg-white transition duration-300 ease-in-out">User Research</div>
    <div className="col-span-2 h-14 bg-yellow-400 p-2 flex items-center justify-center hover:bg-white transition duration-300 ease-in-out"> 
      <img src="/figma-icon.png" alt="Figma" className="w-6 h-8 mx-auto flex items-center justify-center" />
    </div>
    <div className="col-span-2 hover:bg-white transition duration-300 ease-in-out"></div>

    {/* Fifth row */}
    <div className="col-span-3 h-20 bg-yellow-400 text-black p-2 flex items-center justify-center hover:bg-white transition duration-300 ease-in-out">UI/UX Principles</div>
    <div className="col-span-1 h-20 bg-yellow-400 p-2 hover:bg-white transition duration-300 ease-in-out">
      <img src="/git-icon.png" alt="Git" className="w-8 h-8 mx-auto flex items-center justify-center mt-4" />
    </div>
    <div className="col-span-2 h-20 bg-white text-black p-2 flex items-center justify-center hover:bg-white transition duration-300 ease-in-out">AI</div>
    <div className="col-span-1 h-20 bg-red-700 p-2 flex items-center justify-center hover:bg-white transition duration-300 ease-in-out">
      <img src="/github-icon.png" alt="GitHub" className="w-6 h-6 mx-auto" />
    </div>
    <div className="col-span-5 h-20 bg-[#0E2A8B] text-white p-2 flex items-center justify-center hover:bg-white hover:text-black transition duration-300 ease-in-out">Mockups and Prototyping</div>
  </div>
</section>


    </Layout>
  );
}
