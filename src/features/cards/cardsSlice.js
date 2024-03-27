import { createSlice } from "@reduxjs/toolkit";


const cardsSlice= createSlice(
    {
        name: 'cardsSlice',
        initialState: {
            cards:{}
        },
        reducers:{
            addCard (state,action){
                const{id, front, back}=action.payload;
                state.cards[id]={
                    id: id,
                    front: front,
                    back:back,
                    
                }
            }
        }
    }
);
const selectCardsId =(id)=>  (state) => state.cards.cards[id];
export {selectCardsId};
export const {addCard} = cardsSlice.actions;
export default cardsSlice.reducer;