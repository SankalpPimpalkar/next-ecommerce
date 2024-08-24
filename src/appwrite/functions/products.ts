import { ID, Query } from "appwrite";
import config from "../config";
import { database, storage } from "../config";

type AddProductForm = {
    title: string,
    description: string,
    price: string,
    category: string,
    image: any
}

export async function AddProductInDB(formData: AddProductForm) {
    try {

        const { title, price, description, category, image } = formData

        const uploadedImage = await storage.createFile(
            config.storageId,
            ID.unique(),
            image
        )

        const imagePreview = storage.getFileView(
            config.storageId,
            uploadedImage.$id
        )

        const product = await database.createDocument(
            config.databaseId,
            config.productsCollectionId,
            ID.unique(),
            {
                title,
                price,
                description,
                category,
                image: imagePreview
            }
        )

        return product

    } catch (error: any) {
        console.log(error)
        throw error.message
    }
}

export async function GetAllProducts(limit?: number) {
    try {
        const resp = await database.listDocuments(
            config.databaseId,
            config.productsCollectionId
        )

        return resp.documents

    } catch (error: any) {
        console.log(error.message)
        return [];
    }
}

export async function GetProductById(productId: string) {
    try {

        return await database.getDocument(
            config.databaseId,
            config.productsCollectionId,
            productId
        )

    } catch (error: any) {
        console.log(error.message)
        throw error.message
    }
}

export async function GetProductsByCategoryName(categoryName: string) {
    try {

        const resp =  await database.listDocuments(
            config.databaseId,
            config.productsCollectionId,
            [
                Query.equal('category', categoryName)
            ]
        )

        return resp.documents

    } catch (error: any) {
        console.log(error.message)
        throw error.message
    }
}

