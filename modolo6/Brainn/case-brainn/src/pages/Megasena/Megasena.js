import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"
import SelectBar from "../../components/SelectBar";
import moment from 'moment';
import { Ball, Concurso, Container,  ContainerInfos,  InfoCaixa,  NumberContainer,  SideBar } from "./styled";


const Megasena = () => {

  const [loterias, setLoterias] = useState([])
  const [loteriasConcursos, setLoteriasConcursos] = useState([])
  const [concursos, setConcursos] = useState({})

  const getLoterias = () => {
    axios.get('https://brainn-api-loterias.herokuapp.com/api/v1/loterias')

      .then((res) => {
        setLoterias(res.data)
      }).catch((err) => {
        console.log(err)
      })
  }

  const getLoteriasConcurso = () => {
    axios.get('https://brainn-api-loterias.herokuapp.com/api/v1/loterias-concursos')

      .then((res) => {
        setLoteriasConcursos(res.data)
      }).catch((err) => {
        console.log(err)
      })
  }


  const getConcursos = () => {
    axios.get(`https://brainn-api-loterias.herokuapp.com/api/v1/concursos/2359`)

      .then((res) => {
        setConcursos(res.data)
        console.log(res.data)

      }).catch((err) => {
        console.log(err)
      })
  }


  useEffect(() => {
    getLoterias()
    getLoteriasConcurso()
    getConcursos()
  }, [])


  console.log(concursos)

  const dataFormatada = moment(concursos.data, "YYYY-MM-DD").format("DD/MM/YYYY");

  return (
    <Container>
        <SideBar>
        <SelectBar />
          <Concurso>MEGA-SENA</Concurso>
          <ContainerInfos>
            <div>Concurso:
              {concursos.id}</div>
            <div >Data:{dataFormatada}</div>
          </ContainerInfos>
          {concursos.numeros && <NumberContainer>
            <Ball><p>{concursos.numeros[0]}</p></Ball>
            <Ball><p>{concursos.numeros[1]}</p></Ball>
            <Ball><p>{concursos.numeros[2]}</p></Ball>
            <Ball><p>{concursos.numeros[3]}</p></Ball>
            <Ball><p>{concursos.numeros[4]}</p></Ball>
            <Ball><p>{concursos.numeros[5]}</p></Ball>
          </NumberContainer>}
          <InfoCaixa>
            Este sorteio ?? meramente ilustrativo e n??o possui nenhuma liga????o com a CAIXA.
          </InfoCaixa>
        </SideBar>
    </Container>
  )
}

export default Megasena;