import GlobalStyle from "./styles/global";
import styled from "styled-components";
import MovieCard from "./components/MovieCard.js";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h1``;

function UserPage() {
  const [movies, setMovies] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getMovies = async () => {
    try {
      const res = await axios.get("http://localhost:8800/movies");
      setMovies(res.data.sort((a, b) => (a.movie_title > b.movie_title ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, [setMovies]);

  return (
    <>
      <Container>
        <Title>Filmes sugeridos</Title>
        <MovieCard setOnEdit={setOnEdit} movies={movies} setMovies={setMovies} />
      </Container>

      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />

      <GlobalStyle />
    </>
  );
}

export default UserPage;