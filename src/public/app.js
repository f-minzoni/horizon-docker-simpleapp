const horizon = new Horizon()
horizon.connect()

const app = new Vue({
  el: '#app',
  template: `
    <div> {{ message }} </div>
  `,
  data: {
    message: ''
  },
  created() {
   
    // Triggers when client successfully connects to server
    horizon.onReady().subscribe(
    () => { this.message = 'Connected to Horizon server' }
    )

    // Triggers when disconnected from server
    horizon.onDisconnected().subscribe(
      () => { this.message = 'Disconnected from Horizon server' }
    )
  },

})