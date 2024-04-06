import { createContext } from "react"
import { ITableMain1 } from "../../interface/tableMain1"

type Table1ContextType = {
    tables: ITableMain1[],
    setTable: React.Dispatch<React.SetStateAction<ITableMain1[]>>
}

export const table1Context = createContext<Table1ContextType>({
    tables: [],
    setTable: () => { }
})