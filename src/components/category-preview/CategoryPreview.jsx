import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import ProductCard from '../product-card/ProductCard';
import './CategoryPreview.styles.scss';

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();

  return (
    <div className="category-preview-container">
      <div className="preview-inner">
        <h2>
          <span className="title">{title.toUpperCase()}</span>
        </h2>
        <div className="preview">
          {products
            .filter((_, idx) => idx < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
      <div className="preview-btn">
        <Button onClick={() => navigate(`${title}`)}>Show all {title}</Button>
      </div>
    </div>
  );
};

export default CategoryPreview;
