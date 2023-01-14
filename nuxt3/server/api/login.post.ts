export default defineEventHandler(event => {

  const query = getQuery(event)
  const method = getMethod(event)
  const body = readBody(event)
  console.log(query)
  console.log(method)
  console.log(body)
  return {
    code:200,
    data:{
      name:'周龙权',
      age:18
    }
  }
})
