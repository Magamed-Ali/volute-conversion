

import { addVoluteAC, changeVoluteBaseAC, changeVoluteGeneralAC, currencyReducer, StateType, VoluteType } from "./currency-reducer";

test("currency reducer", () => {
    const initialState: StateType = {
        items: [],
        voluteBase: 1,
        voluteGeneral: 0
    };

    const volute1: VoluteType = {
        key: "USD",
        value: 1
    };

    const volute2: VoluteType = {
        key: "EUR",
        value: 0.85
    };

    const volute3: VoluteType = {
        key: "GBP",
        value: 0.73
    };

    const items = [volute1, volute2, volute3];

    const action1 = addVoluteAC(items);
    const state1 = currencyReducer(initialState, action1);

    expect(state1.items).toEqual(items);

    const action2 = changeVoluteGeneralAC(2);
    const state2 = currencyReducer(state1, action2);

    expect(state2.voluteGeneral).toBe(2);

    const action3 = changeVoluteBaseAC(0.5);
    const state3 = currencyReducer(state2, action3);

    expect(state3.voluteBase).toBe(0.5);
});
