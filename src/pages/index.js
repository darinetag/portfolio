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
        
<img src="/creativeme.png" alt="My Image" className="w-64 h-64 rounded-lg" />
        <h1 style={{ fontFamily: 'Science' }} className="font-science text-4xl text-[#0E2A8B]">Darine Tag</h1>
        <p className="font-science">A passionate frontend dev building beautiful UIs with Next.js.</p>
      </section>
    </Layout>
  );
}
