import { createContext } from "react";

const FormContext=createContext()
export const FormContextProvider=({children})=>{
    
    return(
        <FormContext.Provider value={{}}>
            {children}
        </FormContext.Provider>
    )
}