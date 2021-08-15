import React from 'react';

import Accordion from './components/Accordion';


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
            <Accordion items={items} />
        </div>
    );

};