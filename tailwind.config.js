/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#042825',
                secondary: '#F76C5E',
                accent: '#89D5CF',
                light: '#EFF0F0',
                black: '#000000',
            },
            spacing: {
                28: '7rem',
            },
            letterSpacing: {
                tighter: '-.04em',
            },
            lineHeight: {
                tight: 1.2,
            },
            fontSize: {
                base: '1.375rem',
                '4xl': '2rem',
                '5xl': '2.5rem',
                '6xl': '3.5rem',
                '7xl': '4.5rem',
            },
            fontFamily: {
                sans: ['var(--font-hanken)'],
                mono: ['var(--font-jb)'],
            },
            boxShadow: {
                small: '0 5px 10px rgba(0, 0, 0, 0.12)',
                medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
            },
        },
    },
    plugins: [],
}
