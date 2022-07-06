import { createContext, useState } from 'react';

export const ProductsContext = createContext({
  products: [],
});

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // one time for add product categories to database
  // useEffect(() => {
  //   addCollectionsAndDocuments('categories', SHOP_DATA);
  // }, []);

  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
