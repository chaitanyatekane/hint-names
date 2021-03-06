import React, {useState} from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

const App = () => {

    const [headerExpanded, setHeaderExpanded] = useState(true);
    const [suggestedNames, setSuggestedNames] = useState([]);

    const handleInputChange = (inputText) => {
        setHeaderExpanded(!inputText);
        setSuggestedNames(inputText ? name(inputText) : []);
    };

    return (
        <div>
            <Navbar />
            <Header headerExpanded={headerExpanded} />
            <SearchBox onInputChange={handleInputChange} />
            <ResultsContainer suggestedNames={suggestedNames} />
        </div>
    );
};

export default App;