import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  opacity: ${props => props.done ? 0.6 : 1};
/** Esse flex representa o dados abaixo
*   flex-grow: 0;   
    - Permite que o item estique mais do que o necessário
    - Caso o valor seja igual a 1 vai esticar para ocupar todo espaço possível
      


*   flex-shrink: 0;
    - Permite que o item encolha

*   flex-basis: 320px;
    - Determina o tamanho base do elemento
    - Se o flex direction for row, ele determina a largura,
      caso seja column determina a altura  
 */
flex: 0 0 320px;

/** Estiliza toda a div que tem uma div antecessora */
& + div {
    border-left: 1px solid rgba(0,0,0, 0.05);
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;
}

h2 {
    font-weight: 500;
    font-size: 16px;
    padding: 0 10px;
}

button {
    width: 42px;
    height: 42px;
    border-radius: 10px;
    background: #3b5bfd;
    border: 0;
    cursor: pointer;
}

ul{
    margin-top: 30px
}
`;
