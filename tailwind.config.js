/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        colors: {
            primary: '042825',
            secondary: '#F76C5E',
            tertiary: '#89D5CF',
            accent: '167D6E',
            light: '#EFF0F0',
            dark: '#1C1C1C',
            white: '#FFFFFF',
            black: '#000000',
        },
        fontSize: {
            xs: ['0.75rem'],
            s: ['1.25rem'],
            m: ['2rem', { letterSpacing: '-0.01em' }],
            l: ['2.5rem', { letterSpacing: '-0.015em' }],
            xl: ['3.5rem', { lineHeight: 1.2, letterSpacing: '-0.02em' }],
            xxl: ['4.5rem', { lineHeight: 1.2, letterSpacing: '-0.03em' }],
        },
        fontFamily: {
            krona: ['var(--font-krona-one)'],
            space: ['var(--font-space-grotesk)'],
        },
        extend: {
            spacing: {
                28: '7rem',
            },
        },
    },
    plugins: [],
}
