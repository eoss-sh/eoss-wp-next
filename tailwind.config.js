/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        colors: {
            primary: '#042825',
            secondary: '#F76C5E',
            tertiary: '#89D5CF',
            accent: '#167D6E',
            light: '#EFF0F0',
            dark: '#1C1C1C',
            white: '#FFFFFF',
            black: '#000000',
        },
        fontSize: {
            xs: ['0.75rem', { lineHeight: 1.6 }],
            sm: ['1.125rem', { lineHeight: 1.6 }],
            md: ['2rem', { lineHeight: 1.15, letterSpacing: '-0.022em' }],
            lg: ['2.75rem', { lineHeight: 1.15, letterSpacing: '-0.022em' }],
            xl: ['3.5rem', { lineHeight: 1.15, letterSpacing: '-0.022em' }],
            xxl: ['4.5rem', { lineHeight: 1.15, letterSpacing: '-0.022em' }],
        },
        fontFamily: {
            krona: ['var(--font-krona-one)'],
            space: ['var(--font-space-grotesk)'],
        },
        spacing: {
            0: '0',
            1: '0.25rem',
            2: '0.5rem',
            3: '1rem',
            4: '1.5rem',
            5: '2rem',
            6: '2.5rem',
            7: '3rem',
            8: '4rem',
            9: '5rem',
            10: '10rem',
            11: '20rem',
        },
        extend: {
            maxWidth: {
                '3/4': '75%',
            },
        },
    },
    plugins: [],
}
