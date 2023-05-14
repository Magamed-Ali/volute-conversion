import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {currencyReducer} from "./currency-reducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";

export const rootReducer = combineReducers({
    currencyReducer
})

export type AppDispatchType = ThunkDispatch<RootReducerType, any, AnyAction>

export const useAppDispatch = () => useDispatch<AppDispatchType>();

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export type RootReducerType = ReturnType<typeof rootReducer>