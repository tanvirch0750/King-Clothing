import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/ProductCard';
import Spinner from '../../components/spinner/Spinner';
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from '../../store/categories/category.selector';
import './Category.styles.scss';

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[categoriesMap]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [products, categoriesMap]);

  return (
    <>
      <h2 className="category-title">{category}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default Category;
