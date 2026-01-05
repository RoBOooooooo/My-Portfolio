import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

import projectImage1 from "../assets/images/project-1.png";
import projectImage2 from "../assets/images/project-2.png";
import projectImage3 from "../assets/images/project-3.png";

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.1 });

    const projects = [
        {
            id: 1,
            title: "Rewise – Digital Life Lessons & Donation Platform",
            description:
                "A full-featured digital platform for sharing life lessons and managing financial contributions. Supports general donations, subscriptions, sponsorships, fundraising campaigns, and Zakat with a scalable web-based solution designed for real-world impact.",
            image: projectImage1,
            tags: ["Web App"],
            tagColors: ["purple", "blue", "green"],
            liveUrl: "https://rewise-arif.vercel.app/",
            githubUrl: "https://github.com/RoBOooooooo/rewise-client/",
            technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        },
        {
            id: 2,
            title: "Hiko Learn – Online Course Learning Platform",
            description:
                "An interactive online learning platform that allows users to explore and enroll in courses easily. Built with a modern UI, fast performance, and scalable architecture to provide a smooth learning experience.",
            image: projectImage2,
            tags: ["React", "Next.js", "Tailwind"],
            tagColors: ["cyan", "gray", "blue"],
            liveUrl: "https://hiko-app.vercel.app/",
            githubUrl: "https://github.com/RoBOooooooo/hiko-app-client",
            technologies: ["React", "Next.js", "Tailwind CSS", "MongoDB"],
        },
        {
            id: 3,
            title: "Toy Topia – Online Toy Store",
            description:
                "A MERN-based eCommerce platform for buying and managing toys online. Includes product listing, category management, and a user-friendly shopping experience with dynamic data handling.",
            image: projectImage3,
            tags: ["MERN", "Web App"],
            tagColors: ["green", "purple"],
            liveUrl: "https://toy-topia-store.netlify.app/",
            githubUrl: "https://github.com/RoBOooooooo/Toy-Topia-Store",
            technologies: ["MongoDB", "Express", "React", "Node.js"],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    const projectVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.6,
            },
        },
    };

    const getTagColorClasses = (color) => {
        const colors = {
            purple: "bg-purple-500/20 text-purple-300 border-purple-500/30",
            blue: "bg-blue-500/20 text-blue-300 border-blue-500/30",
            green: "bg-green-500/20 text-green-300 border-green-500/30",
            cyan: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
            gray: "bg-gray-500/20 text-gray-300 border-gray-500/30",
            red: "bg-red-500/20 text-red-300 border-red-500/30",
            yellow: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
        };
        return colors[color] || colors.blue;
    };

    return (
        <section
            ref={ref}
            className="py-20 bg-background-light dark:bg-background-dark relative overflow-hidden"
            id="projects"
        >
            {/* Background decorative elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }
                    }
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                        My Projects
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                        Here are some of my recent projects that showcase my
                        skills and passion for creating exceptional digital
                        experiences.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="space-y-12"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={projectVariants}
                            className={`bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl hover:shadow-3xl transition-all duration-300 group ${
                                index % 2 === 0 ? "" : "lg:flex-row-reverse"
                            }`}
                        >
                            <div
                                className={`flex flex-col lg:flex-row h-full ${
                                    index % 2 === 0 ? "" : "lg:flex-row-reverse"
                                }`}
                            >
                                {/* Project Image */}
                                <div className="lg:w-1/2 overflow-hidden h-64 lg:h-auto">
                                    <img
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        src={project.image}
                                    />
                                </div>

                                {/* Project Content */}
                                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                                        {project.title}
                                    </h3>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className={`text-xs px-3 py-1 rounded-full border ${getTagColorClasses(
                                                    project.tagColors[tagIndex]
                                                )}`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="mb-8">
                                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                            Technologies Used:
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map(
                                                (tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                                                    >
                                                        {tech}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-4">
                                        <motion.a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Live Demo
                                            <span className="material-symbols-outlined text-sm">
                                                open_in_new
                                            </span>
                                        </motion.a>

                                        <motion.a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-full font-semibold transition-all duration-300"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <i className="fa-brands fa-github"></i>
                                            GitHub
                                        </motion.a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
