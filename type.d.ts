type Role = 'INTERN' | 'ENGINEER' | 'ADMIN'

interface User {
    id: number
    username: string
    email: string
    role: Role
}

type Partial<T> = { [P in keyof T]?: T[P] }

interface OptionalUser extends Partial<User> {
    id?: never
}