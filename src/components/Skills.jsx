import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  CodeBracketIcon,
  CpuChipIcon,
  CircleStackIcon,
  WrenchScrewdriverIcon,
  CommandLineIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

function Skills() {
  const [activeCategory, setActiveCategory] = useState(null);

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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    })
  };

  // Game Development Skills Data
  const skillsData = {
    "Game Engines": {
      icon: <CpuChipIcon className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Cocos Creator", level: 90 },
        { name: "Unity", level: 70 },
        { name: "Construct3", level: 60 }
      ]
    },
    "Frameworks": {
      icon: <WrenchScrewdriverIcon className="w-6 h-6" />,
      color: "from-pink-500 to-orange-500",
      skills: [
        { name: "Phaser3", level: 95 },
        { name: "Socket.io", level: 90 },
        { name: "Matter.js", level: 80 },
        { name: "ThreeJS", level: 70 },
        { name: "Pixi.js", level: 60 },
      ]
    },
    "Programming Languages": {
      icon: <CodeBracketIcon className="w-6 h-6" />,
      color: "from-cyan-500 to-purple-500",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 80 },
        { name: "C#", level: 75 },
        { name: "C++", level: 70 },
        { name: "C", level: 70 }
      ]
    }
  };

  const getSkillColor = (level) => {
    if (level >= 90) return "from-purple-500 to-pink-500";
    if (level >= 80) return "from-pink-500 to-orange-500";
    if (level >= 70) return "from-cyan-500 to-purple-500";
    return "from-purple-600 to-purple-700";
  };

  return (
    <motion.section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 dark:from-purple-400 dark:via-pink-400 dark:to-orange-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 dark:from-purple-500 dark:via-pink-500 dark:to-orange-500 mx-auto rounded-full mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Mastering game engines, frameworks, and programming languages to create amazing gaming experiences.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skillsData).map(([category, data], categoryIndex) => (
            <motion.div
              key={category}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200 dark:border-gray-700"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              onHoverStart={() => setActiveCategory(categoryIndex)}
              onHoverEnd={() => setActiveCategory(null)}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${data.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                  {data.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-600 group-hover:to-pink-600 dark:group-hover:from-purple-400 dark:group-hover:to-pink-400 transition-all duration-300">
                  {category}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {data.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="relative"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Skill Name and Level */}
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-800 dark:text-gray-200 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-purple-600 dark:text-purple-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${getSkillColor(skill.level)} rounded-full`}
                        variants={progressVariants}
                        custom={skill.level}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                      </motion.div>
                    </div>

                    {/* Skill Level Indicator */}
                    <div className="flex justify-end mt-1">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${i < Math.floor(skill.level / 20)
                                ? 'bg-gradient-to-r ' + getSkillColor(skill.level)
                                : 'bg-gray-300 dark:bg-gray-600'
                              }`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Hover Effect Border */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/50 rounded-2xl transition-colors duration-300"
                initial={false}
              />
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <motion.div
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { label: "Game Engines", value: `${skillsData["Game Engines"].skills.length}+`, icon: <CpuChipIcon className="w-8 h-8" /> },
              { label: "Frameworks", value: `${skillsData["Frameworks"].skills.length}+`, icon: <WrenchScrewdriverIcon className="w-8 h-8" /> },
              { label: "Languages", value: `${skillsData["Programming Languages"].skills.length}+`, icon: <CodeBracketIcon className="w-8 h-8" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500 text-white mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-700 dark:text-gray-300 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Skills;