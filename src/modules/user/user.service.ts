import { Injectable } from '@nestjs/common';
import { RegisterDto } from '../auth/dto/auth.dto';

export interface User extends RegisterDto {
    id: number;
}

@Injectable()
export class UserService {
    private users: User[] = [];
    private nextId = 1;

    findAll() {
        return this.users;
    }

    findOne(username: string) {
        const user = this.users.find((user) => user.username === username);
        if (!user) {
            return { message: 'Usuário não encontrado' };
        }
        return user;
    }

    createUser(authDto: RegisterDto) {
        const existingUserUsername = this.users.find((user) => user.username === authDto.username);
        const existingUserEmail = this.users.find((user) => user.email === authDto.email);

        if (existingUserUsername) {
            return { message: 'Nome de usuário já está em uso' };
        }

        if (existingUserEmail) {
            return { message: 'Email já está em uso' };
        }

        const newUser: User = { id: this.nextId++, ...authDto };
        this.users.push(newUser);
        return { message: 'Usuário criado com sucesso', user: authDto };
    }

    updateUser(username: string, authDto: RegisterDto) {
        const existingUserIndex = this.users.findIndex((user) => user.username === username);

        if (existingUserIndex > -1) {
            this.users[existingUserIndex] = { ...this.users[existingUserIndex], ...authDto };
            return { message: 'Usuário atualizado com sucesso', user: this.users[existingUserIndex] };
        } else {
            return { message: 'Usuário não encontrado' };
        }
    }

    remove(id: number) {
        const index = this.users.findIndex((user) => user.id === id);
        if (index === -1) {
            return { message: `Usuário com id #${id} não encontrado` };
        }
        const removed = this.users.splice(index, 1)[0];
        return { message: `Usuário #${id} removido com sucesso`, user: removed };
    }
}