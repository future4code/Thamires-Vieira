import axios from "axios";
import React, { useEffect, useState } from "react";
import SelectBar from "../../components/SelectBar";
import moment from 'moment';


const DiaDeSorte = () => {
  const [concursos, setConcursos] = useState([])

  const getConcursos = () => {
    axios.get(`https://brainn-api-loterias.herokuapp.com/api/v1/concursos/440`)

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
    <div>
    <SelectBar />
       <div>DIA DE SORTE</div>
 
       <div>Concurso:
         {concursos.id}</div>
 
       <div >Data:{dataFormatada}</div>
       <div>
         {concursos.numeros && <div>
           <div><p>{concursos.numeros[0]}</p></div>
           <div><p>{concursos.numeros[1]}</p></div>
           <div><p>{concursos.numeros[2]}</p></div>
           <div><p>{concursos.numeros[3]}</p></div>
           <div><p>{concursos.numeros[4]}</p></div>
           <div><p>{concursos.numeros[5]}</p></div>
           <div><p>{concursos.numeros[6]}</p></div>
         </div>}
         <div>
           <p>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
         </div>
       </div>
     </div>
  );
}

export default DiaDeSorte;