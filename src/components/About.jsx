import { motion } from 'framer-motion'

export default function About() {
    const skills = [
        { name: 'MERN Stack', color: 'from-blue-500 to-purple-500' },
        { name: 'JavaScript', color: 'from-yellow-500 to-orange-500' },
        { name: 'React', color: 'from-cyan-500 to-blue-500' },
        { name: 'Next.js', color: 'from-gray-700 to-black' },
        { name: 'Node.js', color: 'from-green-500 to-emerald-500' },
        { name: 'MongoDB', color: 'from-green-600 to-teal-500' }
    ]

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.6
            }
        }
    }

    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 20
            }
        }
    }

    const textVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    }

    const badgeVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15
            }
        }
    }

    return (
        <section className="py-20 bg-black relative overflow-hidden" id="about">
            {/* Background decorative elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

            <motion.div
                className="container mx-auto px-6 relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                <div className="max-w-4xl mx-auto">
                    {/* Card Container */}
                    <motion.div
                        variants={cardVariants}
                        className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-700/50 shadow-2xl"
                    >
                        {/* Decorative corner accents */}
                        <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-blue-500 rounded-tl-3xl"></div>
                        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-purple-500 rounded-br-3xl"></div>

                        {/* Title */}
                        <motion.h2
                            variants={titleVariants}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
                        >
                            About Me
                        </motion.h2>

                        {/* Content */}
                        <div className="space-y-6 text-gray-300 leading-relaxed">
                            <motion.p variants={textVariants} className="text-base md:text-lg">
                                Hello! I'm a passionate{' '}
                                <span className="text-purple-400 font-semibold">MERN Stack Developer</span>{' '}
                                experience in building modern, responsive, and user-friendly web applications. I work with MongoDB, Express.js, React, and Node.js to create scalable and efficient web solutions.
                            </motion.p>

                            <motion.p variants={textVariants} className="text-base md:text-lg">
                                I enjoy working on projects where I can leverage{' '}
                                <span className="text-blue-400 font-semibold">JavaScript</span>,{' '}
                                <span className="text-cyan-400 font-semibold">React</span>,{' '}
                                <span className="text-green-400 font-semibold">Node.js</span>,{' '}
                                <span className="text-emerald-400 font-semibold">MongoDB</span>{' '}
                                along with modern UI frameworks like{' '}
                                <span className="text-sky-400 font-semibold">Tailwind CSS</span>. My focus is on building responsive, fast, and scalable web applications with clean and maintainable code.
                            </motion.p>

                            <motion.p variants={textVariants} className="text-base md:text-lg">
                               I’m currently sharpening my expertise in{' '}
                                <span className="text-pink-400 font-semibold">Full-stack development</span>{' '}
                               REST APIs, authentication, and modern frontend tools to deliver reliable and high-quality web applications.
                            </motion.p>
                        </div>

                        {/* Skills Badges */}
                        <motion.div
                            className="flex flex-wrap justify-center gap-3 mt-10"
                            variants={containerVariants}
                        >
                            {skills.map((skill, index) => (
                                <motion.span
                                    key={index}
                                    variants={badgeVariants}
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`px-5 py-2.5 bg-gradient-to-r ${skill.color} text-white rounded-full text-sm md:text-base font-semibold shadow-lg cursor-pointer transition-all`}
                                >
                                    {skill.name}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}
