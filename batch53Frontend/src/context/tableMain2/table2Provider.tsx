import { useCallback, useEffect, useState } from "react";
import { table2Context } from '.';
import { ITableMain2 } from "../../interface/tableMain2";
import API from "../../libs/api";


export function Table2Provider({ children }: React.HTMLAttributes<HTMLDivElement>) {
    const [tables, setTable] = useState<ITableMain2[]>([]);

    const getTables = useCallback(async () => {
        const response = await API.get("/tableMain2")
        setTable(response.data)
    }, [])

    useEffect(() => {
        getTables()
    }, [getTables])

    return (
        <table2Context.Provider value={{ tables, setTable }}>
            {children}
        </table2Context.Provider>
    )
}