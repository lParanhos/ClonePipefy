import React from 'react';
import { useDrag } from 'react-dnd';

import { Container, Label } from './styles';

export default function Card({ data }) {
  const [{ isDragging }, dragRef] = useDrag({
    item: {type: 'CARD'},
    //Pega informações do item, como por exemplo,
    //se está sendo arrastado ou não
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    })
  })


  return (
    <Container isDragging={isDragging} ref={dragRef}>
      <header>
        {data.labels.map(label => <Label key={label} color={label} />)}
      </header>
      <p>{data.content}</p>
      {data.user && <img src={data.user} alt="" />}
    </Container>
  );
}
