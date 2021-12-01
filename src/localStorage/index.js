const Client_LocalStorage_Key = 'Client_LocalStorage_Key__'

var storage = {
  set(key, value) {
    localStorage.setItem(`${Client_LocalStorage_Key}-${key}`, JSON.stringify(value))
  },
  get(key) {
    return JSON.parse(localStorage.getItem(`${Client_LocalStorage_Key}-${key}`))
  },
  remove(key) {
    localStorage.removeItem(`${Client_LocalStorage_Key}-${key}`)
  },
  clear() {
    localStorage.clear()
  }
}

export default storage;