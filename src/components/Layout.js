import Navbar from './Navbar';
import Footer from './Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={router.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default Layout;
