import React from "react"
import GlobalStyle from "./constants/GlobalStyle";
import Router from "./route/Router"

function App () {
  return (
    <div>
      <GlobalStyle />
      <Router/>
    </div>

  )
}

export default App;