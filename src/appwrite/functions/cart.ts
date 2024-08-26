import { ID } from "appwrite";
import config from "../config";
import { database } from "../config";

export async function GetCartItems() {
    try {

        const items = await database.listDocuments(
            config.databaseId,
            config.cartCollectionId
        )

        return items.documents

    } catch (error) {
        console.log(error)
        return []
    }
}

export async function AddCartItem(product: any) {
    try {

        await database.createDocument(
            config.databaseId,
            config.cartCollectionId,
            ID.unique(),
            {
                productId: product.$id,
                title: product.title,
                price: product.price,
                description: product.description,
                image: product.image
            }
        )

    } catch (error: any) {
        console.log(error.message)
        throw error.message
    }
}

export async function RemoveCartItem(product: any) {
    try {

        await database.deleteDocument(
            config.databaseId,
            config.cartCollectionId,
            product.$id
        )

    } catch (error: any) {
        console.log(error.message)
        throw error.message
    }
}