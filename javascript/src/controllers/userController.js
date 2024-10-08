let users = [];

const createUser = (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: "O campo 'name' é obrigatório." });

    const id = users.length + 1;
    const newUser = { id, name };

    users.push(newUser)
    res.status(201).json({ message: "Usuário criado com sucesso!", user: newUser });

}

const getUsers = (req, res) => {
    res.status(200).json({ message: "Lista de usuários", users });
}

const updateUser = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const user = users.find((element) => element.id == id);

    if (user) {
        user.name = name;
        res.status(200).json({ message: `Usuário de ID ${id} atualizado!`, name })
    } else {
        res.status(404).json({ error: `Usuário com ID ${id} não encontrado.` })
    }
}

const deleteUser = (req, res) => {
    const { id } = req.params;
    const initialLength = users.length;

    users = users.filter((element) => element.id !== Number(id));

    if (users.length < initialLength) {
        res.status(200).json({ message: `Usuário de ID ${id} deletado.` });
    } else {
        res.status(404).json({ error: `Usuário de ID ${id} não encontrado.` })
    }
}

module.exports = {
    createUser,
    getUsers,
    updateUser,
    deleteUser
}