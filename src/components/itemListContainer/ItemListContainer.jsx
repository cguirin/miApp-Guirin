import React, { useState, useEffect } from 'react';
import { getProducts } from '../../mock/fakeApi';
import ItemList from '../itemList/ItemList';
import { useParams } from 'react-router-dom';

function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts()
      .then((res) => {
        if (categoryId) {
          const filteredProducts = res.filter(product => product.category === categoryId);
          setProductos(filteredProducts);
        } else {
          setProductos(res);
        }
      })
      .catch((error) => console.log(error, 'No se encontró'))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <div>
      {loading ? (
        <h3 style={{ color: 'yellow' }}>Cargando productos...</h3>

      ) : (
        <div>
          {categoryId ? (
            <h1 className='fst-italic text-success'>
              {greeting} <span style={{ color: 'green' }}>{categoryId}</span>
            </h1>
          ) : (
            <h1 className='fst-italic text-success'>{greeting}</h1>
          )}

          <ItemList productos={productos} />
        </div>
      )}
    </div>
  );
}

export default ItemListContainer;

