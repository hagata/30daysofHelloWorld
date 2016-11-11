// mock db of messages
const db = [
    {
        "message": "Stop, take 10 deep breathes while focusing on your breathing",
        "date_added": ""
    },
    {
        "message": "Rest in stillness. Stop doing and focus on just being.",
        "date_added": ""
    },
    {
        "message": "Stop. Time for a one minute meditation break",
        "date_added": ""
    },
    {
        "message": "Forget the past, ignore the future, and relax for a moment",
        "date_added": ""
    },
    {
        "message": "Close your eyes and relax. Focus on your breathing for 60 sec.",
        "date_added": ""
    }
]

// Failed template that doesn't work right'
Vue.component('generator', {
  template: `<button class="generator" v-on:click="message = randomquote()">Get a mindful prompt</button>
			<p class="random-quote">{{message}}</p>`
})

new Vue({
  el: '#vueapp',
  data: {
    message: ''
  },
  methods: {
    randomquote: function() {
      //Get random quote from quote db
      // let msg = Math.random(0, db.length)
      let msg = Math.floor(Math.random() * db.length);
      console.log('ind', msg);
      return db[msg].message;
    }
  }
})


console.log('%cApp loaded', 'font-size:18px; color:#4caf50;');