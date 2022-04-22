import { doc, getDoc, collection, query, getDocs, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';

export function getCustomerList() {
    const collectionRef = query(collection(db, "customers"));

    return getDocs(collectionRef);
}

export function getCustomerbyId(customerId) {
    const docRef = doc(db, "customers", customerId);

    return getDoc(docRef)
}

export const updateCustomer = async (customerId, newFields) => {
    const customerDoc = doc(db, "customers", customerId);
    await updateDoc(customerDoc, newFields);
};

export const deleteCustomer = async (customerId) => {
    const customerDoc = doc(db, "customers", customerId);
    await deleteDoc(customerDoc);
};