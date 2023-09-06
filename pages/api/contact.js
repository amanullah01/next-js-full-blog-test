import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const newMessage = { name, email, message };

    let client;
    try {
      client = await MongoClient.connect("mongodb://127.0.0.1:27017/blog-test");
    } catch (error) {
      res.status(500).json({ message: "Connection failed" });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing failed" });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: "Successfully stored message", newMessage: newMessage });
  }
};

export default handler;
