
# Marvel App

Welcome to the Marvel App! This project is a web application that showcases Marvel characters, movies, and comics with a responsive design and smooth user experience. Users can log in, view details about their favorite Marvel heroes, movies, and comics, and navigate through a carousel of items. The project is built using React, TypeScript, Styled Components, and custom hooks.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Custom Hooks](#custom-hooks)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static typing.
- **Styled Components**: A library for styling React components using tagged template literals.
- **React Router**: A collection of navigational components that compose declaratively with your application.
- **Slick Carousel**: A carousel/slider library for React.

## Project Structure

The project is structured as follows:

```
src/
|-- assets/           # Static assets like images and fonts
|-- components/       # Reusable components
|   |-- common/       # Common components used across different views
|   |   |-- Header/   # Header component with responsive navigation
|   |   |-- Layout/   # Layout component for consistent page layout
|   |   |-- MainCard/ # Card component used to display heroes, movies, and comics
|   |-- hooks/        # Custom hooks for fetching mock data
|-- data/             # Mock data for heroes, movies, and comics
|-- styles/           # Global and reusable styles
|-- views/            # Different views of the application
|   |-- Home/         # Home view displaying heroes
|   |-- Login/        # Login view for user authentication
|   |-- Movies/       # Movies view displaying Marvel movies
|   |-- Comics/       # Comics view displaying Marvel comics
|-- App.tsx           # Main application component
|-- index.tsx         # Entry point of the application
```

## Custom Hooks

The project utilizes custom hooks to fetch and manage mock data for heroes, movies, and comics:

- **useMockHeroes**: Fetches mock data for Marvel heroes.
- **useMockMovies**: Fetches mock data for Marvel movies.
- **useMockComics**: Fetches mock data for Marvel comics.

These hooks use the `useState` and `useEffect` hooks to simulate fetching data from an API with a delay, providing a realistic data fetching experience.

## Screenshots

### Login Screen

![Login Screen](path/to/login-screen.png)

### Dashboard

![Dashboard](path/to/dashboard.png)

### Modal Open

![Modal Open](path/to/modal-open.png)

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:

   ```sh
   git clone https://github.com/your-username/marvel-app.git
   ```

2. **Navigate to the project directory**:

   ```sh
   cd marvel-app
   ```

3. **Install dependencies**:

   ```sh
   npm install
   ```

4. **Start the development server**:

   ```sh
   npm start
   ```

5. **Open your browser** and navigate to `http://localhost:3000`.

## Conclusion

This Marvel App project demonstrates a responsive design and the use of various modern web technologies to create a smooth and interactive user experience. Feel free to explore the codebase and customize it further as per your requirements. Happy coding!

---

For any questions or suggestions, please feel free to reach out.

