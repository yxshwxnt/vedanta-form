import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyA-OPWkgHYs7P1RqnDJ3ZJKnIyR3B8Qqvg",
    authDomain: "vedanta-7e93e.firebaseapp.com",
    projectId: "vedanta-7e93e",
    storageBucket: "vedanta-7e93e.appspot.com",
    messagingSenderId: "766715323577",
    appId: "1:766715323577:web:642ad48918bdf759c7a768",
    databaseURL: "https://vedanta-7e93e-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);