import { UnprocessableEntity } from 'http-errors'

const users = []
// Criar uma conta
// Nome, Email, CPF
//  retorna status 201 caso criada com sucesso, e erro caso já esteja usando email ou CPF

interface ICreateUser {
    name: string
    email: string
    document: string
}

export const handler = async (event) => {
    const { name, email, document } = JSON.parse(event.body) as ICreateUser || {}

    console.log(event.body, name);

    if(!name || !email || !document)
        throw new UnprocessableEntity('Check required fields')

    const user = {
        name,
        email,
        document,
        statement: [],
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
    }

    users.push(user)

    console.log(user);

    return {
        statusCode: 201,
    }
}