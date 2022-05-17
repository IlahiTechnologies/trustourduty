import { Menu, MenuButton, MenuList, MenuItem, HStack } from "@chakra-ui/react";
import { Image, Link } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { LoggedInHeaderRight } from "./loggedInheaderRight";
import { LoggedOutHeaderRight } from "./loggedOutHeaderRight";
import React, { useState } from "react";
import {firebase, auth} from '../app/firebaseApp';
const Header = () => {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [profilePhotoLink, setProfilePhotoLink] = useState("https://bit.ly/dan-abramov");
  firebase.auth().onAuthStateChanged(function(user) {
    console.log(user);
    if (user) {
      setIsLoggedIn(true)
      setProfilePhotoLink(user.photoURL)
      // User is signed in.
    } else {
      // No user is signed in.
      setIsLoggedIn(false)
      // setProfilePhotoLink(user.photoURL)
    }
  });
    
  return (
    <Box display="flex" bg="tomato" w="100%" p={4} color="white">
      <Box display="flex" bg="tomato" w="90%" p={4} color="white">
        <HStack spacing="24px">
          <Image boxSize="90px" src="/logo-comp.jpeg" alt="Dan Abramov" />
       
          <Link color={"rebeccapurple"} href="/receipt-generator">Generate Receipts</Link>
          <Link color={"rebeccapurple"} href="/list-receipt">List Receipts</Link>
        </HStack>
      </Box>
      <Box bg="tomato" w="10%" p={4} color="white">
         {isLoggedIn ? <LoggedInHeaderRight profilePhotoLink={profilePhotoLink}/> :<LoggedOutHeaderRight/>} 
      </Box>
    </Box>
  );
};

export default Header;
