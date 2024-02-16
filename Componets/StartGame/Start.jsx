import React from 'react';
import { Link } from 'react-router-dom'; 
import './Start.css';

const Start = () => {
    return (
        <div className="screen"> {}
            <div className="BUttons" style={{ alignSelf: 'center', marginTop: '29rem' }}>
                {}
                <Link to="/home" style={{ textDecoration: 'none' }}>
                    <button id="start2" style={{ height: '71px', width: '263px', borderRadius: '20px', fontSize: '30px', color: 'white', backgroundColor: 'rgb(255, 179, 0)' }}>START</button>
                </Link>
            </div>
        </div>
    );
}

export default Start;
