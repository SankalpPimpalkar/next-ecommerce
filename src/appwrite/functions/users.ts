import { ID } from "appwrite";
import { account, database } from "../config";
import config from "../config";

type NewUser = {
    email: string,
    name: string,
    password: string
}

type loginUser = {
    email: string,
    password: string
}

export async function createAccount({ email, name, password }: NewUser) {
    try {
        const authUser = await account.create(ID.unique(), email, password, name)

        if (!authUser.$id) {
            throw Error("User not created! (AUTH)")
        }

        const userInDB = await database.createDocument(
            config.databaseId,
            config.usersCollectionId,
            authUser.$id,
            {
                name,
                email
            }
        )

        if (!userInDB) {
            throw Error("User not created! (DB)")
        }

        return await loginUser({ email, password })

    } catch (error: any) {
        console.log(error.message)
        throw error.message
    }
}

export async function loginUser({ email, password }: loginUser) {
    try {

        const user = await account.createEmailPasswordSession(email, password)

        if (user) {
            return true
        }

        return false

    } catch (error: any) {
        console.log(error.message)
        throw error.message
    }
}

export async function getCurrentUser() {
    try {

        return await account.get()

    } catch (error: any) {
        console.log(error.message)
        throw error.message
    }
}

export async function logout() {
    try {

        await account.deleteSession("current")

    } catch (error: any) {
        console.log(error.message)
        throw error.message
    }
}
