import { db } from "./firebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";

const NEVER_USED_DATE = new Date("1900-01-01").toISOString();

export interface Image {
  src: string;
  alt: string;
}

export interface Course {
  id: string;
  lastUsed: Record<string, string>;
}

// async function storeCourse(courseId: string, lastUsed: Record<string, string>) {
//   const courseRef = doc(db, "courses", courseId);
//   await setDoc(courseRef, { lastUsed }, { merge: true });
// }

// async function getCourse(courseId: string): Promise<Course | null> {
//   const courseRef = doc(db, "courses", courseId);
//   const courseDoc = await getDoc(courseRef);
//   if (courseDoc.exists()) {
//     return courseDoc.data() as Course;
//   } else {
//     console.log("No such course!");
//     return null;
//   }
// }

// async function initializeCourse(courseId: string) {
//   const course = await getCourse(courseId);
//   if (!course) {
//     const lastUsed: Record<string, string> = {};
//     const imagesCollection = collection(db, "images");
//     const imagesSnapshot = await getDocs(imagesCollection);
//     imagesSnapshot.forEach((doc) => {
//       lastUsed[doc.data().src] = NEVER_USED_DATE;
//     });
//     await storeCourse(courseId, lastUsed);
//   }
// }

// initializeCourse("course1")
//   .then(() => console.log("Course initialized successfully"))
//   .catch((error) => console.error("Error initializing course: ", error));
