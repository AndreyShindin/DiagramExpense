import { createSlice, current } from "@reduxjs/toolkit";


interface newExp {
    id: number,
    date: string,
    title: string,
    amount: number,
}

interface initState {
    data: Array<newExp>,
    newExpense: newExp,
    choiceYear: string,
}



const initialState: initState = {
    data: [
        {id: Math.round(Math.random()*100),date: '2022-11-2', title: 'Привет из 22', amount: 2120},
        {id: Math.round(Math.random()*100),date: '2022-12-2', title: 'Привет из 19', amount: 10},
        {id: Math.round(Math.random()*100),date: '2020-9-2', title: 'Привет из 22', amount: 230},
        {id: Math.round(Math.random()*100),date: '2022-6-2', title: 'Привет из 19', amount: 670},
    ],
    newExpense: {id: Date.now(),date: '', title: '', amount: 0},
    choiceYear: '2022',
};

const createExpenseReducer = createSlice({
    name: 'create-reducer',
    initialState,
    reducers: {
        changeDate: (state, action) => {
            state.newExpense.date = action.payload
        },
        changeTitle: (state, action) => {
            state.newExpense.title = action.payload
        },
        changeAmount: (state, action) => {
            state.newExpense.amount = action.payload
        },
        createExpense: (state) => {
            state.data.push(state.newExpense)
        },
        choicesYear: (state, action) => {
            state.choiceYear = action.payload
        },
        addDiagram: (state) => {

        }
    }
});

export default createExpenseReducer.reducer;

export const { changeDate, changeTitle, changeAmount, createExpense, choicesYear, addDiagram } = createExpenseReducer.actions; 

// let nowMonth = +state.data[action.payload].date.split('-')[1]

// state.month[nowMonth]
//             state.month[nowMonth-1].value += state.data[action.payload].amount

