import { connect, MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, email, subject, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !firstName ||
      firstName.trim() === "" ||
      !lastName ||
      lastName.trim() === "" ||
      !subject ||
      subject.trim() === "" ||
      !message ||
      message.trim === ""
    ) {
      res.status(422), json({ message: "Form filled out incorrectly" });
      return;
    }

    // store in database
    const newMessage = {
      firstName,
      lastName,
      email,
      subject,
      message,
    };

    let client;

    const connectionString = process.env.MONGODB_CONNECTION;

    try {
      client = await MongoClient.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Could not connect to database" });
      return;
    }

    const db = client.db();

    try {
      const result = await db
        .collection("contact-messages")
        .insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      res.status(500).json({ message: "Could not add message to database" });
      return;
    }

    client.close();

    res.status(201).json({ message: "Messaged stored", message: newMessage });
  }
}

export default handler;
