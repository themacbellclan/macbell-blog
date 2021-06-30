import { connect, MongoClient } from "mongodb";
// const nodemailer = require("nodemailer");
// const { google } = require("googleapis");

// const oauth2Client = new google.auth.OAuth2(
//   process.env.CLIENT_ID,
//   process.env.CLIENT_SECRET,
//   process.env.REDIRECT_URI
// );
// oauth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

// async function sendMail() {
//   try {
//     // get access token from oauth2 client
//     const accessToken = await oauth2Client.getAccessToken();
//     const transporter = nodemailer.createTransport({
//       service: "Gmail",
//       auth: {
//         user: process.env.EMAIL,
//         pass: process.env.PASSWORD,
//         clientId: process.env.CLIENT_ID,
//         clientSecret: process.env.CLIENT_SECRET,
//         refreshToken: process.env.REFRESH_TOKEN,
//         accessToken: accessToken,
//       },
//     });

//     const mailData = {
//       from: email,
//       to: process.env.EMAIL,
//       subject: subject,
//       text: message,
//       html: <div>{message}</div>,
//     };

//     const result = await transporter.sendMail(mailData);
//     return result;
//   } catch (error) {
//     return error;
//   }
// }

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
