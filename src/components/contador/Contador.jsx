import {useState} from 'react'
import '../contador/Contador.css'
import styled from 'styled-components'

const Num = styled.h1
  `color: #f36b82;
  font-size: 15rem;
  `;

const Botao = styled.button
  `background-color: #f36b82;
  color: white;
  font-size: 1rem; 
  width: 2rem;
  height: 2rem;
  border: none;
  `;

const Section = styled.section
`background-color: black;
`;

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
    <Section>
      <Num>{num}</Num>
      <div className='botao'>
      <Botao onClick={Adc}>+</Botao>
      <Botao onClick={Rem}>-</Botao>
      <Botao onClick={Del}>DEL</Botao>
      </div>
    </Section>
  )
}
