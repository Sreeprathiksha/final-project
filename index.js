import { useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const Portfolio = dynamic(() => import('../components/Portfolio'));

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    about: '',
    skills: '',
    projects: '',
    contact: '',
    imageUrl: ''
  });
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const handleImageUpload = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      setFormData({ ...formData, imageUrl: reader.result });
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className={`${isDark ? 'dark bg-gray-900 text-white' : 'bg-gradient-to-r from-pink-200 to-orange-200'} min-h-screen p-6 transition-colors duration-700`}>
      <Head>
        <title>Portfolio Generator</title>
      </Head>

      <div className="flex justify-end">
        <label className="flex items-center cursor-pointer">
          <span className="mr-2">🌙 Dark Mode</span>
          <input type="checkbox" onChange={() => setIsDark(!isDark)} />
        </label>
      </div>

      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {!showPortfolio ? (
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-3xl font-bold mb-6 text-center text-pink-600 dark:text-pink-400 animate-pulse">💼 Create Your Portfolio</h1>
            <input id="name" onChange={handleChange} placeholder="👤 Full Name" className="w-full mb-3 p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700" />
            <textarea id="about" onChange={handleChange} placeholder="✍️ About You" className="w-full mb-3 p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700" />
            <input id="skills" onChange={handleChange} placeholder="💡 Skills (comma separated)" className="w-full mb-3 p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700" />
            <input id="projects" onChange={handleChange} placeholder="📁 Projects (comma separated)" className="w-full mb-3 p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700" />
            <input id="contact" onChange={handleChange} placeholder="📧 Contact Email" className="w-full mb-3 p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700" />
            <input type="file" onChange={handleImageUpload} className="mb-4" />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowPortfolio(true)}
              className="w-full bg-pink-500 text-white p-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors"
            >
              Generate 🚀
            </motion.button>
          </motion.div>
        ) : (
          <Portfolio data={formData} goBack={() => setShowPortfolio(false)} />
        )}
      </motion.div>
    </div>
  );
}
