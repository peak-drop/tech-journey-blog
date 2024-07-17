/** @type {import('tailwindcss').Config} */
module.exports = {
    daisyui: {
        themes: [
            "luxury",
            {
                "mytheme": {
                    "primary": "#14b8a6",
                    "secondary": "#d926a9",
                    "accent": "#1fb2a6",
                    "neutral": "#e5e7eb",
                    "base-100": "#f3f4f6",
                },
            },
        ],
    },
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            keyframes: {
                hop: {
                    '0%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(3px)' },
                    '100%': { transform: 'translateY(-3px)' },
                },
            },
            animation: {
                hop: 'hop 300ms infinite'
            }
        },
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
