// ✅ File: components/Portfolio.js

import { motion } from 'framer-motion';

export default function Portfolio({ data, goBack }) {
  const { name, about, skills, projects, contact, imageUrl } = data;

  return (
    <motion.div
      className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg transition duration-300"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-center text-pink-600 dark:text-pink-400 mb-6 animate-pulse">
        👋 Hi, I'm {name}
      </h2>

      {imageUrl && (
        <div className="flex justify-center mb-6">
          <img
            src={imageUrl}
            alt="User"
            className="rounded-full w-32 h-32 object-cover border-4 border-pink-500 shadow-lg"
          />
        </div>
      )}

      <p className="text-lg mb-4">{about}</p>

      <div className="mb-4">
        <h3 className="text-xl font-semibold text-pink-600 dark:text-pink-400 mb-2">💡 Skills</h3>
        <ul className="list-disc list-inside">
          {skills.split(',').map((skill, index) => (
            <li key={index}>{skill.trim()}</li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold text-pink-600 dark:text-pink-400 mb-2">📁 Projects</h3>
        <ul className="list-decimal list-inside">
          {projects.split(',').map((project, index) => (
            <li key={index}>{project.trim()}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-pink-600 dark:text-pink-400 mb-2">📧 Contact</h3>
        <p>{contact}</p>
      </div>

      <div className="flex gap-4 justify-center">
        <button
          onClick={goBack}
          className="bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-black dark:text-white px-4 py-2 rounded"
        >
          ⬅️ Back
        </button>
        <a
          href={`mailto:${contact}`}
          className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded"
        >
          📩 Contact Me
        </a>
      </div>
    </motion.div>
  );
}
