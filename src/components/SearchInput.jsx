import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

import useGoogleSearch from '../hooks/useGoogleSearch';

import './SearchInput.css';
import Language from './Language';

const SearchInput = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const { data }  = useGoogleSearch('tesla');

    const history = useHistory();

    const onClickGoogleSearchHandler = (e) => {
        e.preventDefault();
        console.log(searchTerm);

        
        console.log(data);

        history.push('/search');
    }

    return(
        <form className="searchInput">
            <div className="searchInput__container">
                <SearchIcon 
                    className="searchInput__container__searchIcon"
                />
                <input 
                    type="text" 
                    className="searchInput__container__inputBox"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} 
                />
                <MicIcon 
                    className="searchInput__container__MicIcon" 
                />
            </div>
            <div className="searchInput__buttons">
                <Button type="submit" onClick={onClickGoogleSearchHandler} variant="outlined" className="searchInput__button">Google Search</Button>
                <Button variant="outlined" className="searchInput__button">I'm Feeling Lucky</Button>
            </div>
            <div className="searchInput__language">
                <Language />
            </div>
        </form>
    );
}

export default SearchInput;