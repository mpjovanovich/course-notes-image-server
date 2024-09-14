import express, { Request, Response } from "express";
import * as functions from "firebase-functions";
// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
// };

// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);

const expressApp = express();
expressApp.use(express.json());

// Basic test endpoint
expressApp.get("/", (req: Request, res: Response) => {
  res.send("Hello from Firebase!");
});

// expressApp.get("/images", async (req: Request, res: Response) => {
//   try {
//     const snapshot = await getDocs(collection(db, "images"));
//     const images = snapshot.docs.map((doc) => doc.data());
//     res.json(images);
//   } catch (error) {
//     console.error("Error getting images:", error);
//     res.status(500).json({ error: "Failed to get images" });
//   }
// });

// Export the Express app as a Cloud Function
export const imageService = functions.https.onRequest(expressApp);

// TEST:
// To start server, from functions directory run: "npm run serve"
// curl http://localhost:5001/course-notes-image-server/us-central1/imageService
