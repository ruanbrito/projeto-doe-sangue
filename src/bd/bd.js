import { useEffect, useState } from "react";
import { addDoc, collection, doc, getDocs, getFirestore } from "firebase/firestore";


import firebaseConfig from "./auth-config";


const firebaseApp = firebaseConfig;

export const Db = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    //recuperar dados do firebase
    const [dados, setDados] = useState([]);

    const db = getFirestore(firebaseApp);
    const userCollectionsRef = collection(db, "users");

    async function inserirUsuario(){
        const user = await addDoc(userCollectionsRef, {
            name,
            email
        })
        console.log(user);
    }

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollectionsRef);
            setDados((data.docs.map((doc) => ({...doc.data(), id: doc.id}))))
        };
        getUsers();
    }, []);

};