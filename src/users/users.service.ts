import { Injectable, } from '@nestjs/common'

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            "id": 1,
            "username": "Leanne Graham",
            "email": "Sincere@april.biz",
            "role": "INTERN",
        },
        {
            "id": 2,
            "username": "Ervin Howell",
            "email": "Shanna@melissa.tv",
            "role": "INTERN",
        },
        {
            "id": 3,
            "username": "Clementine Bauch",
            "email": "Nathan@yesenia.net",
            "role": "ENGINEER",
        },
        {
            "id": 4,
            "username": "Patricia Lebsack",
            "email": "Julianne.OConner@kory.org",
            "role": "ENGINEER",
        },
        {
            "id": 5,
            "username": "Chelsey Dietrich",
            "email": "Lucio_Hettinger@annie.ca",
            "role": "ADMIN",
        }
    ]

    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        if (role) {
            return this.users.filter(user => user.role === role)
        }

        return this.users
    }

    findOne(id: number) {
        return this.users.find(user => user.id === id)
    }

    create(user: User) {
        const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id)

        const newUser = {
            id: usersByHighestId[0].id + 1,
            ...user
        }

        this.users.push(newUser)

        return newUser
    }

    updateOne(id: number, user: OptionalUser) {
        this.users = this.users.map(u => u.id === id ? { ...u, ...user } : u)

        return this.findOne(id)
    }

    deleteOne(id: number) {
        const removedUser = this.findOne(id)

        this.users.filter(user => user.id != id)

        return removedUser
    }
}
