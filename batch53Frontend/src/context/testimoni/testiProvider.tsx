import { useCallback, useEffect, useState } from "react";
import { testimoni } from '.';
import { Itesti } from "../../interface/testi";
import API from "../../libs/api";


export function TestiProvider({ children }: React.HTMLAttributes<HTMLDivElement>) {
    const [testis, setTesti] = useState<Itesti[]>([]);

    const getTables = useCallback(async () => {
        const response = await API.get("/testi")
        setTesti(response.data)
    }, [])

    useEffect(() => {
        getTables()
    }, [getTables])

    return (
        <testimoni.Provider value={{ testis, setTesti }}>
            {children}
        </testimoni.Provider>
    )
}