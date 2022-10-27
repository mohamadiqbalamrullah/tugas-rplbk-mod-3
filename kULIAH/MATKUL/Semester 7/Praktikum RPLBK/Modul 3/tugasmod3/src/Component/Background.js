import React from 'react';
import { context } from '../App';

export const Background = _ => {
    const {flag, setFlag} = React.useContext(context);

    return (
        <button
            onClick={() => setFlag(!flag)}
        >
            Ganti Background
        </button>
    )
};