import axios from "axios";
import React, { useEffect, useState } from "react";
import SelectBar from "../../components/SelectBar";
import moment from 'moment';
import { Ball, Concurso, Container, ContainerInfos, InfoCaixa, NumberContainer, SideBar } from "./styled";


const TimeMania = () => {
  const [concursos, setConcursos] = useState([])

  const getConcursos = () => {
    axios.get(`https://brainn-api-loterias.herokuapp.com/api/v1/concursos/1622`)

      .then((res) => {
        setConcursos(res.data)
        console.log(res.data)

      }).catch((err) => {
        console.log(err)
      })
  }


  useEffect(() => {
    getConcursos()
  }, [])

  const dataFormatada = moment(concursos.data, "YYYY-MM-DD").format("DD/MM/YYYY");

  return (
    <Container>
      <SideBar>
        <SelectBar />
        <Concurso>TIMEMANIA</Concurso>
        <ContainerInfos>
          <div>Concurso:
            {concursos.id}</div>

          <div >Data:{dataFormatada}</div>
        </ContainerInfos>
        <div>
          {concursos.numeros && <NumberContainer>
            <Ball><p>{concursos.numeros[0]}</p></Ball>
            <Ball><p>{concursos.numeros[1]}</p></Ball>
            <Ball><p>{concursos.numeros[2]}</p></Ball>
            <Ball><p>{concursos.numeros[3]}</p></Ball>
            <Ball><p>{concursos.numeros[4]}</p></Ball>
            <Ball><p>{concursos.numeros[5]}</p></Ball>
            <Ball><p>{concursos.numeros[6]}</p></Ball>
          </NumberContainer>}
          <InfoCaixa>
            <p>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
          </InfoCaixa>
        </div>
      </SideBar>
    </Container>
  );
}

export default TimeMania;