import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { FaGamepad } from 'react-icons/fa';
import TypingAnimation from './TypingAnimation';
import ParticleBackground from './ParticleBackground';

function Home() {
  const roles = [
    'Game Developer',
    'Hyper Casual Game Creator',
    'Casino & Card Game Specialist',
    'Multiplayer Game Developer'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-950 dark:to-gray-900 pt-20 pb-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Particle Background */}
      <ParticleBackground />

      {/* Floating Game Elements */}
      <motion.div
        className="absolute top-20 left-2 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-32 right-2 sm:top-40 sm:right-20 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full opacity-20 blur-xl"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      />
      <motion.div
        className="absolute bottom-32 left-2 sm:bottom-40 sm:left-20 w-14 h-14 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          className="mb-6 sm:mb-8"
          variants={itemVariants}
        >
          <motion.h1
            className="text-3xl xs:text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 dark:from-purple-400 dark:via-pink-400 dark:to-orange-400 bg-clip-text text-transparent leading-normal pb-2"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Tanmay Mukherjee
          </motion.h1>

          <motion.div
            className="text-lg xs:text-xl sm:text-2xl lg:text-4xl font-semibold text-purple-700 dark:text-purple-300 mb-4 sm:mb-6 h-12 sm:h-16 flex items-center justify-center px-2"
            variants={itemVariants}
          >
            <TypingAnimation texts={roles} speed={100} deleteSpeed={50} pauseTime={2000} />
          </motion.div>
        </motion.div>

        <motion.p
          className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2"
          variants={itemVariants}
        >
          Crafting addictive hyper-casual games, thrilling casino experiences, and engaging multiplayer adventures.
          Bringing fun and excitement to players worldwide with innovative game mechanics and stunning visuals.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          variants={itemVariants}
        >
          <motion.a
            href="#contact"
            className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden text-center"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)' }}
          >
            <span className="relative z-10">Let's Collaborate</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </motion.a>

          <motion.a
            href="#projects"
            className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-purple-600 dark:border-purple-400 text-purple-700 dark:text-purple-300 rounded-full font-semibold hover:border-pink-500 dark:hover:border-pink-400 hover:text-pink-600 dark:hover:text-pink-400 transition-all duration-300 flex items-center justify-center gap-2 bg-white/50 dark:bg-gray-800/50"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGamepad className="w-4 h-4 sm:w-5 sm:h-5" />
            Play My Games
          </motion.a>
        </motion.div>

        {/* Game Tech Stack */}
        <motion.div
          className="mt-8 sm:mt-12 lg:mt-16 flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 px-2"
          variants={itemVariants}
        >
          {['Cocos Creator', 'Phaser 3', 'PixiJS', 'Construct3', 'Unity'].map((tech, index) => (
            <motion.span
              key={tech}
              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-600"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              whileHover={{ 
                scale: 1.1, 
                y: -2
              }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-purple-600 dark:text-purple-400"
        >
          <ChevronDownIcon className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Home;