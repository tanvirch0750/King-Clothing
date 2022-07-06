import Button from '../button/Button';
import ProductCard from '../product-card/ProductCard';
import './CategoryPreview.styles.scss';

const CategoryPreview = ({ title, products }) => {
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
        <Button>Show all {title}</Button>
      </div>
    </div>
  );
};

export default CategoryPreview;
