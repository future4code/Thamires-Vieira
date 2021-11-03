import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://pbs.twimg.com/profile_images/1281990916216168452/WjBoBVjq_400x400.jpg"
          nome="Thamires Lippelt"
          descricao="Oi, eu sou a Thamires. Sou estudante do curso de Desenvolvimento Web Full Stack na Labenu. Gosto de queimar meus neurônios realizando os exercícios e quando finalizo um projeto não quero guerra com ninguém."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Meu Contato</h2>
        <CardPequeno
          imagem="https://w7.pngwing.com/pngs/1023/729/png-transparent-email-address-electronic-mailing-list-logo-internet-email-miscellaneous-angle-triangle.png"
          nome="E-mail: "
          contato="thamilippelt@gmail.com"
        />
        <CardPequeno
          imagem="https://www.caceres.mt.leg.br/banco-de-imagens/placeholder.png/image"
          nome="Endereço: "
          contato="Rua Astolfo Guimarães, 56"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>

        <CardGrande
          imagem="https://pbs.twimg.com/profile_images/2369695869/bf08iu443wxg8j2uobh2_400x400.jpeg"
          nome="Colégio Marista Arquidiocesano"
          descricao="Fiz estágio na área de Pedagogia com crianças de 0 a 3 anos."
        />

        <CardGrande
          imagem="data:image/jpeg;base64,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"
          nome="Lila Moon"
          descricao="Proprietária de Perfumaria e Salão de beleza"
        />
      </div>

      <div className="page-section-container">
        <h2>Formação</h2>
        <CardGrande
          imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eff3d7d4dba18a22ca203c8_Logo_Labenu_vertical.png"
          nome="Labenu"
          descricao="Curso de Desenvolvimento Web Full Stack"
        />

        <CardGrande
          imagem="https://portal.fmu.br/wp-content/uploads/blog/2021/08/noticia-geral-img.jpg"
          nome="Faculdades Metropolitanas Unidas"
          descricao="Bacharelado em Negócios da Moda."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
