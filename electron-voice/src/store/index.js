import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
// import mutations from './mutations'
// import actions from './actions'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    loading: false,
    sending: false,
    error: null,
    user: {
      username: 'Neil',
      name: 'Neil McHenry'
    },
    reconnect: false,
    activeRoom: {
      id: '124'
    },
    rooms: [
      {
        id: '123',
        name: 'Habitat Builder'
      },
      {
        id: '124',
        name: 'Spaceship Builder'
      }
    ],
    users: [
      {
        username: 'Waylon',
        name: 'Waylon Lee',
        presence: 'online'
      },
      {
        username: 'Neil',
        name: 'Neil McHenry',
        presence: 'in-sim'
      },
      {
        username: 'Alex',
        name: 'Alexandr Sein',
        presence: 'offline'
      }
    ],
    messages: [
      {
        username: 'Alex',
        date: '08/09/2020',
        text: 'See you all later!'
      },
      {
        username: 'Neil',
        date: '08/11/2020',
        text: 'Wow, 2020 is almost over already!'
      },
      {
        username: 'Waylon',
        date: '08/11/2020',
        text: 'Yeah, and we just only got multiuser base functionality working...'
      },
      {
        username: 'Neil',
        date: '08/11/2020',
        text: 'As long as it works well, all the time spent is worth it.'
      },
      {
        username: 'Waylon',
        date: '08/11/2020',
        text: 'I agree. Want to hop onto a sim to test out the new anti-matter starship Alex designed?'
      },
      {
        username: 'Neil',
        date: '08/11/2020',
        text: 'Already firing up the thrusters in the back-end. WHOOP!'
      },
    ],
    userTyping: {
      username: 'Neil'
    }
  },
  getters: {
    hasError: state => state.error ? true : false
  },
  plugins: [vuexLocal.plugin],
  strict: debug
})