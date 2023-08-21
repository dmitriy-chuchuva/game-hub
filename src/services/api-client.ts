import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'fae61bd951c64de5a2f387eae783f209'
  }
})