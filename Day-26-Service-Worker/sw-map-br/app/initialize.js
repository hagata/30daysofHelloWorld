import ServiceWorker from  './utils/serviceworker';

ServiceWorker();

document.addEventListener('DOMContentLoaded', () => {
  // do your setup here
  console.log('Initialized app');
  // fetch('https://maps.googleapis.com/maps/api/js?key=AIzaSyDW638_sROFK35fbuOwNgwI6urnQy_HZ1Y').then(response => {
  //   console.log('Fetched payload', response);
  //   if (response.status !== 200){
  //     console.log(`ERROR: Status Code ${response.status}`)
  //   }
  //     response.json().then(function(data) {
  //       console.log(data);
  //     });
  // })
});
