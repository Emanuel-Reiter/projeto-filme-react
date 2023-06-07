import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM tb_user";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const q = "INSERT INTO tb_user(`user_name`, `user_birth`, `user_email`, `user_password`) VALUES(?)";

  const values = [
    req.body.user_name,
    req.body.user_birth,
    req.body.user_email,
    req.body.user_password,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário criado com sucesso.");
  });
};

export const updateUser = (req, res) => {
  const q = "UPDATE tb_user SET `user_name` = ?, `user_birth` = ?, `user_email` = ?, `user_password` = ? WHERE `user_id` = ?";

  const values = [
    req.body.user_name,
    req.body.user_birth,
    req.body.user_email,
    req.body.user_password,
  ];

  db.query(q, [...values, req.params.user_id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM tb_user WHERE `user_id` = ?";

  db.query(q, [req.params.user_id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário deletado com sucesso.");
  });
};

export const getMovies = (res) => {

  // var randomMovie = (Math.floor(Math.random() * 20));

  const q = "SELECT `movie_title`, `movie_sysonpsis`, `movie_length` FROM `tb_movie`";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};


/*import { db } from "../db.js";

export const getUsers = (_, res) => {
    const q = "select * from tb_user";

    db.query(q, (err, data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addUser = (req, res) => {
    const q = "insert into tb_user(`user_name`, `user_birth`, `user_email`, `user_password`) values(?)";

    const values = [
        req.body.user_name,
        req.body.user_birth,
        req.body.user_email,
        req.body.user_password,
    ];

    db.query(q, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Usuário criado com sucesso!");
    });
};

export const updateUser = (req, res) => {
    const q = "update tb_user set `user_name` = ?, `user_birth` = ?, `user_email` = ?, `user_password` = ? where `user_id` = ?";

    const values = [
        req.body.user_name,
        req.body.user_birth,
        req.body.user_email,
        req.body.user_password,
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Informações do usuário alterados com sucesso!");
    });
};

export const deleteUser = (req, res) => {
    const q = "delete from tb_user where `user_id =` ?";

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Usuário excluído com sucesso!");
    });
};*/