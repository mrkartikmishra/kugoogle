import React from 'react';

import './Language.css';

const Language = () => {
    return(
        <div className="language">
            <div className="language__left">
                <p>Google offered in : </p>
            </div>
            <div className="language__right">
                <ul>
                    <li>English</li>
                    <li>Bengali</li>
                    <li>Hindi</li>
                    <li>Urdu</li>
                    <li>Telugu</li>
                    <li>Marathi</li>
                </ul>
            </div>
        </div>
    );
}

export default Language;