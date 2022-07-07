import { useNavigate } from 'react-router-dom';
import './CategoyDirectoryItem.styles.jsx';
import {
  BackgroundImage,
  DirectoryItemBody,
  DirectoryItemContainer,
} from './CategoyDirectoryItem.styles.jsx';

const CategoryDirectoryItem = ({ category }) => {
  const { id, imageUrl, title, route } = category;
  const navigate = useNavigate();
  return (
    <DirectoryItemContainer key={id} onClick={() => navigate(route)}>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <DirectoryItemBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  );
};

export default CategoryDirectoryItem;
