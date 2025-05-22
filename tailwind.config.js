// tailwind.config.js
module.exports = {
    darkMode: 'class',
    content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
    theme: {
      extend: {
        animation: {
        "spin-slow": "spin 2s linear infinite",
        "spin-fast": "spin 1s linear infinite",
                    },
        colors: {
          primary: '#7e22ce', 
          darkBg: '#1e1e2f',
        },
      },
    },
    plugins: [],
  }
  