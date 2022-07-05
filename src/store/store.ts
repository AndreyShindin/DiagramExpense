import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createExpenseReducer  from './createExpenseReducer';

const reducers = combineReducers({
    expense: createExpenseReducer,
})

const store = configureStore({
    reducer: reducers,
})

export default store

export type RootState = ReturnType<typeof store.getState>