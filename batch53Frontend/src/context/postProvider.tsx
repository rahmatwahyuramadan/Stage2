import { useCallback, useEffect, useState } from "react";
import { postContext } from '.';
import { IPost } from "../interface/post";
import API from "../libs/api";


export function PostProvider({ children }: React.HTMLAttributes<HTMLDivElement>) {
    const [posts, setPost] = useState<IPost[]>([]);

    const getPosts = useCallback(async () => {
        const response = await API.get("/posts")
        setPost(response.data)
    }, [])

    useEffect(() => {
        getPosts()
    }, [getPosts])

    return (
        <postContext.Provider value={{ posts, setPost }}>
            {children}
        </postContext.Provider>
    )
}