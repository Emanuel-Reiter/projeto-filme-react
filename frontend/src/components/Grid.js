import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const Table = styled.table`
  width: 100%;
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

export const Th = styled.th`
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

const Grid = ({ users, setUsers, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (user_id) => {
    await axios
      .delete("http://localhost:8800/" + user_id)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.user_id !== user_id);

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
          <Th>Email</Th>
          <Th onlyWeb>Data de Nascimento</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((item, i) => (
          <Tr key={i}>
            <Td width="25%">{item.user_name}</Td>
            <Td width="35%">{item.user_email}</Td>
            <Td width="25%" onlyWeb>
              {item.user_birth}
            </Td>
            <Td alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(item)} />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.user_id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;


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