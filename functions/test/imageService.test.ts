// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from "firebase/firestore";
// import { vi } from 'vitest';

// // Mock Firebase
// vi.mock('firebase/app');
// vi.mock('firebase/firestore');

// const mockInitializeApp = vi.fn();
// const mockGetFirestore = vi.fn();
// const mockCollection = vi.fn();
// const mockGetDocs = vi.fn();

// vi.mocked(initializeApp).mockImplementation(mockInitializeApp);
// vi.mocked(getFirestore).mockImplementation(mockGetFirestore);
// vi.mocked(collection).mockImplementation(mockCollection);
// vi.mocked(getDocs).mockImplementation(mockGetDocs);

// describe('Image Service', () => {
//   beforeEach(() => {
//     mockInitializeApp.mockReturnValue({});
//     mockGetFirestore.mockReturnValue({});
//     mockCollection.mockReturnValue({});
//   });

//   it('should fetch images from Firebase', async () => {
//     const mockImages = [
//       { src: 'https://example.com/image1.jpg', alt: 'Image 1' },
//       { src: 'https://example.com/image2.jpg', alt: 'Image 2' },
//     ];

//     mockGetDocs.mockResolvedValue({
//       forEach: (callback: Function) => {
//         mockImages.forEach((image) => callback({ data: () => image }));
//       },
//     });

//     const images = await fetchImagesFromFirebase();
//     expect(images).toEqual(mockImages);
//   });
// });

// // Function to fetch images from Firebase
// async function fetchImagesFromFirebase() {
//   const db = getFirestore();
//   const imagesCollection = collection(db, 'images');
//   const imagesSnapshot = await getDocs(imagesCollection);
//   const images: { src: string; alt: string }[] = [];
//   imagesSnapshot.forEach((doc) => {
//     images.push(doc.data() as { src: string; alt: string });
//   });
//   return images;
// }
