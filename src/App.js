import React, { useState } from 'react';

import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown'


const items = [
    {
        title: 'ABC',
        content: 'ABC Content'
    },
    {
        title: 'EFH',
        content: 'EFG Content'
    },
    {
        title: 'IJK',
        content: 'IJK Content'
    }
];

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The shade of Blue',
        value: 'blue'
    }
]

export default () => {

    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <button
                onClick={() => setShowDropdown(!showDropdown)}
            >
                Toggle Dropdown
            </button>
            {showDropdown ?
                <Dropdown 
                    selected={selected}
                    onSelectedChange={setSelected}
                    options={options}
                />
                : null
            }
        </div>
    );

};