import { useContext } from 'react';
import { ProductsContext } from '../../context/Products.context';
import './Shop.styles.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div>
      <h1>Shop pagee</h1>
      {products.map(({ id, name }) => (
        <div key={id}>
          <h2>{name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Shop;
