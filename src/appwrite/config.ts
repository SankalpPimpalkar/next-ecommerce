import { Client, Account, Databases, Storage } from "appwrite";

const config = {
    endpoint: String(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT),
    projectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
    databaseId: String(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID),
    usersCollectionId: String(process.env.NEXT_PUBLIC_APPWRITE_USERS_ID),
    productsCollectionId: String(process.env.NEXT_PUBLIC_APPWRITE_PRODUCTS_ID),
    categoriesCollectionId: String(process.env.NEXT_PUBLIC_APPWRITE_CATEGORIES_ID),
    cartCollectionId: String(process.env.NEXT_PUBLIC_APPWRITE_CART_ID),
    storageId: String(process.env.NEXT_PUBLIC_APPWRITE_STORAGE_ID),
}
export default config;

const client = new Client()
client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)

export const account = new Account(client)
export const database = new Databases(client)
export const storage = new Storage(client)