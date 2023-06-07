import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import CloudButtomImg from "../img/button_cloud_export.gif"

const Table = styled.table`
  width: 60%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 20px hsla(240, 75%, 15%, 0.25);
  border-radius: 10px;
  max-width: 800px;
  margin: 20px auto;
  word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const H2 = styled.h2`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const H4 = styled.h4`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

const DivLeft = styled.div`

`;

const DivRight = styled.div`

`;

const CloudButton = styled.button`
  background-image: url(${(CloudButtomImg)})

  height 40px;
  width: auto;
`;

const MovieCard = ({ movies, /*setMovies, setOnEdit*/ }) => {
  /*const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (movie_id) => {
    await axios
      .delete("http://localhost:8800/" + movie_id)
      .then(({ data }) => {
        const newArray = movies.filter((movies) => movies.movie_id !== movie_id);

        setMovies(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };*/

  return (
    <Table>
      <Thead>
        <Tr>
          <H2>Titúlo</H2>
          <H4>Sinopse</H4>
          <H4 onlyWeb>Duração</H4>
          <H4 onlyWeb>Nota</H4>
        </Tr>
      </Thead>
      <Tbody>
        {movies.map((movieitem, k) => (
          <Tr key={k}>
            <Td width="25%">{movieitem.movie_title}</Td>
            <Td width="25%">{movieitem.movie_synopsis}</Td>
            <Td width="25%" onlyWeb>{movieitem.movie_length}</Td>
            <Td width="25%" onlyWeb>{movieitem.movie_score}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default MovieCard;


/*
import React from "react";
import axios from "axios";
import styled from "styled-components";

import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const Table = styled.table`
    width: 100%;
    max-width: 800px;

    padding: 20px;
    margin: 20px auto;

    background-color: hsl(200, 25%, 90%);

    border-radius: 10px;

    box-shadow: 0px 0px 10px hsla(000, 00%, 00%, .5);

    word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
    text-align: center;
    border-bottom: inset;
    padding-bottom: 5px;

    @media (max-width: 500px) {
        ${(props) => props.onlyWeb && "display: none"}
    }
`;

export const Td = styled.td`
    width: ${(props) => (props.width ? props.width: "auto")}; 

    pading-top: 15px;
    
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};

    @media (max-width: 500px) {
        ${(props) => props.onlyWeb && "display: none"}
    }

`;

export const Tbody = styled.tbody``;

const Grid = ({ users, setUsers, setOnEdit }) => {

    const handleEdit = (item) => {
        setOnEdit(item);
    };

    const handleDelete = async (id) => {
        await axios
            .delete("http://localhost:8800/" + id)
            .then(({ data }) => {
                const newArray = users.filter((user) => user.id !== id);

                setUsers(newArray);
                toast.success(data);
            })
            .catch(({ data }) => toast.error(data));

        setOnEdit(null);
    };

    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>E-mail</Th>
                    <Th onlyWeb>Data de nascimento</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                {users.map((item, i) => (
                    <Tr key={i}>
                        <Td width="30%">{item.user_name}</Td>
                        <Td width="30%">{item.user_email}</Td>
                        <Td width="20%" onlyWeb>{item.user_birth}</Td> 
                        <Td alignCenter widt="5%">
                            <FaEdit onClick={() => handleEdit(item)}/>
                        </Td> 
                        <Td alignCenter widt="5%">
                            <FaTrash onClick={() => handleDelete(item.id)} />
                        </Td> 
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
};

export default Grid;
*/