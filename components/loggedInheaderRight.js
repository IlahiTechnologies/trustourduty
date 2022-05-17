import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import React from "react";
import {firebase, auth} from '../app/firebaseApp';
export const LoggedInHeaderRight = ({profilePhotoLink}) => {
const signOut = () => {
  firebase.auth().signOut();
}

    return (

        <Menu>
        <MenuButton>
          <Image
            borderRadius="full"
            boxSize="50px"
            src={profilePhotoLink}
            alt="Dan Abramov"
            fallbackSrc="https://bit.ly/dan-abramov"
          />
        </MenuButton>
        
        <MenuList>
          <MenuItem color={"rebeccapurple"}>View Your Profile</MenuItem>
          <MenuItem color={"rebeccapurple"} onClick={signOut}>Sign Out</MenuItem>
        </MenuList>
      </Menu>
    )
}