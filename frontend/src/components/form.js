import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 20px hsla(240, 75%, 15%, 0.25);
  border-radius: 10px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form = ({ getUsers, onEdit, setOnEdit }) => {
    const ref = useRef();

    useEffect(() => {
        if (onEdit) {
            const user = ref.current;

            user.user_name.value = onEdit.user_name;
            user.user_birth.value = onEdit.user_birth;
            user.user_email.value = onEdit.user_email;
            user.user_password.value = onEdit.user_password;
        }
}, [onEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = ref.current;

        if (
            !user.user_name.value ||
            !user.user_birth.value ||
            !user.user_email.value ||
            !user.user_password.value
        ) {
            return toast.warn("Preencha todos os campos!");
        }

        if (onEdit) {
            await axios
            .put("http://localhost:8800/" + onEdit.user_id, {
                user_name: user.user_name.value,
                user_birth: user.user_birth.value,
                user_email: user.user_email.value,
                user_password: user.user_password.value,
            })
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data));
        } else {
            await axios
            .post("http://localhost:8800", {
                user_name: user.user_name.value,
                user_birth: user.user_birth.value,
                user_email: user.user_email.value,
                user_password: user.user_password.value,
            })
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data));
        }

    user.user_name.user_name = "";
    user.user_birth.value = "";
    user.user_email.value = "";
    user.user_password.value = "";

    setOnEdit(null);
    getUsers();
};

    return (
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea>
                <Label>Nome</Label>
                <Input name="user_name" />
            </InputArea>

            <InputArea>
                <Label>Data de Nascimento</Label>
                <Input name="user_birth" type="date" />
            </InputArea>

            <InputArea>
                <Label>E-mail</Label>
                <Input name="user_email" type="email" />
            </InputArea>

            <InputArea>
                <Label>Senha</Label>
                <Input name="user_password" />
            </InputArea>
        

            <Button type="submit">Salvar</Button>
        </FormContainer>
    );
};

export default Form;

/*
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";

const FormContainer = styled.form`
    width: 100%;
    max-width: 800px;

    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;

    background-color: hsl(200, 25%, 90%);

    padding: 20px;

    box-shadow: 0px 0px 10px hsla(000, 00%, 00%, .5);
    
    border-radius: 10px;
`;

const InputArea = styled.div`
    display: flex;
    felx-direction: column;
`;

const Input = styled.input`
    width: 120px;
    height: 40px;

    padding: 0 10px;

    border: 1px solid black;
    border-radius: 5px;    
`;

const Label = styled.label``;

const Button = styled.button`
    height: 40px;

    padding: 10px;

    background-color: hsl(220, 75%, 50%);

    border-radius: 5px;
    border: none;

    cursor: pointer;
`;

const Form = ({ getUsers, onEdit, setOnEdit }) => {
    const ref = useRef();

    useEffect(() => {
        if(onEdit) {
            const user = ref.current;

            user.user_name.value = onEdit.user_name;
            user.user_birth.value = onEdit.user_birth;
            user.user_email.value = onEdit.user_email;
            user.user_password.value = onEdit.userPassword;
        }
    }, [onEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = ref.current;

        if (
            !user.user_name.value ||
            !user.user_birth.value ||
            !user.user_email.value ||
            !user.user_password.value
            ) {
                return toast.warn("Preencha todos os campos antes de submeter o formulário.");
            }

        if (onEdit) {
            await axios
                .put("http://localhost:8800/" + onEdit.id, {
                    user_name: user.user_name.value,
                    user_birth: user.user_birt.value,
                    user_email: user.user_email.value,
                    user_password: user.user_password.value,
                })
                .then(({ data }) => toast.success(data))
                .catch(({ data }) => toast.error(data));
        }else {
            await axios
                .post("http://localhost:8800", {
                    user_name: user.user_name.value,
                    user_birth: user.user_birt.value,
                    user_email: user.user_email.value,
                    user_password: user.user_password.value,
                })
                .then(({ data }) => toast.success(data))
                .catch(({ data }) => toast.error(data));
        }

        user.user_name.value = "";
        user.user_birt.value = "";
        user.user_email.value = "";
        user.user_password.value = "";

        setOnEdit(null);
        getUsers();
    };

    return(
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea>
                <Label>Nome</Label>
                <Input name="user_name"/>
            </InputArea>

            <InputArea>
                <Label>Data de nascimneto</Label>
                <Input name="user_birth" type="date"/>
            </InputArea>

            <InputArea>
                <Label>E-mail</Label>
                <Input name="user_email" type="email"/>
            </InputArea>

            <InputArea>
                <Label>Senha</Label>
                <Input name="user_password"/>
            </InputArea>

            <Button type="submit">Salvar</Button>

        </FormContainer>
    );
};

export default Form;
*/