import Layout from "@/components/Layout";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  { title: "Case Studies", color: "bg-[#FBC408]", style: "row-start-1 col-start-1 translate-y-[-40px]" },
  { title: "Website", color: "bg-[#BC0700]", style: "row-start-1 col-start-5 translate-y-[-40px]" },
  { title: "UX Writing", color: "bg-[#BC0700]", style: "row-start-2 col-start-2 translate-y-[-100px]" },
  { title: "Landing Pages", color: "bg-[#FBC408]", style: "row-start-2 col-start-4 translate-y-[-100px]" },
  { title: "Challenges", color: "bg-[#0E2A8B]", style: "row-start-3 col-start-1 translate-y-[-40px]" },
  { title: "Portfolios", color: "bg-[#0E2A8B]", style: "row-start-3 col-start-3 translate-y-[-160px]" },
  { title: "Case Studies", color: "bg-[#FBC408]", style: "row-start-3 col-start-5 translate-y-[-40px]" },
  { title: "Portfolios", color: "bg-[#BC0700]", style: "row-start-4 col-start-2 translate-y-[-80px]" },
  { title: "Case Studies", color: "bg-[#0E2A8B]", style: "row-start-4 col-start-4 translate-y-[-80px]" },
];

const ProjectsPage = () => {
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    let lastScroll = window.scrollY;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setDirection(currentScroll > lastScroll ? 6 : -6);
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout>
      <h1 style={{ fontFamily: 'Science' }} className="font-science text-8xl text-[#0E2A8B] flex items-center justify-center mt-10">PROJECTS</h1>
      <p style={{ fontFamily: 'Montreal' }} className="text-center mt-2">the experience I have so far</p>

      <div className="min-h-screen  bg-white font-Montreal flex justify-center ">
        <div className="grid grid-cols-5 grid-rows-5 gap-x-32  max-w-7xl w-full mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`w-40 h-54 ${project.color} text-white flex items-center justify-center rounded-md shadow-md border-4 border-black cursor-pointer ${project.style}`}
              animate={{
                y: direction,
                transition: { duration: 1.2 },
              }}
              whileHover={{
                scale: 1.07,
                boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
              }}
            >
              <span className="text-xl text-center px-2">{project.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsPage;
