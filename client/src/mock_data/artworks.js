import { doc, getDoc, collection, query, getDocs, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';

export function getArtworkList() {
    const collectionRef = query(collection(db, "artworks"));

    return getDocs(collectionRef);
}

export function getArtworkrbyId(artworkId) {
    const docRef = doc(db, "artworks", artworkId);

    return getDoc(docRef)
}

export const updateArtwork = async (artworkId, newFields) => {
    const artWorkDoc = doc(db, "artworks", artworkId);
    await updateDoc(artWorkDoc, newFields);
};

export const deleteArtwork = async (artworkId) => {
    const artWorkDoc = doc(db, "artworks", artworkId);
    await deleteDoc(artWorkDoc);
};