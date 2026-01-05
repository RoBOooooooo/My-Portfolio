import { motion } from "framer-motion";
import { gsap } from "gsap";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    // Scroll to top with GSAP
    const scrollToTop = () => {
        gsap.to(window, {
            duration: 1.2,
            scrollTo: { y: 0 },
            ease: "power3.inOut",
        });
    };

    // Animation variants
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

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
            },
        },
    };

    const socialVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15,
            },
        },
    };

    const quickLinks = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Work", href: "#projects" },
        { label: "FAQ", href: "#faq" },
        { label: "Contact", href: "#contact" },
    ];

    const socialLinks = [
        {
            icon: "fa-brands fa-github",
            href: "https://github.com/RoBOooooooo",
            label: "GitHub",
        },
        {
            icon: "fa-brands fa-linkedin",
            href: "https://www.linkedin.com/in/mdmujahidulislamarif/",
            label: "LinkedIn",
        },
        { icon: "fa-brands fa-twitter", href: "#", label: "Twitter" },
        {
            icon: "fa-solid fa-envelope",
            href: "mujahidarif120@gmail.com",
            label: "Email",
        },
    ];

    return (
        <footer className="bg-[#0a0e1a] dark:bg-[#0a0e1a] text-gray-300 border-t border-gray-800">
            <motion.div
                className="container mx-auto px-6 py-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Section */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-2xl font-bold mb-4">
                            <span className="text-white">MD Mujahidul</span>{" "}
                            <span className="text-primary">Islam</span>
                        </h3>
                        <p className="text-gray-400 leading-relaxed max-w-sm">
                            My expertise lies in the MERN stack, providing
                            seamless end-to-end solutions from MongoDB to
                            building backend APIs with Express & Node.js.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-lg font-semibold text-white mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                    }}
                                >
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-primary transition-colors inline-block"
                                    >
                                        {link.label}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Say Hello */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-lg font-semibold text-white mb-4">
                            Say Hello
                        </h4>
                        <div className="space-y-3">
                            <motion.a
                                href="mailto:hello@mdmujahidul.me"
                                className="text-gray-400 hover:text-primary transition-colors block"
                                whileHover={{ x: 5 }}
                            >
                                mujahidarif120@gmail.com
                            </motion.a>
                            <p className="text-gray-400">Sylhet, Bangladesh</p>
                            <p className="text-gray-400">+880 1721-602071</p>
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <motion.div
                    className="border-t border-gray-800 mb-8"
                    variants={itemVariants}
                />

                {/* Bottom Section */}
                <motion.div
                    className="flex flex-col md:flex-row justify-between items-center gap-6"
                    variants={itemVariants}
                >
                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all"
                                variants={socialVariants}
                                whileHover={{ scale: 1.1, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={social.label}
                            >
                                <i className={social.icon}></i>
                            </motion.a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <motion.p
                        className="text-sm text-gray-500"
                        variants={itemVariants}
                    >
                        © {currentYear} MD Mujahidul Islam. Made with{" "}
                        <motion.span
                            className="text-red-500 inline-block"
                            animate={{
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                        >
                            ❤️
                        </motion.span>{" "}
                        and lots of coffee.
                    </motion.p>
                </motion.div>
            </motion.div>

            {/* Scroll to Top Button */}
            <motion.button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary/90 transition-all z-40"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                aria-label="Scroll to top"
            >
                <i className="fa-solid fa-arrow-up"></i>
            </motion.button>
        </footer>
    );
}
