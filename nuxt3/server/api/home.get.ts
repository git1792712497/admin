export default defineEventHandler(event => {
  const {res,req} = event
  return {
    code:200,
    data:{
      name:'周龙权',
      age:18
    }
  }
})
