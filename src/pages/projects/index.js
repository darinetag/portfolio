import Layout from "@/components/Layout";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
const projects = [
  { title: "Case Studies", href: "/projects/case-studies", color: "bg-[#FBC408]", style: "row-start-1 col-start-1" },
  { title: "Website", href: "/projects/website", color: "bg-[#BC0700]", style: "row-start-1 col-start-5" },
  { title: "UX Writing",  href: "/projects/ux-writing", color: "bg-[#BC0700]", style: "row-start-2 col-start-2 translate-y-[-100px]" },
  { title: "Landing Pages", href: "/projects/landing-pages", color: "bg-[#FBC408]", style: "row-start-2 col-start-4 translate-y-[-100px]" },
  { title: "Blogs", href: "/projects/blogs", color: "bg-[#0E2A8B]", style: "row-start-3 col-start-3 translate-y-[-160px]" },
];

const ProjectsPage = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let start = performance.now();

    const animate = (time) => {
      const elapsed = time - start;
      const duration = 10000; 
      const maxOffset = -80; 

      if (elapsed < duration) {
        const progress = elapsed / duration;
        const eased = Math.sin((progress * Math.PI) / 2); // ease-out effect
        setOffset(eased * maxOffset);
        requestAnimationFrame(animate);
      } else {
        setOffset(maxOffset);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <Layout>
      <h1 style={{ fontFamily: 'Science' }} className="font-science text-8xl text-[#0E2A8B] flex items-center justify-center mt-10">PROJECTS</h1>
      <p style={{ fontFamily: 'Montreal' }} className="text-center mt-2">the experience I have so far</p>

      <div className="min-h-screen bg-white font-Montreal grid mx-auto">
  <div className="grid grid-cols-5 grid-rows-5 gap-x-32 max-w-7xl w-full mx-auto">
    {projects.map((project, index) => (
      <Link key={index} href={project.href} passHref legacyBehavior>
        <a className="contents">
          <motion.div
            className={`w-40 h-54 ${project.color} text-white flex items-center justify-center rounded-md shadow-md border-4 border-black cursor-pointer ${project.style}`}
            animate={{
              y: offset,
              transition: { duration: 0.2 },
            }}
            whileHover={{
              scale: 1.07,
              boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
            }}
          >
            <span className="text-xl text-center px-2">{project.title}</span>
          </motion.div>
        </a>
      </Link>
    ))}
  </div>
</div>

    </Layout>
  );
};

export default ProjectsPage;
