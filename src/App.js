import React, {useState} from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 400px;
  height: 30px;
  font-size: 1rem;
  padding 0.625rem;
  border: 1px solid #111;
  border-radius: 10px;
  margin-left: 30rem;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 1rem;
  font-family: "Verdana";
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
  font-family: "Verdana";
`;

const Paragraph = styled.p`
  display: flex;
  justify-content: center;
  font-family: "Verdana";
`;

function App() {

  const [ megabytes, setMegaBytes] = useState(0);
  let calculo = (megabytes / 1024).toFixed(4);

  return <>
    <Title><h1>Calculadora de MB - GB (Megabytes para Gigabytes)</h1></Title> <br/>
    <Label><label>Valor em MB: </label></Label><br/>
    <Input 
      type="number" 
      value={megabytes} 
      onChange={(e) => setMegaBytes(parseFloat(e.target.value))} 
    />
    <br/><br/>
    <hr />
    
    { megabytes > 0 &&
      <div>
        <Paragraph><p>Valor em MB: {megabytes} MB</p></Paragraph>
        <Paragraph><p>Valor em GB: {calculo} GB</p></Paragraph>
      </div>
    }
  </>
}

export default App;