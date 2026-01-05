/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#6d28d9', // Purple primary
                secondary: '#10b981', // Emerald accent
                'background-light': '#f3f4f6',
                'background-dark': '#0f172a',
                'surface-dark': '#1e293b',
                'surface-light': '#ffffff',
                'text-light': '#1f2937',
                'text-dark': '#e2e8f0',
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            },
            borderRadius: {
                DEFAULT: '0.5rem',
                'xl': '1rem',
                '2xl': '1.5rem',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}
