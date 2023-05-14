import {Dispatch} from "redux";
import {Current_API} from "../api/currency-api";

export type StateType = {
    items: Array<VoluteType>
    voluteBase: number
    voluteGeneral: number
}
export type VoluteType = {
    key: string
    value: any | number
}

type ActionsType = AddVoluteType | ChangeVoluteGeneralType | ChangeVoluteBaseType
type AddVoluteType = ReturnType<typeof addVoluteAC>
type ChangeVoluteGeneralType = ReturnType<typeof changeVoluteGeneralAC>
type ChangeVoluteBaseType = ReturnType<typeof changeVoluteBaseAC>

const initialState: StateType = {
    items: [],
    voluteBase: 1,
    voluteGeneral: 0
}

export const currencyReducer = (state: StateType = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case "ADD-VOLUTE":
            return {
                ...state, items: action.items
            }
        case "CHANGE-VOLUTE-GENERAL" :
            return {
                ...state, voluteGeneral: action.event
            }
        case "CHANGE-VOLUTE-BASE":
            return {
                ...state, voluteBase: action.event
            }

        default:
            return state
    }
}

export const addVoluteAC = (items: Array<VoluteType>) => {
    return {
        type: "ADD-VOLUTE",
        items
    }as const
}
export const changeVoluteBaseAC = (event: number) => {
    return {
        type: "CHANGE-VOLUTE-BASE",
        event
    }as const
}
export const changeVoluteGeneralAC = (event: number) => {
    return {
        type: "CHANGE-VOLUTE-GENERAL",
        event
    }as const
}
export const addVoluteTC = (vl: string = "RUB") => {

    return (dispatch: Dispatch) => {
        Current_API.getCurrent(vl)
            .then(res => Object.entries(res.data.conversion_rates))
            .then(data => {
                const newArr: Array<VoluteType> = [];
                data.forEach(([key, value]) => {
                    newArr.push({key, value});
                });

                dispatch(addVoluteAC(newArr))
            })
    }
}