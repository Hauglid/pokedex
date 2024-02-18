/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
        4: "4 4 0%",
      },
      colors: {
        bug: "#A8B820",
        dark: "#705848",
        dragon: "#7038F8",
        electric: "#F8D030",
        fairy: "#EE99AC",
        fighting: "#C03028",
        fire: "#F08030",
        flying: "#A890F0",
        ghost: "#705898",
        grass: "#78C850",
        ground: "#E0C068",
        ice: "#98D8D8",
        normal: "#A8A878",
        poison: "#A040A0",
        psychic: "#F85888",
        rock: "#B8A038",
        steel: "#B8B8D0",
        water: "#6890F0",
      },
    },
  },
  plugins: [],
};
