let users = []

const createUser = (name) => {
    const id = users.length + 1;

    if (!name) console.log("Erro: o campo 'name' é obrigatório.")

    const newUser = { id, name }

    users.push(newUser);

    console.log(`Usuário criado!\nNome: ${name}\nID: ${id}`);
}

const readUsers = () => {
    console.log("Lista de usuários");
    console.table(users);
}

const updateUser = (id, newName) => {
    const user = users.find((element) => element.id == id);

    if (user) {
        user.name = newName;
        console.log(`Usuário de ID ${id} atualizado!\nNovo nome: ${newName}`);
    } else {
        console.log(`Usuário com ID ${id} não encontrado.`)
    }
}

const deleteUser = (id) => {
    users = users.filter((element) => element.id !== id);
    console.log(`Usuário de ID ${id} deletado.`);
}