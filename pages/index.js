import {firebase, auth} from '../app/firebaseApp';
import React, { useState } from "react";
export default function Home() {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [name, setName] = useState("");
  
  firebase.auth().onAuthStateChanged(function(user) {
    console.log(user);
    if (user) {
      setIsLoggedIn(true)
      setName(user.displayName)
      // User is signed in.
    } else {
      // No user is signed in.
      setIsLoggedIn(false)
      // setName(user.displayName)
    }
  });
  return (
    <>
    {isLoggedIn ? "Welcome " + name : "Please Log In"} 
  
    </>
  )
}
