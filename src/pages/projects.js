import Layout from "@/components/Layout";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  { title: "Case Studies", color: "bg-[#FBC408]" },
  { title: "Website", color: "bg-[#BC0700]" },
  { title: "Challenges", color: "bg-[#0E2A8B]" },
  { title: "Portfolios", color: "bg-[#0E2A8B]" },
  { title: "Landing Pages", color: "bg-[#FBC408]" },
  { title: "Case Studies", color: "bg-[#FBC408]" },
  { title: "Portfolios", color: "bg-[#BC0700]" },
  { title: "Case Studies", color: "bg-[#0E2A8B]" },
];

const ProjectsPage = () => {
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll) {
        setDirection(1); 
      } else {
        setDirection(-1); 
      }
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
     <Layout>
       <h1 style={{ fontFamily: 'Science' }} className="font-science text-8xl text-[#0E2A8B] flex items-center justify-center mt-10 ">Projects</h1>
      <p style={{ fontFamily: 'Montreal' }} className="flex items-center justify-center mt-2" >the experience I have so far</p>
    <div className="min-h-screen px-8 py-16 bg-white text-center font-Montreal">
      <div className="flex flex-wrap justify-center gap-30 max-w-8xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`w-32 h-48 ${project.color} text-white flex items-center justify-center rounded shadow-md border-3 border-black cursor-pointer`}
            animate={{
              y: direction === 1 ? 5 : -5,
              transition: { duration: 1.2 },
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
            }}
          >
            <span className="text-md text-center px-2">{project.title}</span>
          </motion.div>
        ))}
      </div>
    </div>
    </Layout>
  );
};

export default ProjectsPage;