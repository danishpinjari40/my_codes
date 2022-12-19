
import { Heading } from '@chakra-ui/react';
import './App.css';
import ProductPage from './components/ProductPage';
// import ProductPage from './components/Product';
// import productData from './productData.json'

function App() {
  return (
    <>
    <Heading>Home page</Heading>
      {/* <ProductPage productData={productData.productData}/> */}

      <ProductPage/>
    </>
  );
}

export default App;
