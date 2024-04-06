import { createContext } from "react"
import { IPost } from "../interface/post"

type PostContextType = {
    posts: IPost[],
    setPost: React.Dispatch<React.SetStateAction<IPost[]>>
}

export const postContext = createContext<PostContextType>({
    posts: [],
    setPost: () => { }
})