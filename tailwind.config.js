/**necessary if you want to customize Tailwind CSS settings, specify which files Tailwind should scan for class names, or add plugins.*/
/**ensures Tailwind only includes styles actually used in your HTML and JS files, making your CSS smaller and more efficient. */

/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {},
    },
    plugins: [],
}