import { Db, MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "";
const options = {};

let cachedClient: Db | null = null;

export const connectToDatabase = async () => {
  if (cachedClient) {
    return cachedClient;
  }
  const client = (await MongoClient.connect(uri, options)).db();
  cachedClient = client;
  return client;
};
