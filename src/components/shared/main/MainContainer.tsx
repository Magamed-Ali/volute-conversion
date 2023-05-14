import React, {useEffect, useState} from 'react';
import ConverterPage from "../../pages/ConverterPage";
import HomePage from "../../pages/HomePage";
import {Route, Routes} from 'react-router-dom';
import {useSelector} from "react-redux";
import {addVoluteTC, VoluteType} from "../../../state/currency-reducer";
import {RootReducerType, useAppDispatch} from "../../../state/store";

function MainContainer() {

    const items = useSelector<RootReducerType, Array<VoluteType>>(state => state.currencyReducer.items )
    const dispatch = useAppDispatch()

    useEffect(() => {

        dispatch(addVoluteTC("RUB"))
    }, []);

    return (
        <div className="container main-container">
            <Routes>
                <Route path='/' element={
                    <HomePage data={items}/>}/>
                <Route path='/home' element={
                    <HomePage data={items}/>}/>

                <Route path='/converter' element={<ConverterPage/>}/>
            </Routes>
        </div>
    );

}

export default MainContainer;