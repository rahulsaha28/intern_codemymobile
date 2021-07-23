import React, { useContext } from 'react'
import { CardType, ContextForProduct } from '../App'
import { CardList } from '../Components/CardList/CardList'

export const CardPage = () => {
   const { cards, setCards } = useContext(ContextForProduct)
   
   const handelIncrement = (id:number):void=>{
        const newCard:CardType = cards.filter(card=>card.id===id)[0];
        const newIndex:number = cards.indexOf(newCard as never);
        const newCardList:CardType[] = [...cards.slice(0, newIndex), {...newCard, count:newCard.count+1}, ...cards.slice(newIndex+1, cards.length)]
        setCards(newCardList);
    }

   const handelDecrement = (id:number):void=>{
    const newCard:CardType = cards.filter(card=>card.id===id)[0];
    const newIndex:number = cards.indexOf(newCard as never);
    const newCardList:CardType[] = [...cards.slice(0, newIndex), {...newCard, count:newCard.count-1}, ...cards.slice(newIndex+1, cards.length)]
    setCards(newCardList);
   }
    return (
        <div className="container pt-5">
            {
                cards.map(card=><CardList key={Math.random()} {...card }  handelIncrement={handelIncrement} handelDecrement={handelDecrement}  />)
            }
            
        </div>
    )
}
