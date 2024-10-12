import { Request, Response } from "express";

interface User {
    id: number,
    name: string
}

let users: User[] = [];

export const createUser = (req: Request, res: Response): void => {
    const { name } = req.body;
    if (typeof name !== 'string' || name.trim() === '' || !name) {
        res.status(400).json({ error: "O campo 'name' é obrigatório e deve ser uma string não vazia." })
        return;
    }

    const id = users.length + 1;
    const newUser = { id, name };

    users.push(newUser)
    res.status(201).json({ message: "Usuário criado com sucesso!", user: newUser });
}

export const getUsers = (req: Request, res: Response): void => {
    res.status(200).json({ message: "Lista de usuários", users });
}

export const updateUsers = (req: Request, res: Response): void => {
    const { id } = req.params;
    const { name } = req.body;
    const user = users.find((element) => element.id == parseInt(id));

    if (user) {
        user.name = name;
        res.status(200).json({ message: `Usuário de ID ${id} atualizado!`, name })
    } else {
        res.status(404).json({ error: `Usuário com ID ${id} não encontrado.` })
    }
}

export const deleteUser = (req: Request, res: Response): void => {
    const { id } = req.params;
    const initialLength = users.length;

    users = users.filter((element) => element.id !== Number(id));

    if (users.length < initialLength) {
        res.status(200).json({ message: `Usuário de ID ${id} deletado.` });
    } else {
        res.status(404).json({ error: `Usuário de ID ${id} não encontrado.` })
    }
}