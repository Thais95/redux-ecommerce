import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Comprovante } from './pages/Comprovante/Comprovante'
import { DefaultPage } from './components/DefaultPage/DefaultPage'
import { ErrorPage } from './components/ErrorPage/ErrorPage'
import { Cart } from './pages/Cart/Cart'
import { Category } from './pages/Category/Category'
import { Home } from './pages/Home/Home'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route path="/" element={<Home />} />
          <Route path="/categoria/:userName" element={<Category />} />
          <Route path="/carrinho" element={<Cart />} />
          <Route path="/comprovante" element={<Comprovante />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
