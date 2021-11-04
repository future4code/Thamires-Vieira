import React from "react";
import styled from "styled-components";

const SmallCardContainer=styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
`

const SmallcardImagem=styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`


function MeuContato (props){
    return(
        <SmallCardContainer>
            <SmallcardImagem src={ props.imagem } />
            <h4>{ props.nome }</h4>
            <p>{ props.contato }</p>
        </SmallCardContainer>
    )
}

export default MeuContato;