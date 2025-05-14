import Layout from "@/components/Layout";
import Head from 'next/head';

export default function Home() {
  return (
    <Layout>
       <Head>
        <title>Darine Tag</title>
        <meta name="description" content="My creative portfolio" />
      </Head>
      <section>
        
<img src="/creativeme.png" alt="My Image" className="w-150 h-140 rounded-lg absolute top-10 right-10 z-10" />
        <h1 style={{ fontFamily: 'Science' }} className="font-science text-8xl text-[#0E2A8B] absolute top-30 left-8">Darine Tag</h1>
       
<div className="w-76 h-76 bg-[#BC0700] border-10 border-black absolute top-0 right-0"></div>
<div className="w-24 h-52 bg-[#0E2A8B] border-10 border-black absolute top-74 right-0"></div>
<div className="w-256 h-86 bg-[#FBC408] border-10 border-black absolute top-64 left-0"> 
   <h1 style={{ fontFamily: 'cormorant' }} className="p-6 text-2xl">Making Tech Nice</h1>
   <p style={{ fontFamily: 'cormorant' }} className="p-6 text-xl w-230">As someone who is very much passionate about learning, I have managed over the years to gather a good amount of skillsets that not only allowed me to be versatile and a quick problem solver but moreover it helped me become extremely adaptable to new things and a good communicator with people from different backgrounds. I bring creativity and appeal to digital solutions. </p>
</div>
      </section>
    </Layout>
  );
}
