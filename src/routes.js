import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DefaultPage } from './components/DefaultPage/DefaultPage'
import { Cart } from './pages/Cart/Cart'
import { Category } from './pages/Category/Category'
import { Home } from './pages/Home/Home'
import Carrinho from './pages/Cart/Cart'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route path="/" element={<Home />} />
          <Route path="/categoria/:userName" element={<Category />} />
          <Route path="/carrinho" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
