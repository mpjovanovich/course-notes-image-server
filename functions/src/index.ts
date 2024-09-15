import express, { Request, Response } from "express";
import * as functions from "firebase-functions";
// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from "firebase/firestore";

/*
// TO TEST:
// To start server, from functions directory run: "npm run serve"
// curl -X POST -H "Content-Type: application/json" -d '{"course":"SDEV120"}' http://localhost:5001/course-notes-image-server/us-central1/imageService
*/

interface ImageRequest {
  course: string;
}

interface ImageResponse {
  url: string;
  alt: string;
}

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
  const returnImage: ImageResponse = {
    url: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
    alt: "Google logo",
  };
  res.send(returnImage);
});

// Get an ImageRequest from the request body
expressApp.post("/", async (req: Request, res: Response) => {
  const imageRequest: ImageRequest = req.body;
  console.log("course:", imageRequest.course);

  const returnImage: ImageResponse = {
    url: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
    alt: "Google logo",
  };
  res.send(returnImage);
});

// Export the Express app as a Cloud Function
export const imageService = functions.https.onRequest(expressApp);
