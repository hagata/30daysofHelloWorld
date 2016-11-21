import logs from './scripts/modules/logger';

document.addEventListener('DOMContentLoaded', () => {
  // do your setup here
  logs('hello, brunch!');
  console.log('%cInitialized app', 'color: #fa00ba; font-size: 16px');
});
