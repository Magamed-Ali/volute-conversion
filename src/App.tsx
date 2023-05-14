import React, {useEffect, useState} from 'react';
import Navbar from "./components/shared/navbar/Navbar";
import Footer from "./components/shared/footer/Footer";
import MainContainer from "./components/shared/main/MainContainer";

function App() {
    return (
        <div>
            <Navbar/>
            <MainContainer/>
            <Footer/>
        </div>
    )
}

export default App;
