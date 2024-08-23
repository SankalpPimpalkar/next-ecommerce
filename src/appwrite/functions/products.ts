import { ID } from "appwrite";
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

        console.log(uploadedImage)

        const product = await database.createDocument(
            config.databaseId,
            config.productsCollectionId,
            ID.unique(),
            {
                title,
                price,
                description,
                category,
                imageId: uploadedImage.$id
            }
        )
        console.log(product)

        return product

    } catch (error: any) {
        console.log(error)
        throw error.message
    }
}