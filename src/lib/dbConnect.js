import { MongoClient, ServerApiVersion } from "mongodb";

// Declare global variables for the client and client promise to avoid repeated connections
let client;
let clientPromise;

export const collectionNamesObj = {
  recipeCollection: "recipeCollection",
  userCollection: "user_collection",
  blogsCollection: "blogsCollection",
};

/**
 * Establishes a single, shared connection to the MongoDB database and returns a specific collection.
 * @param {string} collectionName The name of the collection to return.
 * @returns {Promise<import("mongodb").Collection>} A Promise that resolves to the specified collection.
 */
async function dbConnect(collectionName) {
  const uri = process.env.MONGODB_URI;
  const dbName = process.env.DB_NAME;

  if (!uri) {
    throw new Error("Missing MONGODB_URI environment variable.");
  }

  // Use a singleton pattern to reuse the client connection
  if (!clientPromise) {
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    // Store the connection promise
    clientPromise = client.connect();
  }

  try {
    const client_connected = await clientPromise;
    const db = client_connected.db(dbName);
    return db.collection(collectionName);
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    // You might want to clear the promise on failure
    clientPromise = undefined;
    throw error;
  }
}

export default dbConnect;