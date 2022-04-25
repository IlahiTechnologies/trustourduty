import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import React from "react";
import { Button, Link } from "@chakra-ui/react";
import { SignInModal } from "./SignInModal";
import { useDisclosure } from '@chakra-ui/react'

export const LoggedOutHeaderRight = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
    <>
    <Button colorScheme='blue' marginTop={"20px"} onClick={onOpen}>Sign In / Up</Button>
    <SignInModal isOpen={isOpen} onClose={onClose}/>
    </>
  )
}