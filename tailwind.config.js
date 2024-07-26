import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                "brand-color": "#3B7A9E",
                "brand-color-secondary": "#2E8BC7",
                "dark": "#020E12",
                "dark-secondary": "#566468",
                'light': '#E5E5E5',
                'light-secondary': '#898989'
            },
            backgroundColor: {
                'light': '#F5F8FA',
                'dark': '#1C2B36',
                'gray': '#F0F0F0'
            }
        },
    },

    plugins: [forms],
};
