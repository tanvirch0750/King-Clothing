import './CategoyDirectoryItem.styles.scss';

const CategoryDirectoryItem = ({ category }) => {
  const { id, imageUrl, title } = category;
  return (
    <div key={id} className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="directory-item-body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryDirectoryItem;
