import React from 'react';
import M from '../components/message';

export default class extends React.Component {
    constructor() {
        super()

        this.init();
    }

    init() {
        console.log('%cAPP LOADED', 'color:green; font-size:16px;')
    }
    render() {
        return <div className="main">
        msg
            <M></M>
        </div>
    }
}