import { useState } from "react";
import { Formik , Field} from "formik";
import { useRouter } from 'next/router'

import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { auth } from "../app/firebaseApp";
// const auth = getAuth();

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Index = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);
  const router = useRouter()

  return (
    <Formik
      initialValues={{ name: "Sasuke" }}
      onSubmit={async (values, actions) => {
        debugger;
        try {
          const pp = await signInWithEmailAndPassword(
            auth,
            values.email,
            values.password
          
          );
         
          router.push("/");
        } catch (e) {
          console.error("Error adding document: ", e);
        }
        // console.log("sdsdssd", values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
          <Flex
            flexDirection="column"
            width="100wh"
            height="100vh"
            backgroundColor="gray.200"
            justifyContent="center"
            alignItems="center"
          >
            <Stack
              flexDir="column"
              mb="2"
              justifyContent="center"
              alignItems="center"
            >
              <Avatar bg="teal.500" />
              <Heading color="teal.400">Welcome</Heading>
              <Box minW={{ base: "90%", md: "468px" }}>
                <form onSubmit={handleSubmit}>
                  <Stack
                    spacing={4}
                    p="1rem"
                    backgroundColor="whiteAlpha.900"
                    boxShadow="md"
                  >
                       <Field name="email">
              {({ field, form }) => (
                    <FormControl>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<CFaUserAlt color="gray.300" />}
                        />
                        <Input {...field} id="emails" type="email" placeholder="email address" />
                      </InputGroup>
                    </FormControl>
                        )}
                        </Field>
                        <Field name="password">
              {({ field, form }) => (
                    <FormControl>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          color="gray.300"
                          children={<CFaLock color="gray.300" />}
                        />
                        <Input
                        {...field}
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                        />
                        <InputRightElement width="4.5rem">
                          <Button
                            h="1.75rem"
                            size="sm"
                            onClick={handleShowClick}
                          >
                            {showPassword ? "Hide" : "Show"}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>
                      )}
                      </Field>
                    <Button
                      borderRadius={0}
                      variant="solid"
                      colorScheme="teal"
                      width="full"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Login
                    </Button>
                  </Stack>
                </form>
              </Box>
            </Stack>
          </Flex>
      )}
    </Formik>
  );
};

export default Index;
