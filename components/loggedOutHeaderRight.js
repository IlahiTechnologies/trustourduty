import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import React from "react";
import { Button, Link } from "@chakra-ui/react";
import { SignInModal } from "./SignInModal";
import { useDisclosure } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export const LoggedOutHeaderRight = () => {
  const router = useRouter()

    const { isOpen, onOpen, onClose } = useDisclosure()
  const kk =(e) => {
    e.preventDefault()
    router.push('/index');
  }

    return (
    <>
    <Button colorScheme='blue' marginTop={"20px"} onClick={kk}>Sign In</Button>
    <SignInModal isOpen={isOpen} onClose={onClose}/>
    </>
  )
}