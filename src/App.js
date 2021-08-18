import React, { useState } from 'react';

import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown'
import Translate from './components/Translate';


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



    return (
        <div>
            <Translate />
        </div>
    );

};