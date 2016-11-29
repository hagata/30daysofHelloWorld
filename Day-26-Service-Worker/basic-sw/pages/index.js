import React from 'react'
import SW from '../utils/serviceworker';

export default class extends React.Component {
    constructor() {
        super();

        this.init();
    }

    render() {
        return(<div className="hello">Hello, Next JS!</div>
)
    }
    init() {
        //check for SW
        console.log('SW?', ('serviceWorker' in navigator))
        if ('serviceWorker' in navigator) {
            // load ServiceWorker
            SW();
        }
        this.render()
    }
}