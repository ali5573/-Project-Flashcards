import { createSlice } from "@reduxjs/toolkit"
import { addQuiz } from "../quizzes/quizzesSlice";



const topicsSlice = createSlice(
    {
        name: 'topicsSlice',
        initialState : {topics: {}},
        reducers: {
            addTopic(state, action) {
                const { id, name, icon } = action.payload;
                state.topics[id] =  {
                    id: id,
                    name: name,
                    icon: icon,
                    quizIds: [],


                };
            }
           


        },
        extraReducers: (builder) => {
            builder.addCase(
                addQuiz, (state, action) => {
                    const {id, topicId } = action.payload;
                    state.topics[topicId].quizIds.push(id);
                }
            );

        }
    }
);
const selectNestedTopics = (state) => state.topics.topics;

export { selectNestedTopics };
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;