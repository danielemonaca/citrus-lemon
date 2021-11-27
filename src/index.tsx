import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import GlobalStyles from "./styles";

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="1" element={<FirstPage />} />
                <Route path="2" element={<SecondPage />} />
                <Route path="3" element={<ThirdPage/>} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
