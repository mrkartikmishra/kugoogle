import React from 'react';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import './Home.css';
import Footer from '../components/Footer';
import SearchInput from '../components/SearchInput';

const Home = () => {
    return(
        <div className="home">
            <div className="home__topbar">
                <a href="#" className="home__topbar__link" >Gmail</a>
                <a href="#" className="home__topbar__link" >Images</a>
                <AppsIcon  className="home__topbar__appsIcon" />
                <AccountCircleIcon  className="home__topbar__avatar" />
            </div>
            <div className="home__center">
                <img alt="Google" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" className="home__center__logo" />
                <SearchInput />
            </div>
            <div className="home__footer">
                <Footer />
            </div>
        </div>
    );
}

export default Home;