import { MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts";

const client = new MongoClient();

client.connectWithUri("mongodb://root:root@localhost:27017");

export const db = client.database("example");
