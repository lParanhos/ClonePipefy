import { createGlobalStyle } from 'styled-components';

/** Criando os estilos globais */
export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}
html, body, #root {
    //Pega toda a tela
    height: 100%;
}

body {
font: 14px 'Roboto', sans-serif;
background: #ecf1f8;
color: #333;
//Deixa a fonte mais detalhada no chrome
-webkit-font-smoothing: antialiased !important;
}

ul {
    list-style: none;
}

`;