import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import HTML5 from "./icons/HTML5";
import CSS3 from "./icons/CSS3";
import JavaScript from "./icons/JavaScript";
import ReactIcon from "./icons/React";
import Nodejs from "./icons/Nodejs";
import NextjsIcon from "./icons/Nextjs";
import ExpressjsIcon from "./icons/ExpressjsIcon";
import MongoDBIcon from "./icons/MongoDBIcon";
import FirebaseIcon from "./icons/FirebaseIcon";
import OpenAiIcon from "./icons/OpenAiIcon";
import FigmaIcon from "./icons/FigmaIcon";
import GitIcon from "./icons/GitIcon";

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.1 });

    const skills = [
        {
            name: "HTML5",
            icon: <HTML5 />,
            color: "from-orange-500 to-orange-600",
        },
        {
            name: "CSS3",
            icon: <CSS3 />,
            color: "from-blue-500 to-blue-600",
        },
        {
            name: "JavaScript",
            icon: <JavaScript />,
            color: "from-yellow-500 to-yellow-600",
        },
        {
            name: "React",
            icon: <ReactIcon />,
            color: "from-cyan-500 to-blue-500",
        },
        {
            name: "Node.js",
            icon: <Nodejs />,
            color: "from-green-500 to-green-600",
        },
        {
            name: "Next.js",
            icon: <NextjsIcon />,
            color: "from-gray-800 to-black",
        },
        {
            name: "Express.js",
            icon: <ExpressjsIcon />,
            color: "from-gray-600 to-gray-700",
        },
        {
            name: "MongoDB",
            icon: <MongoDBIcon />,
            color: "from-green-600 to-green-700",
        },
        {
            name: "Firebase",
            icon: <FirebaseIcon />,
            color: "from-orange-500 to-red-500",
        },
        {
            name: "Git",
            icon: <GitIcon />,
            color: "from-red-500 to-red-600",
        },
        {
            name: "Figma",
            icon: <FigmaIcon />,
            color: "from-blue-600 to-indigo-600",
        },
        {
            name: "AI",
            icon: <OpenAiIcon />,
            color: "from-blue-500 to-yellow-500",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const skillVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.8,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
                duration: 0.6,
            },
        },
    };

    const titleVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.8,
            },
        },
    };

    return (
        <section
            id="skills"
            ref={ref}
            className="py-20 bg-gradient-to-br from-background-light via-gray-50 to-background-light dark:from-background-dark dark:via-gray-900 dark:to-background-dark relative overflow-hidden"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Title */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={titleVariants}
                    className="text-center mb-16"
                >
                    <motion.div
                        className="inline-block mb-6"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <span className="px-8 py-3 bg-gradient-to-r from-primary/20 to-secondary/20 border-2 border-primary/30 rounded-full text-primary dark:text-primary font-bold text-lg tracking-wider uppercase">
                            My Skills
                        </span>
                    </motion.div>

                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                            isInView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 20 }
                        }
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        Technologies I Work With
                    </motion.h2>

                    <motion.p
                        className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                            isInView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 20 }
                        }
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        A comprehensive toolkit of modern technologies and
                        frameworks that I use to build exceptional digital
                        experiences.
                    </motion.p>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 md:gap-8"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            variants={skillVariants}
                            whileHover={{
                                scale: 1.1,
                                y: -10,
                                transition: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20,
                                },
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative"
                        >
                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary/30">
                                {/* Skill Icon */}
                                <div className="flex justify-center mb-4">
                                    <div
                                        className={`w-16 h-16 rounded-xl bg-gradient-to-br flex items-center justify-center text-2xl shadow-lg group-hover:shadow-xl transition-all duration-300`}
                                    >
                                        {skill.icon}
                                    </div>
                                </div>

                                {/* Skill Name */}
                                <h3 className="text-center font-semibold text-gray-900 dark:text-white text-sm md:text-base group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300">
                                    {skill.name}
                                </h3>

                                {/* Hover Effect Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>

                            {/* Floating Animation */}
                            <motion.div
                                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 -z-10"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileHover={{
                                    opacity: 1,
                                    scale: 1.05,
                                    transition: { duration: 0.3 },
                                }}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                    }
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Always learning and exploring new technologies to stay
                        ahead of the curve.
                    </p>
                    <motion.a
                        href="#projects"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        See My Work
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            →
                        </motion.span>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
