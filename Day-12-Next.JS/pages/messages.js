import React from 'react';
import M from '../components/message';
import data from '../data';
import style from 'next/css';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      children: [],
      numMessages: 1
    };
    this.init();
  }

  init() {
    console.log('%cAPP LOADED', 'color:green; font-size:16px;');
    let d = this.getDelay(data[0].message);
    this.postDelayedMessage(data[0], d).then(d => {
      this.continueMessages();
      console.log('promise d', d);
    });
  }

  continueMessages() {
    if (this.state.numMessages >= data.length) {
      console.log('%cEnd of Messages', 'font-weight: bold;,font-size:14px;');
      return;
    }

    let index = this.state.numMessages;
    let delay = this.getDelay(data[index].message);
    console.log('continue ind', index);
    this.postDelayedMessage(data[index], delay).then(() => {
      this.setState({
        numMessages: this.state.numMessages += 1
      });
      this.continueMessages();
    });
  }

  /**
   * Calculates delay duration
   * @param {String} message the message to get duration for.
   * @return {Number} delay in milliseconds.
   */
  getDelay(message) {
    return message.length * 100 / 4;
  }

  /**
   * Posts  message response after a specified delay.
   * @param {String} message The message that should be resolved.
   * @param {Number} delay Time in milliseconds to wait before resolving the message.
   * @return{Promise} Resolves with message after set delay.
   */
  postDelayedMessage(message, delay) {
    console.log('getting next msg');
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('resolve promise');
        resolve(message);
      }, delay);
    });
  }

  render() {
    const children = [];

    for (var i = 0; i < this.state.numMessages; i += 1) {
      children.push(<M key={i} title={data[i].message}>{data[i].message}</M>);
    }

    return (
            <div className={css.messages}>
                {children}
            </div>
        );
  }
}

/**
 * JS Glamor CSS styles.
 */
const css = {
  messages: style({
    padding: '1rem',
    maxWidth: '400px'
  })
};
