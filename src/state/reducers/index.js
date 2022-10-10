import { combineReducers } from 'redux';
import { expenditureReducer } from './expenditureReducer';
import { moneyReducer } from './moneyReducer';

export const reducers = combineReducers({
    balance: moneyReducer,
    expense: expenditureReducer
})