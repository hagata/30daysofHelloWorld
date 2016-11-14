import React from 'react';
import style from 'next/css';

export default({title}) => (
    <div className={styles.messages}>
        <p className={styles.messageUser}>Bot</p>
        <p className={styles.message}>{title}</p>
    </div>
);

const styles = {
  messages: style({
    display: 'flex'
  }),
  messageUser: style({
    marginRight: '1rem'
  }),
  message: style({
    background: '#eee',
    padding: '.125rem .5rem',
    borderRadius: '5px',
    border: '1px solid #aaa',
    boxShadow: '1px 1px 3px 0px rgba(0, 0, 0, 0.2)'
  })
};
