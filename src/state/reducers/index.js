import { combineReducers } from 'redux';
import { expenditureReducer } from './expenditureReducer';
import { moneyReducer } from './moneyReducer';
import { receiptReducer } from './receiptReducer';

export const reducers = combineReducers({
    balance: moneyReducer,
    expense: expenditureReducer,
    receipt: receiptReducer
})