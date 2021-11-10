import React from 'react';


function Etapa1() {
      return (
    <div>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <hr/>
        <h3>1. Qual o seu nome?</h3>
        <input placeholder="Nome:"/>
        <hr/>
        <h3>2. Qual sua idade?</h3>
        <input placeholder="Idade:"/>
        <hr/>
        <h3>3. Qual seu email?</h3>
        <input placeholder="Email:"/>
        <hr/>
        <label>
          <h3>4. Qual a sua escolaridade?</h3>
        </label>
        <select>
        <option>Escolha uma opção</option>
        </select>  
        <hr/>
    </div>
  );

}


export default Etapa1;
