import React from 'react';

import Accordion from './components/Accordion';
import Search from './components/Search';


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

export default () => {

    return (
        <div>
            <Search />
        </div>
    );

};