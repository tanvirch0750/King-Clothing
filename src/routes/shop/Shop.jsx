import { useContext } from 'react';
import CategoryPreview from '../../components/category-preview/CategoryPreview';
import { CategoriesContext } from '../../context/Categories.context';

import './Shop.styles.scss';

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default Shop;
