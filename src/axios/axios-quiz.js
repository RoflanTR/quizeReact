import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-9ec6a-default-rtdb.firebaseio.com/'
})