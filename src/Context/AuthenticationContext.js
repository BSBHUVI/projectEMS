import React, { createContext, useContext, useEffect, useState } from "react";
import { userAuth } from "../firebase.js";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { collection, getDocs, getFirestore } from "firebase/firestore";

//creating the context
const myContext = createContext();

function AuthenticationContext({ children }) {
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState({});
  const [userRole, setUserRole] = useState({});

  //to fetch UserProfile
  useEffect(() => {
    const userProfile = allUsers.filter((val) => val.email === user?.email);
    setUserRole(userProfile?.[0]);
  }, [allUsers, user]);


  //google sign up
  const provider = new GoogleAuthProvider();
  const googleSignUp = () => {
    return signInWithPopup(userAuth, provider);
  };


  //getting the data of all the users
  useEffect(() => {
    const getAllDataFromCollection = async (collectionName) => {
      try {
        const db = getFirestore();
        const collectionRef = collection(db, collectionName);
        const querySnapshot = await getDocs(collectionRef);

        const data = querySnapshot.docs.map((doc) => doc.data());
        console.log("All data from collection:", data);
        return data;
      } catch (error) {
        console.error("Error getting data from collection:", error);
        return [];
      }
    };

    getAllDataFromCollection("users").then((res) => {
      setAllUsers(res);
    });
  }, [user]);


  //To logout the user
  const signUserOut = () => {
    return signOut(userAuth);
  };


  //to get the details of current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(userAuth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <myContext.Provider
      value={{ googleSignUp, user, signUserOut, allUsers, userRole }}
    >
      {children}
    </myContext.Provider>
  );
}

//custom Hook that uses the context 
export function useMyAuthContext() {
  return useContext(myContext);
}
export default AuthenticationContext;
