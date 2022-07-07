import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/ProductCard';
import { CategoriesContext } from '../../context/Categories.context';
import './Category.styles.scss';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[categoriesMap]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [products, categoriesMap]);

  return (
    <>
      <h2 className="category-title">{category}</h2>
      <div className="category-container">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Category;
