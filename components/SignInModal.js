import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {firebase, auth} from '../app/firebaseApp';
import { uiConfig } from '../config/firebaseAuthUI.config';
import React, { useEffect, useState } from 'react'
import { Button, Link } from "@chakra-ui/react";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import 'firebaseui/dist/firebaseui.css'

export const SignInModal = ({isOpen, onClose}) => {

    const [renderAuth, setRenderAuth] = useState(false)

    useEffect(() => {
      if (typeof window !== 'undefined') {
        setRenderAuth(true)
      }
    }, [])
    const authConfig = uiConfig(firebase);

    return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Welcome Back!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          {renderAuth ? <StyledFirebaseAuth uiConfig={authConfig} firebaseAuth={auth} />: <></>}  
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    
    
        )
}