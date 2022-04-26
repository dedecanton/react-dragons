/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from "react";


export const FormsContext = createContext({
    switchToSignin: () => {},
    switchToSignup: () => {}

})