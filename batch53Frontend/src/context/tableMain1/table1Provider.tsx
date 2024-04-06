import { useCallback, useEffect, useState } from "react";
import { table1Context } from '.';
import { ITableMain1 } from "../../interface/tableMain1";
import API from "../../libs/api";


export function Table1Provider({ children }: React.HTMLAttributes<HTMLDivElement>) {
    const [tables, setTable] = useState<ITableMain1[]>([]);

    const getTables = useCallback(async () => {
        const response = await API.get("/tableMain1")
        setTable(response.data)
    }, [])

    useEffect(() => {
        getTables()
    }, [getTables])

    return (
        <table1Context.Provider value={{ tables, setTable }}>
            {children}
        </table1Context.Provider>
    )
}