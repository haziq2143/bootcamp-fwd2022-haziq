import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
const List = (props) => {
  return (
    // <ul>
    //   {props.items.map((item, index) => (
    //     <li key={index}>{item}</li>
    //   ))}
    // </ul>

    <ListGroup>
      {props.items.map((item, index) => (
        <ListGroup.Item key={index}>{item}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};
export default List;
