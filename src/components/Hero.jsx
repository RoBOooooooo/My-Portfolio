import heroImage from "../assets/images/profile-avatar.jpg";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden" id="home">
            <div className="hero-glow"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-5xl lg:text-7xl font-bold mb-4 tracking-tight">
                            <span className="text-primary block mb-2">
                                MD Mujahidul Islam
                            </span>
                            <span className="text-3xl lg:text-5xl text-gray-800 dark:text-white font-semibold">
                                MERN Stack Developer
                            </span>
                        </h1>

                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            I’m MD Mujahidul Islam, a passionate MERN Stack
                            Developer with hands-on experience in building
                            responsive, high-performance web applications using
                            MongoDB, Express.js, React, Node.js and Next.js
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                            <a
                                className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-medium transition-transform active:scale-95 flex items-center gap-2"
                                href="#projects"
                            >
                                View My Work{" "}
                                <span className="material-symbols-outlined text-sm">
                                    arrow_downward
                                </span>
                            </a>
                            <a
                                className="px-8 py-3 bg-transparent border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full font-medium transition-colors flex items-center gap-2"
                                href="#"
                            >
                                <span className="material-symbols-outlined text-sm">
                                    download
                                </span>{" "}
                                View Resume
                            </a>
                        </div>
                        <div className="flex justify-center lg:justify-start gap-4">
                            <a
                                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-surface-dark border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:text-primary hover:border-primary transition-all"
                                href="https://github.com/RoBOooooooo"
                            >
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a
                                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-surface-dark border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:text-primary hover:border-primary transition-all"
                                href="https://www.linkedin.com/in/mdmujahidulislamarif/"
                            >
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <div className="relative w-full max-w-md mx-auto">
                            {/* Animated background elements */}
                            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

                            {/* Main image container */}
                            <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl bg-gradient-to-br from-gray-600 via-green-700 to-gray-700">
                                <img
                                    alt="MD Mujahidul Islam - Professional Portrait"
                                    className="w-full h-full object-cover relative z-10 hover:scale-105 transition-transform duration-700"
                                    src={heroImage}
                                    onError={(e) => {
                                        e.target.src =
                                            "https://via.placeholder.com/500x500/6366f1/ffffff?text=MD+Mujahidul+Islam";
                                    }}
                                />

                                {/* Overlay gradient for better contrast */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-20"></div>
                            </div>

                            {/* Floating decorative elements */}
                            <div className="absolute top-8 right-8 w-4 h-4 bg-primary rounded-full animate-bounce delay-300"></div>
                            <div className="absolute bottom-8 left-8 w-3 h-3 bg-secondary rounded-full animate-bounce delay-700"></div>
                            <div className="absolute top-1/2 -right-2 w-2 h-2 bg-primary/60 rounded-full animate-pulse"></div>
                            <div className="absolute bottom-1/4 -left-2 w-4 h-4 bg-secondary/60 rounded-full animate-pulse delay-500"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
