import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import axios from 'axios'
import { Select } from "./syled"



const SelectBar = () => {

  const [loterias, setLoterias] = useState([])

  const getLoterias = () => {
    axios.get('https://brainn-api-loterias.herokuapp.com/api/v1/loterias')

      .then((res) => {
        setLoterias(res.data)
      }).catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    getLoterias()

  }, [])


  const history = useHistory()

  const onChangeInput = (event) => {
    history.push(event.target.value)
  }


  return (
    <div>
      <Select onChange={onChangeInput} >
        <option hidden>SELECIONE...</option>
        <option value={'/megasena'}>MEGASENA</option>
        <option value={'/quina'}>QUINA</option>
        <option value={'/lotofacil'}>LOTOFACIL</option>
        <option value={'/lotomania'}>LOTOMANIA</option>
        <option value={'/timemania'}>TIMEMANIA</option>
        <option value={'/diadesorte'}>DIA DE SORTE</option>
      </Select>
    </div>
  )
}

export default SelectBar