interface User {
    id: number,
    name: string
}

let users: User[] = []

const createUser = (name: string) => {
    const id = users.length + 1;

    const newUser = { id, name }

    users.push(newUser);

    console.log(`Usuário criado!\nNome: ${name}\nID: ${id}`);
}

const readUsers = (): void => {
    console.log("Lista de usuários");
    console.table(users);
}

const updateUser = (id: number, newName: string) => {
    const user = users.find((element) => element.id == id);

    if (user) {
        user.name = newName;
        console.log(`Usuário de ID ${id} atualizado!\nNovo nome: ${newName}`);
    } else {
        console.log(`Usuário com ID ${id} não encontrado.`)
    }
}

const deleteUser = (id: number) => {
    users = users.filter((element) => element.id !== id);
    console.log(`Usuário de ID ${id} deletado.`);
}


