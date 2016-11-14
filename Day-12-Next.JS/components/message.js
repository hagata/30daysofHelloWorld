import React from 'react';
import style from 'next/css';

export default({title}) => (
    <div className="message">
        <p className="message__user">Bot</p>
        <p className="message">Hello, User! What's up?!</p>
    </div>
)

const itemContainer = style({
    border: '1px solid #aaa',
    background: 'white',
})