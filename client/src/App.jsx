import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./Pages/Test";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Test />} />
            </Routes>
        </Router>
    );
};

export default App;
