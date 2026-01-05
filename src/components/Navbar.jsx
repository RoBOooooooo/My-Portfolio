import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

export default function Navbar({ darkMode, toggleDarkMode }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')
    const [scrolled, setScrolled] = useState(false)
    const navRef = useRef(null)
    const { scrollY } = useScroll()

    // Handle scroll effects with GSAP
    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50)
    })

    // Active section detection
    useEffect(() => {
        const sections = ['home', 'about', 'skills', 'projects', 'contact']

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { threshold: 0.3 }
        )

        sections.forEach((section) => {
            const element = document.getElementById(section)
            if (element) observer.observe(element)
        })

        return () => observer.disconnect()
    }, [])

    // Smooth scroll with GSAP
    const handleNavClick = (e, target) => {
        e.preventDefault()
        setMobileMenuOpen(false)

        gsap.to(window, {
            duration: 1,
            scrollTo: { y: target, offsetY: 80 },
            ease: "power3.inOut"
        })
    }

    // Navbar animation variants
    const navVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    const linkVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 300, damping: 24 }
        }
    }

    const mobileMenuVariants = {
        hidden: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        visible: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.3,
                ease: "easeInOut",
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        }
    }

    const mobileLinkVariants = {
        hidden: { x: -20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 300, damping: 24 }
        }
    }

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' }
    ]

    return (
        <motion.nav
            ref={navRef}
            initial="hidden"
            animate="visible"
            variants={navVariants}
            className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 border-b ${scrolled
                ? 'bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-lg border-gray-300 dark:border-gray-700 shadow-lg'
                : 'bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-gray-200 dark:border-gray-800'
                }`}
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo with animation */}
                <motion.a
                    className="text-2xl font-bold tracking-tighter flex items-center gap-2 cursor-pointer"
                    href="#"
                    onClick={(e) => handleNavClick(e, '#home')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.span
                        className="text-primary"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    >
                        MD Mujahidul
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                    >
                        Islam
                    </motion.span>
                </motion.a>

                {/* Desktop Navigation */}
                <motion.div
                    className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300"
                    variants={navVariants}
                >
                    {navLinks.map((link) => (
                        <motion.div key={link.href} variants={linkVariants} className="relative">
                            <motion.a
                                className={`hover:text-primary transition-colors cursor-pointer relative ${activeSection === link.href.substring(1) ? 'text-primary' : ''
                                    }`}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {link.label}
                                {/* Animated underline */}
                                <motion.span
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                                    initial={{ scaleX: 0 }}
                                    animate={{
                                        scaleX: activeSection === link.href.substring(1) ? 1 : 0
                                    }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.a>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA and Mobile Menu Button */}
                <div className="flex items-center gap-4">
                    <motion.a
                        className="hidden sm:flex items-center gap-2 bg-secondary/10 text-secondary border border-secondary/20 px-4 py-2 rounded-full text-sm font-semibold hover:bg-secondary hover:text-white transition-all cursor-pointer"
                        href="#"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                    >
                        <i className="fa-brands fa-whatsapp"></i> WhatsApp
                    </motion.a>

                    <motion.button
                        className="md:hidden text-2xl relative"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <motion.span
                            className="material-symbols-outlined"
                            animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {mobileMenuOpen ? 'close' : 'menu'}
                        </motion.span>
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu with AnimatePresence */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={mobileMenuVariants}
                        className="md:hidden bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 overflow-hidden"
                    >
                        <motion.div className="container mx-auto px-6 py-4 flex flex-col gap-4 text-sm font-medium text-gray-600 dark:text-gray-300">
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.href}
                                    variants={mobileLinkVariants}
                                    className={`hover:text-primary transition-colors cursor-pointer py-2 px-4 rounded-lg ${activeSection === link.href.substring(1)
                                        ? 'text-primary bg-primary/10'
                                        : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                                        }`}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    whileHover={{ x: 10 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
