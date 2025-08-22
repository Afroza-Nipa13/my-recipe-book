import { MongoClient, ServerApiVersion } from "mongodb";

export const collectionNamesObj = {
  recipeCollection: "recipeCollection",
  userCollection: "user_collection"
};

/**
 * Establishes a connection to the MongoDB database and returns a specific collection.
 * @param {string} collectionName The name of the collection to return.
 * @returns {Promise<import("mongodb").Collection>} A Promise that resolves to the specified collection.
 */
async function dbConnect(collectionName) {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("Missing MONGODB_URI environment variable.");
  }

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    // Connect the client to the server (await is crucial here)
    await client.connect();

    // Select the database and return the specified collection
    const db = client.db(process.env.DB_NAME);
    return db.collection(collectionName);
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    throw error;
  }
}

export default dbConnect;