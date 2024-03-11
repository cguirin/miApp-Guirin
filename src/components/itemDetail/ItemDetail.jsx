import React from 'react';
import ItemCount from '../itemCount/ItemCount';
import './ItemDetail.css'; 

const ItemDetail = ({ producto }) => {
  return (
    <div className="item-detail"> 
        <h3>Detalle de: {producto.name} </h3>
        <img alt={producto.name} src={producto.image}/>
        <p>{producto.description}</p>
        <p>${producto.price}</p>
        <ItemCount stock={producto.stock}/>
    </div>
  );
}

export default ItemDetail;
