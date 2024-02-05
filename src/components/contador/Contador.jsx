import {useState} from 'react'
import '../contador/Contador.css'

export default function Contador() {
const [num, setNum] = useState (0)
function Adc(){
  if(num < 20){
  setNum(num + 1)
  }
}
const Rem = ()=>{
  if(num > 0){
  setNum(num - 1)
  }
}
function Del(){
  setNum(0)
}

  return (
    <div>
      <h1>{num}</h1>
      <div className='botao'>
      <button onClick={Adc}>+</button>
      <button onClick={Rem}>-</button>
      <button onClick={Del}>DEL</button>
      </div>
    </div>
  )
}
