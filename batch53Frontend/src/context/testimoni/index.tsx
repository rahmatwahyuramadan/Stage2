import React from "react";
import { Itesti } from "../../interface/testi";
import { createContext } from "react";


type TestimoniContextType = {
    testis : Itesti[],
    setTesti : React.Dispatch<React.SetStateAction<Itesti[]>>
}

export const testimoni = createContext<TestimoniContextType>({
    testis: [],
    setTesti: () => { }
})