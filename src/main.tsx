import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from "react-redux";
import { store } from "./app/store";
import { ChakraProvider } from "@chakra-ui/react"
import NavBar from "./components/layout/NavBar";
ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>
        <ChakraProvider>
            <NavBar />
            <App />
        </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
