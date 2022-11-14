const queryString = '?name=zlq&age=16&height=188'

const queryParams = new URLSearchParams(queryString)

const object = Object.fromEntries(queryParams)

console.log(object)