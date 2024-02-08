import  { useState } from 'react';

import People from './People';
import Planets from './Planets';
import Search from './Search';

function Body({ people, planets }) {
    const [visibleComponent, setVisibleComponent] = useState('All');

    return (
        <div>
            <div className="button-container">
                <button onClick={() => setVisibleComponent('People')}>
                    People
                </button>
                <button onClick={() => setVisibleComponent('Planets')}>
                    Planets
                </button>
                <button onClick={() => setVisibleComponent('All')}>
                    All
                </button>
            </div>
            {visibleComponent === 'People' && <People people={people} />}
            {visibleComponent === 'Planets' && <Planets planets={planets} />}
            {visibleComponent === 'All' && (
                <div className='people-planet-container'>
                    <People people={people} />
                    <Planets planets={planets} />
                </div>
            )}
        </div>
    );
}

export default Body;