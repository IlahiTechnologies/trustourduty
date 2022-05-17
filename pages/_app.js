import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import Header from '../components/header';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../components/header.css'
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}
const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }) {

  console.log(pageProps);

  return (
    <ChakraProvider theme={theme}>
      <Header/>
      <Component {...pageProps} />
    </ChakraProvider>);
}

export default MyApp
