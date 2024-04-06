import { createContext } from "react"
import { ITableMain2 } from "../../interface/tableMain2" 

type Table2ContextType = {
    tables: ITableMain2[],
    setTable: React.Dispatch<React.SetStateAction<ITableMain2[]>>
}

export const table2Context = createContext<Table2ContextType>({
    tables: [],
    setTable: () => { }
})