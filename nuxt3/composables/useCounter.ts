export default function (){
  return useState('counter',() => {
    return {
      token:100
    }
  })
}


// export const useCounter = () => {
//   return useState('counter',() => 100)
// }
