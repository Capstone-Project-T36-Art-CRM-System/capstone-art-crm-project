import { doc, getDoc, collection, query, where, getDocs, updateDoc, deleteDoc } from 'firebase/firestore';
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
    console.log('HER!!')
    const artWorkDoc = doc(db, "artworks", artworkId);
    await deleteDoc(artWorkDoc);
};


// const artworkList = [
//     {
//         "id": "A30",
//         "title": "Kuban Still Life",
//         "cover": "kuban-still-life",
//         "material": "Oil on Canvas",
//         "height": 80,
//         "width": 100,
//         "year": 2012,
//         "price": 4600,        
//         "author": "Julia Kudina",
//         "description": "",
//         "status": "available",
//         "created": 1627111128365,
//     },
//     {
//         "id": "A31",
//         "title": "Shining Light",
//         "cover": "shining-light",
//         "material": "Oil on Canvas",
//         "height": 60,
//         "width": 60,
//         "year": 2020,
//         "price": 3000,
//         "author": "Julia Kudina",
//         "description": "Who doesn't wonder what his city looked like 100 years ago? Looking at the picture plunges into the past... It feels like the building is shining like gold.",
//         "status": "available",
//         "created": 1627111128365,
//     },
//     {
//         "id": "A37",
//         "title": "Sunflowers",
//         "cover": "sunflowers",
//         "material": "Pencil on Paper",
//         "height": 62,
//         "width": 93,
//         "year": 2015,
//         "price": 6000,        
//         "author": "Julia Kudina",
//         "description": "You look at it - you won't get enough of it. Sunflower is a big and beautiful flower. The middle of it is black, and the petals are yellow, like the sun. No wonder he was given such a name. The sunflower is also popularly called the flower of the sun.",
//         "status": "available",
//         "created": 1627111128365,
//     },
//     {
//         "id": "A51",
//         "title": "Evening",
//         "cover": "evening",
//         "material": "Oil on Canvas",
//         "height": 100,
//         "width": 70,
//         "year": 2015,
//         "price": 8300,
//         "author": "Julia Kudina",
//         "description": "The painting is made in oil on canvas and strikes the viewer's eye with powerful energy. It's like she's plunging back into the past. In a living house, people sleep peacefully and serenely, only the light of a lantern looks into their windows.",
//         "status": "available",
//         "created": 1627111128365,
//     },

//     {
//         "id": "A52",
//         "title": "Autum Fruits",
//         "cover": "autum-fruits",
//         "material": "Oil on Canvas",
//         "height": 120,
//         "width": 160,
//         "year": 2017,
//         "price": 6000,
//         "author": "Julia Kudina",
//         "description": "This painting combines landscape and still life at the same time. The fruits of the golden autumn give you the opportunity to admire the latest delicacies of the warm time and once again marvel at the number of shades in the picture.",
//         "status": "sold",
//         "created": 1627111128365,
//     },
//     {
//         "id": "A102",
//         "title": "Solar Vision",
//         "cover": "solar-vision",
//         "material": "Oil on Canvas",
//         "height": 100,
//         "width": 100,
//         "year": 2021,
//         "price": 1800,
//         "author": "Julia Kudina",
//         "description": "The moment when the bright sun shines through the window, and the gray unremarkable room turns into a game of sunlight.",
//         "status": "available",
//         "created": 1627111128365,
//     },
//     {
//         "id": "A103",
//         "title": "Reflection",
//         "cover": "reflection",
//         "material": "Oil on Canvas",
//         "height": 20,
//         "width": 30,
//         "year": 2020,
//         "price": 300,
//         "author": "Julia Kudina",
//         "description": "A warm summer day, a walk on the shore of the lake, the incredible beauty of nature and its reflection in the clear water. The central element of the painting is white sailboats. There is a small house on the shore. Somehow there is a desire to look at this picture again and again...",
//         "status": "sold",
//         "created": 1627111128365,
//     },
// ]