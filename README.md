# Pokédex

A Pokémon Pokédex built with React and the PokéAPI. The application allows users to browse, search, view detailed information, and manage their favorite Pokémon.

## Features

- Browse Pokémon with pagination
- Search Pokémon by name
- View detailed Pokémon information
- Add and remove Pokémon from favorites
- Persist favorites using `localStorage`
- Responsive design for desktop and mobile
- Client-side navigation with React Router
- Loading and error states

## Technologies

- React
- JavaScript
- React Router
- CSS
- PokéAPI
- Vite

## Project Structure

src/
├── components/
│ ├── NavBar.jsx
│ └── PokemonCard.jsx
├── contexts/
│ └── FavoritesContext.jsx
├── css/
├── pages/
│ ├── Favorites.jsx
│ ├── Home.jsx
│ └── PokemonDetails.jsx
├── services/
│ └── api.js
├── App.jsx
└── main.jsx

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone <https://github.com/Diogo1191/project-pokedex.git>
```

Navigate to the project directory:

```bash
cd pokedex-react
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will then be available at the local address provided by Vite.

## API

This project uses the [PokéAPI](https://pokeapi.co/) to retrieve Pokémon data.

## Future Improvements

- Add sorting and filtering by Pokémon type
- Improve accessibility
- Add automated tests
- Deploy the application online
