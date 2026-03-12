import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  ArrowTopRightOnSquareIcon,
  PlayIcon
} from '@heroicons/react/24/outline';

// Import thumbnails
import matchMartImg from "../assets/Thumbnail/MatchMart.png";
import coffeeDayImg from "../assets/Thumbnail/CoffeeDay.png";
import crossNDashImg from '../assets/Thumbnail/Cross-N-Dash.png';
import cutItRightImg from '../assets/Thumbnail/Cut it Right.png';
import mergeBlock2048Img from '../assets/Thumbnail/Merge Block 2048.png';
import hexTakeoverImg from '../assets/Thumbnail/HexTakeover.png';


function Projects() {
  const [filter, setFilter] = useState('All');

  // Games data organized by engine
  const games = {
    Cocos: [
      {
        title: "Match Mart",
        thumbnail: matchMartImg,
        link: "https://games.playzhub.com/MatchMart/",
        engine: "Cocos Creator"
      },
      {
        title: "Coffee Day",
        thumbnail: coffeeDayImg,
        link: "https://games.playzhub.com/CoffeeDay/",
        engine: "Cocos Creator"
      },
      {
        title: "Cross-N-Dash",
        thumbnail: crossNDashImg,
        link: "https://games.playzhub.com/CrossyRoad/",
        engine: "Cocos Creator"
      }
    ],
    "Phaser 3": [
      {
        title: "Cut it Right",
        thumbnail: cutItRightImg,
        link: "https://www.playzhub.com/game/Cut-it-Right",
        engine: "Phaser 3"
      }
    ],
    PixiJS: [
      {
        title: "HexTakeOver Prototype",
        thumbnail: hexTakeoverImg,
        link: "https://dev-games.playzhub.com/HexTakeover/",
        engine: "PixiJS"
      }
    ],
    Construct3: [
      {
        title: "Merge Block 2048",
        thumbnail: mergeBlock2048Img,
        link: "https://games.playzhub.com/MergeBlock2048/",
        engine: "Construct3"
      }
    ]
  };

  const handleGameClick = (gameLink, gameTitle) => {
    console.log('Playing game:', gameTitle, 'at:', gameLink);
    if (gameLink && gameLink.startsWith('http')) {
      window.open(gameLink, '_blank', 'noopener,noreferrer');
    } else {
      console.error('Invalid game link:', gameLink);
      alert('Invalid game link');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
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

  // Get all games or filter by engine
  const getAllGames = () => {
    return Object.entries(games).flatMap(([engine, gameList]) =>
      gameList.map(game => ({ ...game, category: engine }))
    );
  };

  const filteredGames = filter === 'All'
    ? getAllGames()
    : games[filter] || [];

  const filters = ['All', 'Cocos', 'Phaser 3', 'PixiJS', 'Construct3'];

  return (
    <motion.section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 dark:from-purple-400 dark:via-pink-400 dark:to-orange-400 bg-clip-text text-transparent pb-2">
            My Games
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 mx-auto rounded-full mb-6 sm:mb-8" style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.8)' }}></div>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Explore the games I've developed during my professional work, showcasing my expertise across multiple game engines.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4"
          variants={itemVariants}
        >
          {filters.map((tech) => (
            <motion.button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${filter === tech
                ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 dark:from-purple-500 dark:via-pink-500 dark:to-orange-500 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tech}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredGames.map((game, index) => (
              <motion.div
                key={`${filter}-${index}`}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700 cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => handleGameClick(game.link, game.title)}
                layout
              >
                {/* Game Thumbnail */}
                <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
                  <motion.img
                    src={game.thumbnail}
                    alt={game.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x200/a855f7/ffffff?text=' + encodeURIComponent(game.title);
                    }}
                  />

                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />

                  {/* Play Icon */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  >
                    <div className="p-4 bg-purple-600 dark:bg-purple-500 rounded-full shadow-lg">
                      <PlayIcon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>

                  {/* Engine Badge */}
                  <div className="absolute top-4 right-4 bg-purple-600 dark:bg-purple-500 backdrop-blur-sm rounded-full px-3 py-1 shadow-md">
                    <span className="text-xs font-semibold text-white">
                      {game.engine || game.category}
                    </span>
                  </div>
                </div>

                {/* Game Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {game.title}
                  </h3>

                  {/* Play Now Button */}
                  <div className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 text-sm sm:text-base font-medium group-hover:text-pink-600 dark:group-hover:text-pink-400">
                    <PlayIcon className="w-4 h-4" />
                    Click to Play Now
                    <ArrowTopRightOnSquareIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                </div>

                {/* Hover Effect Border */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/50 rounded-2xl transition-colors duration-300"
                  initial={false}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

export default Projects;