import { createContext } from "react"
import { ICard } from "../../interface/Card" 

type CardContextType = {
    cards: ICard[],
    setCard: React.Dispatch<React.SetStateAction<ICard[]>>
}

export const cardContext = createContext<CardContextType>({
    cards: [],
    setCard: () => { }
})