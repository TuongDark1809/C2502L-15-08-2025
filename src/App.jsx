import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import ProductDetail from './components/ProductDetail'
import ProductList from './components/ProductList'
import AddProduct from './components/AddProduct'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/productDetail/:id" element={<ProductDetail/>}/>
      <Route path="/productList" element={<ProductList/>}/>
      <Route path="/addProduct" element={<AddProduct/>}/>
    </Routes>
  )
}

export default App