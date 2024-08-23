import config from "../config";
import { database } from "../config";

export async function GetCategories() {
    try {

        const categories = await database.listDocuments(
            config.databaseId,
            config.categoriesCollectionId,
        )

        return categories.documents;

    } catch (error) {
        console.log(error)
        return []
    }
}