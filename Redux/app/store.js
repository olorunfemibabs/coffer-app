import {configureStore} from "@reduxjs/toolkit"
import walletReducer from "../features/walletConnect"

export const store = configureStore({
    reducer:{
        wallet:walletReducer,
    }
})